// ============================================================
// MİSYON KORUMA – SORU BANKASI (questions.js)
// ------------------------------------------------------------
// Soruları bu dosyaya eklersin. Her ünitenin köşeli parantezi [ ]
// içine, aralarına VİRGÜL koyarak soru nesneleri yazılır.
//
// Soru biçimi:
//   {
//     "id": "ANAYASA_U01_0001",      // benzersiz olmalı, sonradan değiştirme
//     "courseId": "anayasa",
//     "unitId": "anayasa_u1",
//     "difficulty": "medium",        // easy | medium | hard
//     "question": "Soru metni",
//     "options": ["A şıkkı", "B şıkkı", "C şıkkı", "D şıkkı", "E şıkkı"],
//     "answer": 0,                   // 0=A 1=B 2=C 3=D 4=E
//     "explanation": "Kısa açıklama",
//     "reference": "Kaynak"
//   },
//
// Dikkat: Metin içinde çift tırnak (") kullanacaksan başına \ koy: \"
// Bir hata yaparsan uygulama açılışta hatanın satırını gösterir.
// Kitaptan gelen sorularda ek alanlar (isteğe bağlı):
//   "source": "Kitap · Test 1 · S5"   kaynağı
//   "set": "Test 1", "setNo": 5         kitaptaki test ve sırası (Kitap Testleri bölümünde sırayla çözülür)
//   "note": "..."                       cevap anahtarı / mevzuat uyarısı (cevaptan sonra gösterilir)
// Bu dosyayı uygulamadaki "Soru Yükle → questions.js indir" ile de üretebilirsin.
// ============================================================
