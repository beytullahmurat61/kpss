// ============================================================
// MİSYON KORUMA – SORU VERİTABANI MOTORU
// - data/*.js dosyalarındaki soruları ve uygulama içinden yüklenen
//   soruları tek indekste toplar (Map tabanlı, binlerce soruda hızlı).
// - CSV / JSON soru evrakını ayrıştırır ve doğrular.
// - GitHub için data/<ders>.js dosyası üretir.
// ============================================================
const QDB = (() => {
  const LETTERS = ['A', 'B', 'C', 'D', 'E'];
  let all = [], byId = new Map(), byUnit = {}, byCourse = {}, warnings = [];
  const courseMap = {}, unitMap = {};

  COURSES.forEach(c => {
    courseMap[c.id] = c;
    c.units.forEach(u => { unitMap[u.id] = { ...u, courseId: c.id }; });
  });

  // ---------- yardımcılar ----------
  const fold = s => String(s ?? '').toLocaleLowerCase('tr-TR')
    .replace(/[çğıöşüâîû]/g, ch => ({ ç: 'c', ğ: 'g', ı: 'i', ö: 'o', ş: 's', ü: 'u', â: 'a', î: 'i', û: 'u' }[ch]))
    .replace(/[^a-z0-9]+/g, ' ').trim();

  function resolveCourse(v) {
    if (!v) return null;
    const f = fold(v);
    for (const c of COURSES) {
      if ([c.id, c.code, c.name, c.short].some(x => fold(x) === f)) return c;
    }
    for (const c of COURSES) if (fold(c.name).startsWith(f)) return c;
    const byLen = [...COURSES].sort((a, b) => fold(b.short).length - fold(a.short).length);
    for (const c of byLen) if (f.startsWith(fold(c.short))) return c;
    return null;
  }

  function resolveUnit(course, v) {
    if (v === undefined || v === null || v === '') return null;
    const s = String(v).trim();
    if (unitMap[s]) return unitMap[s];
    if (!course) return null;
    const f = fold(s);
    const num = f.match(/^(?:unite ?|u)?(\d+)(?: unite)?$/);
    if (num) return unitMap[`${course.id}_u${parseInt(num[1], 10)}`] || null;
    const hit = course.units.find(u => fold(u.title) === f);
    return hit ? unitMap[hit.id] : null;
  }

  function resolveDifficulty(v) {
    const f = fold(v);
    if (['easy', 'kolay', 'e', '1'].includes(f)) return 'easy';
    if (['hard', 'zor', 'h', '3'].includes(f)) return 'hard';
    return 'medium';
  }

  function resolveAnswer(v, optCount) {
    if (typeof v === 'number' && Number.isInteger(v)) return v >= 0 && v < optCount ? v : -1;
    const s = String(v ?? '').trim().toUpperCase();
    if (/^[A-E]$/.test(s)) { const i = LETTERS.indexOf(s); return i < optCount ? i : -1; }
    return -1;
  }

  // Ham bir soru nesnesini standart biçime çevirir. Hata varsa {error} döner.
  function normalize(raw, ctx = {}) {
    const g = (...keys) => { for (const k of keys) if (raw[k] !== undefined && raw[k] !== '') return raw[k]; return undefined; };
    const course = resolveCourse(g('courseId', 'ders', 'course')) || (ctx.courseId ? courseMap[ctx.courseId] : null);
    const unit = resolveUnit(course, g('unitId', 'unite', 'ünite', 'unit')) || (ctx.unitId ? unitMap[ctx.unitId] : null);
    const text = String(g('question', 'soru') ?? '').trim();
    let options = g('options', 'secenekler', 'şıklar');
    if (!Array.isArray(options)) options = LETTERS.map(L => g(L, L.toLowerCase())).filter(x => x !== undefined);
    options = options.map(o => String(o ?? '').trim());
    while (options.length && options[options.length - 1] === '') options.pop();

    if (!course) return { error: `Ders tanınmadı: "${g('courseId', 'ders', 'course') ?? ''}"` };
    if (!unit || unit.courseId !== course.id) return { error: `Ünite tanınmadı: "${g('unitId', 'unite', 'ünite', 'unit') ?? ''}" (${course.short})` };
    if (!text) return { error: 'Soru metni boş' };
    if (options.length < 2 || options.length > 5) return { error: `Şık sayısı ${options.length} (2–5 olmalı, varsayılan 5)` };
    if (options.some(o => !o)) return { error: 'Boş şık var' };
    if (new Set(options).size !== options.length) return { error: 'Aynı metne sahip şıklar var' };
    const answer = resolveAnswer(g('answer', 'cevap', 'dogru_cevap'), options.length);
    if (answer < 0) return { error: `Cevap geçersiz: "${g('answer', 'cevap', 'dogru_cevap') ?? ''}"` };

    const id = g('id') ? String(g('id')).trim().toUpperCase().replace(/\s+/g, '_') : '';
    return {
      q: {
        id, courseId: course.id, unitId: unit.id,
        difficulty: resolveDifficulty(g('difficulty', 'zorluk')),
        question: text, options, answer,
        explanation: String(g('explanation', 'aciklama', 'açıklama') ?? '').trim(),
        reference: String(g('reference', 'kaynak', 'referans') ?? '').trim()
      }
    };
  }

  function nextId(unitId, used) {
    const u = unitMap[unitId], c = courseMap[u.courseId];
    const prefix = `${c.code}_U${String(u.no).padStart(2, '0')}_`;
    let n = 0;
    used.forEach(id => { if (id.startsWith(prefix)) n = Math.max(n, parseInt(id.slice(prefix.length), 10) || 0); });
    const id = prefix + String(n + 1).padStart(4, '0');
    used.add(id);
    return id;
  }

  // ---------- indeks ----------
  function loadImported() {
    try { return JSON.parse(localStorage.getItem(APP_CONFIG.importKey) || '[]'); } catch { return []; }
  }

  function build() {
    all = []; byId = new Map(); byUnit = {}; byCourse = {}; warnings = [];
    COURSES.forEach(c => { byCourse[c.id] = []; c.units.forEach(u => { byUnit[u.id] = []; }); });

    const add = (raw, ctx, src) => {
      const r = normalize(raw, ctx);
      if (r.error) { warnings.push(`${src}: ${raw.id || '(ID yok)'} → ${r.error}`); return; }
      const q = r.q;
      if (!q.id) { warnings.push(`${src}: ID'siz soru atlandı → ${q.question.slice(0, 40)}`); return; }
      q.src = src;
      if (byId.has(q.id)) {
        const old = byId.get(q.id);
        if (src === 'static') { warnings.push(`Tekrarlanan ID: ${q.id}`); return; }
        // yüklenen soru aynı ID'li statik soruyu günceller
        byUnit[old.unitId] = byUnit[old.unitId].filter(x => x.id !== q.id);
      }
      byId.set(q.id, q);
    };

    for (const [cid, units] of Object.entries(QUESTION_BANK)) {
      if (Array.isArray(units)) { units.forEach(raw => add(raw, { courseId: cid }, 'static')); continue; }
      for (const [uid, arr] of Object.entries(units || {})) (arr || []).forEach(raw => add(raw, { courseId: cid, unitId: uid }, 'static'));
    }
    loadImported().forEach(raw => add(raw, {}, 'imported'));

    byId.forEach(q => { all.push(q); byUnit[q.unitId].push(q); });
    Object.values(byUnit).forEach(arr => arr.sort((a, b) => a.id.localeCompare(b.id)));
    COURSES.forEach(c => { byCourse[c.id] = c.units.flatMap(u => byUnit[u.id]); });
    if (warnings.length) console.warn(`Soru verisi uyarıları (${warnings.length}):`, warnings);
    console.info(`Soru bankası hazır: ${all.length} soru`);
  }

  // ---------- CSV ----------
  function parseCSV(text) {
    text = text.replace(/^\uFEFF/, '');
    const first = text.split(/\r?\n/, 1)[0];
    const counts = { ';': (first.match(/;/g) || []).length, ',': (first.match(/,/g) || []).length, '\t': (first.match(/\t/g) || []).length };
    const d = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
    const rows = []; let row = [], cell = '', q = false;
    for (let i = 0; i < text.length; i++) {
      const ch = text[i];
      if (q) {
        if (ch === '"') { if (text[i + 1] === '"') { cell += '"'; i++; } else q = false; }
        else cell += ch;
      } else if (ch === '"') q = true;
      else if (ch === d) { row.push(cell); cell = ''; }
      else if (ch === '\n' || ch === '\r') {
        if (ch === '\r' && text[i + 1] === '\n') i++;
        row.push(cell); rows.push(row); row = []; cell = '';
      } else cell += ch;
    }
    if (cell !== '' || row.length) { row.push(cell); rows.push(row); }
    const nonEmpty = rows.filter(r => r.some(c => c.trim() !== ''));
    if (!nonEmpty.length) return [];
    const alias = { ders: 'ders', course: 'ders', courseid: 'ders', unite: 'unite', unit: 'unite', unitid: 'unite',
      zorluk: 'zorluk', difficulty: 'zorluk', soru: 'soru', question: 'soru', cevap: 'cevap', 'dogru cevap': 'cevap', 'dogru': 'cevap',
      answer: 'cevap', aciklama: 'aciklama', explanation: 'aciklama', kaynak: 'kaynak', referans: 'kaynak',
      reference: 'kaynak', id: 'id', a: 'A', b: 'B', c: 'C', d: 'D', e: 'E',
      'a sikki': 'A', 'b sikki': 'B', 'c sikki': 'C', 'd sikki': 'D', 'e sikki': 'E',
      'secenek a': 'A', 'secenek b': 'B', 'secenek c': 'C', 'secenek d': 'D', 'secenek e': 'E' };
    const header = nonEmpty[0].map(h => alias[fold(h)] || fold(h));
    return nonEmpty.slice(1).map((r, i) => {
      const o = { __line: i + 2 };
      header.forEach((h, j) => { o[h] = (r[j] ?? '').trim(); });
      return o;
    });
  }

  // JSON: dizi, {dersId:{uniteId:[...]}} veya {uniteId:[...]} biçimlerini kabul eder
  function flattenJSON(data) {
    const out = [];
    const walk = (node, ctx) => {
      if (Array.isArray(node)) { node.forEach((x, i) => out.push({ ...x, __ctx: ctx, __line: i + 1 })); return; }
      if (node && typeof node === 'object') {
        if (node.question || node.soru) { out.push({ ...node, __ctx: ctx }); return; }
        for (const [k, v] of Object.entries(node)) {
          const next = { ...ctx };
          if (courseMap[k]) next.courseId = k; else if (unitMap[k]) next.unitId = k;
          walk(v, next);
        }
      }
    };
    walk(data, {});
    return out;
  }

  // Dosya metnini ayrıştırır, doğrular ve ID atar. Kaydetmez.
  function prepareImport(text, fileName, mode) {
    let rows = [];
    const name = (fileName || '').toLowerCase();
    try {
      if (name.endsWith('.json') || /^\s*[\[{]/.test(text)) rows = flattenJSON(JSON.parse(text));
      else if (name.endsWith('.js')) {
        const m = text.match(/=\s*([\[{][\s\S]*[\]}])\s*;?\s*$/);
        if (!m) throw new Error('JS dosyasında veri bulunamadı');
        const cid = (text.match(/QUESTION_BANK(?:\.|\[["'])(\w+)/) || [])[1];
        const data = JSON.parse(m[1]);
        rows = flattenJSON(cid ? { [cid]: data } : data);
      } else rows = parseCSV(text);
    } catch (e) {
      return { ok: [], errors: [{ line: '-', msg: 'Dosya okunamadı: ' + e.message }] };
    }
    const existing = mode === 'replace' ? all.filter(q => q.src === 'static') : all;
    const used = new Set(existing.map(q => q.id));
    const textIndex = new Map(existing.map(q => [q.unitId + '|' + fold(q.question), q.id]));
    const ok = [], errors = [], seen = new Set();
    rows.forEach((raw, i) => {
      const line = raw.__line ?? i + 1;
      const r = normalize(raw, raw.__ctx || {});
      if (r.error) { errors.push({ line, msg: r.error }); return; }
      const q = r.q;
      const key = q.unitId + '|' + fold(q.question);
      if (seen.has(key)) { errors.push({ line, msg: 'Dosyada aynı soru iki kez var' }); return; }
      seen.add(key);
      if (!q.id) q.id = textIndex.get(key) || nextId(q.unitId, used);
      else used.add(q.id);
      ok.push(q);
    });
    return { ok, errors, total: rows.length };
  }

  function saveImport(questions, mode) {
    let cur = mode === 'replace' ? [] : loadImported();
    const ids = new Set(questions.map(q => q.id));
    cur = cur.filter(q => !ids.has(q.id)).concat(questions.map(({ src, ...q }) => q));
    localStorage.setItem(APP_CONFIG.importKey, JSON.stringify(cur));
    build();
    return cur.length;
  }

  function clearImported() { localStorage.removeItem(APP_CONFIG.importKey); build(); }

  // GitHub'a konulacak data/<ders>.js dosya içeriği
  function exportCourseFile(courseId) {
    const c = courseMap[courseId], out = {};
    c.units.forEach(u => {
      out[u.id] = byUnit[u.id].map(({ src, ...q }) => q);
    });
    return `// ${c.name} – soru veri dosyası (${byCourse[courseId].length} soru)\n` +
      `// Oluşturma: ${new Date().toLocaleString('tr-TR')}\n` +
      `QUESTION_BANK.${courseId} = ${JSON.stringify(out, null, 1)};\n`;
  }

  return {
    LETTERS, build, prepareImport, saveImport, clearImported, exportCourseFile, loadImported,
    get all() { return all; }, get warnings() { return warnings; },
    get: id => byId.get(id), has: id => byId.has(id),
    unitQs: id => byUnit[id] || [], courseQs: id => byCourse[id] || [],
    course: id => courseMap[id], unit: id => unitMap[id]
  };
})();
