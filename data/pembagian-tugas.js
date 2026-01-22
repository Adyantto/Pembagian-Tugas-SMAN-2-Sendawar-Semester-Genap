/* =====================================================
   DATABASE PEMBAGIAN TUGAS GURU
   (TUGAS MENGAJAR + TUGAS TAMBAHAN DIGABUNG)
   ===================================================== */

const pembagianTugas = [

  /* ================= ADIYANTO ================= */
  { username:"199411222024211014", jenis:"mengajar", uraian:"PKWU", kelas:"XII C, D, G, H", jp:8 },
  { username:"199411222024211014", jenis:"mengajar", uraian:"Kimia", kelas:"XI A", jp:5 },
  { username:"199411222024211014", jenis:"tambahan", uraian:"Kepala Perpustakaan", kelas:"", jp:12 },
  { username:"199411222024211014", jenis:"tambahan", uraian:"Wali Kelas XII D", kelas:"", jp:2 },,
  { username:"199411222024211014", jenis:"tambahan", uraian:"Pembina OSIS", kelas:"", jp:2 },,
  { username:"199411222024211014", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },,

  /* ========== AGUSTINUS BHAKTI PARRANGAN ========== */
  { username:"196908272002121004", jenis:"mengajar", uraian:"Bahasa Inggris", kelas:"XI A–F", jp:18 },
  { username:"196908272002121004", jenis:"tambahan", uraian:"Koordinator Projek Kelas X A", kelas:"", jp:2 },,
  { username:"196908272002121004", jenis:"tambahan", uraian:"Koordinator Projek Kelas X B", kelas:"", jp:2 },,
  { username:"196908272002121004", jenis:"tambahan", uraian:"Koordinator Projek Kelas X C", kelas:"", jp:2 },,
  { username:"196908272002121004", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },,

  /* ========== AL MISBAH HAJIHI ========== */
  { username:"199406062020122026", jenis:"mengajar", uraian:"PKN", kelas:"XII A, B, H", jp:6 },
  { username:"199406062020122026", jenis:"mengajar", uraian:"PKN", kelas:"XI A–E", jp:10 },
  { username:"199406062020122026", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },,
  { username:"199406062020122026", jenis:"tambahan", uraian:"Wali Kelas XI B", kelas:"", jp:2 },,
  { username:"199406062020122026", jenis:"tambahan", uraian:"Koordinator Projek Kelas XII C", kelas:"", jp:2 },,
  { username:"199406062020122026", jenis:"tambahan", uraian:"Koordinator Projek Kelas XII D", kelas:"", jp:2 },,
  { username:"199406062020122026", jenis:"tambahan", uraian:"Koordinator Projek Kelas XII E", kelas:"", jp:2 },,

  /* ========== ALBINA PURNAMA SARI ========== */
  { username:"198907282024212026", jenis:"mengajar", uraian:"Matematika", kelas:"XII E–H", jp:16 },
  { username:"198907282024212026", jenis:"mengajar", uraian:"Matematika", kelas:"XI C–D", jp:8 },
  { username:"198907282024212026", jenis:"tambahan", uraian:"Wali Kelas XII H", kelas:"", jp:2 },,
  { username:"198907282024212026", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },,

  /* ========== ANASTASIA RENDO ========== */
  { username:"Anastasia Rendo", jenis:"mengajar", uraian:"Agama Katolik", kelas:"XI E–H", jp:12 },
  { username:"Anastasia Rendo", jenis:"mengajar", uraian:"Agama Katolik", kelas:"X A–H", jp:24 },
  { username:"Anastasia Rendo", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },,
   { username:"Anastasia Rendo", jenis:"tambahan", uraian:"Guru Piket", kelas:"", jp:1 },

  /* ========== ELISIUS JUNAIDI ========== */
  { username:"199206142020121010", jenis:"mengajar", uraian:"PJOK", kelas:"XII A–D", jp:12 },
  { username:"199206142020121010", jenis:"tambahan", uraian:"Waka Kesiswaan", kelas:"", jp:12 },
  { username:"199206142020121010", jenis:"tambahan", uraian:"Wali Kelas XII C", kelas:"", jp:2 },,
  { username:"199206142020121010", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },,

  /* ========== EMILIANA ========== */
  { username:"197111212007012015", jenis:"mengajar", uraian:"SBK", kelas:"XI A–D", jp:8 },
  { username:"197111212007012015", jenis:"mengajar", uraian:"Muatan Lokal", kelas:"X A–H", jp:16 },
  { username:"197111212007012015", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },
   { username:"197111212007012015", jenis:"tambahan", uraian:"Guru Piket", kelas:"", jp:1 },
  
  /* ========== ENITA ========== */
  { username:"198712042024212018", jenis:"mengajar", uraian:"Fisika", kelas:"XII A–B, G", jp:20 },
  { username:"198712042024212018", jenis:"mengajar", uraian:"Fisika", kelas:"X F–G", jp:9 },
  { username:"198712042024212018", jenis:"tambahan", uraian:"Wali Kelas XII G", kelas:"", jp:2 },,
  { username:"198712042024212018", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },,

  /* ========== EVARITUS ABUR ========== */
  { username:"198710262024211005", jenis:"mengajar", uraian:"PJOK", kelas:"XI G, H", jp:6 },
  { username:"198710262024211005", jenis:"mengajar", uraian:"PJOK", kelas:"X A–E", jp:15 },
  { username:"198710262024211005", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },,
  { username:"198710262024211005", jenis:"tambahan", uraian:"Guru Piket", kelas:"", jp:1 },

  /* ========== FEBE NOVITA SARI ========== */
  { username:"198911302024212019", jenis:"mengajar", uraian:"SBK", kelas:"XII A–D", jp:8 },
  { username:"198911302024212019", jenis:"mengajar", uraian:"Agama Kristen", kelas:"X A–D", jp:12 },
  { username:"198911302024212019", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },,
   { username:"198911302024212019", jenis:"tambahan", uraian:"Guru Piket", kelas:"", jp:1 },

  /* ========== FETRUS FREDY ========== */
  { username:"198805252024211015", jenis:"mengajar", uraian:"Fisika", kelas:"XI A–B, E–F", jp:20 },
  { username:"198805252024211015", jenis:"mengajar", uraian:"Informatika", kelas:"X A–B", jp:4 },
  { username:"198805252024211015", jenis:"tambahan", uraian:"Wali Kelas XI F", kelas:"", jp:2 },,
  { username:"198805252024211015", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },,

  /* ========== FIDELIS ANASTASIUS F. ========== */
  { username:"Fidelis Anastasius F.", jenis:"mengajar", uraian:"PJOK", kelas:"XI A, B, C, D, E, F", jp:18 },
  { username:"Fidelis Anastasius F.", jenis:"mengajar", uraian:"Muatan Lokal", kelas:"XI A–H", jp:16 },
  { username:"Fidelis Anastasius F.", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },,
  { username:"Fidelis Anastasius F.", jenis:"tambahan", uraian:"Koor. Projek Kelas X G", kelas:"", jp:2 },,
  { username:"Fidelis Anastasius F.", jenis:"tambahan", uraian:"Pembina Ekskul", kelas:"", jp:2 },,
   { username:"Fidelis Anastasius F.", jenis:"tambahan", uraian:"Guru Piket", kelas:"", jp:1 },

  /* ========== FLORENS MARSE TANDI ========== */
  { username:"198004182022212015", jenis:"mengajar", uraian:"Ekonomi", kelas:"XI G–H", jp:10 },
  { username:"198004182022212015", jenis:"mengajar", uraian:"PKWU", kelas:"XI A–F", jp:12 },
  { username:"198004182022212015", jenis:"tambahan", uraian:"Wali Kelas XI D", kelas:"", jp:2 },,
  { username:"198004182022212015", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },,

  /* ========== GUNAWAN ========== */
  { username:"199208152025211125", jenis:"mengajar", uraian:"Sastra Inggris (Tk. Lanjut)", kelas:"XI E–F, H", jp:15 },
  { username:"199208152025211125", jenis:"mengajar", uraian:"Bahasa Inggris", kelas:"XI H", jp:3 },
  { username:"199208152025211125", jenis:"tambahan", uraian:"Wali Kelas XI E", kelas:"", jp:2 },,
  { username:"199208152025211125", jenis:"tambahan", uraian:"Koor. Projek Kelas XI A", kelas:"", jp:2 },,
  { username:"199208152025211125", jenis:"tambahan", uraian:"Koor. Projek Kelas XI B", kelas:"", jp:2 },,
  { username:"199208152025211125", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },,

  /* ========== HASNI SALONDONG ========== */
  { username:"198912092023212008", jenis:"mengajar", uraian:"Bahasa Indonesia", kelas:"XII A–D", jp:16 },
  { username:"198912092023212008", jenis:"mengajar", uraian:"Bahasa Indonesia", kelas:"XI C–D", jp:8 },
  { username:"198912092023212008", jenis:"tambahan", uraian:"Wali Kelas XI C", kelas:"", jp:2 },,
  { username:"198912092023212008", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },,

  /* ========== IMAS KOMALA ========== */
  { username:"198304112024212012", jenis:"mengajar", uraian:"Bahasa Indonesia", kelas:"XII E–H", jp:16 },
  { username:"198304112024212012", jenis:"mengajar", uraian:"Bahasa Indonesia", kelas:"XI A–B", jp:8 },
  { username:"198304112024212012", jenis:"tambahan", uraian:"Wali Kelas XII E", kelas:"", jp:2 },,
  { username:"198304112024212012", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },,

  /* ========== JASMIR ========== */
  { username:"199712312025211047", jenis:"mengajar", uraian:"Agama Islam", kelas:"XI E–H", jp:12 },
  { username:"199712312025211047", jenis:"mengajar", uraian:"SBK", kelas:"XI G–H", jp:4 },
  { username:"199712312025211047", jenis:"mengajar", uraian:"Agama Islam", kelas:"X A–H", jp:24 },
  { username:"199712312025211047", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },
   { username:"199712312025211047", jenis:"tambahan", uraian:"Guru Piket", kelas:"", jp:1 },

  /* ========== JUFRIN ========== */
  { username:"198501252022211016", jenis:"mengajar", uraian:"Sosiologi", kelas:"XII C–D", jp:10 },
  { username:"198501252022211016", jenis:"mengajar", uraian:"Sosiologi", kelas:"X A–E", jp:15 },
  { username:"198501252022211016", jenis:"tambahan", uraian:"Wali Kelas X B", kelas:"", jp:2 },,
  { username:"198501252022211016", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },,

  /* ========== KATRINA PAREALLO ========== */
  { username:"199502092025212063", jenis:"mengajar", uraian:"Matematika", kelas:"XI E, F, H", jp:12 },
  { username:"199502092025212063", jenis:"mengajar", uraian:"Matematika (Tk. Lanjut)", kelas:"XI A–B, G", jp:15 },
  { username:"199502092025212063", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },,
   { username:"199502092025212063", jenis:"tambahan", uraian:"Guru Piket", kelas:"", jp:1 },

  /* ========== LISTIANA ========== */
  { username:"199207252022212013", jenis:"mengajar", uraian:"Kimia", kelas:"XI B, C, D", jp:15 },
  { username:"199207252022212013", jenis:"mengajar", uraian:"Informatika", kelas:"X C–H", jp:12 },
  { username:"199207252022212013", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },,

  /* ========== M. NASIR ========== */
  { username:"198207282025211048", jenis:"mengajar", uraian:"Agama Islam", kelas:"XII A–H", jp:24 },
  { username:"198207282025211048", jenis:"mengajar", uraian:"Agama Islam", kelas:"XI A–D", jp:12 },
  { username:"198207282025211048", jenis:"mengajar", uraian:"SBK", kelas:"XI E–F", jp:4 },
  { username:"198207282025211048", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },,
   { username:"198207282025211048", jenis:"tambahan", uraian:"Guru Piket", kelas:"", jp:1 },

  /* ========== MAHDALENA ========== */
  { username:"199209292023212018", jenis:"mengajar", uraian:"Bahasa Indonesia", kelas:"XI E–F", jp:8 },
  { username:"199209292023212018", jenis:"mengajar", uraian:"Bahasa Indonesia", kelas:"X A–D", jp:16 },
  { username:"199209292023212018", jenis:"tambahan", uraian:"Wali Kelas X C", kelas:"", jp:2 },,
  { username:"199209292023212018", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },,

  /* ========== MALEAKI KARAENG LOLO ========== */
  { username:"197903192024211002", jenis:"mengajar", uraian:"SBK", kelas:"XII E–H", jp:8 },
  { username:"197903192024211002", jenis:"mengajar", uraian:"Agama Kristen", kelas:"X E–H", jp:12 },
  { username:"197903192024211002", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },,
   { username:"197903192024211002", jenis:"tambahan", uraian:"Guru Piket", kelas:"", jp:1 },

  /* ========== MARIA DWI O.L. ========== */
  { username:"199910222025212029", jenis:"mengajar", uraian:"Sejarah", kelas:"XII A–H", jp:16 },
  { username:"199910222025212029", jenis:"mengajar", uraian:"Sejarah", kelas:"XI A–H", jp:16 },
  { username:"199910222025212029", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },,
   { username:"199910222025212029", jenis:"tambahan", uraian:"Guru Piket", kelas:"", jp:1 },

  /* ========== MARLIN MARIO EVA SUMUAL ========== */
  { username:"197303142024212003", jenis:"mengajar", uraian:"Agama Kristen", kelas:"XI A–H", jp:24 },
  { username:"197303142024212003", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },,
   { username:"197303142024212003", jenis:"tambahan", uraian:"Guru Piket", kelas:"", jp:1 },

  /* ========== MEYDI SUSANTI ========== */
  { username:"198105202011012007", jenis:"mengajar", uraian:"Ekonomi", kelas:"XII E–F, H", jp:15 },
  { username:"198105202011012007", jenis:"mengajar", uraian:"Ekonomi", kelas:"XI E–F", jp:10 },
  { username:"198105202011012007", jenis:"tambahan", uraian:"Koor PKB/PKG", kelas:"", jp:2 },,
  { username:"198105202011012007", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },,
   { username:"198105202011012007", jenis:"tambahan", uraian:"Guru Piket", kelas:"", jp:1 },

  /* ========== MEYLINDa ========== */
  { username:"199505052024212077", jenis:"mengajar", uraian:"Informatika", kelas:"XII F–H", jp:15 },
  { username:"199505052024212077", jenis:"mengajar", uraian:"Informatika", kelas:"XI G–H", jp:10 },
  { username:"199505052024212077", jenis:"mengajar", uraian:"Koding dan AI", kelas:"X A–H", jp:16 },
  { username:"199505052024212077", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },,
   { username:"199505052024212077", jenis:"tambahan", uraian:"Guru Piket", kelas:"", jp:1 },

  /* ========== MIRA HENNY ASMIATI ========== */
  { username:"198606212009022001", jenis:"mengajar", uraian:"Geografi", kelas:"XII E–F, G", jp:15 },
  { username:"198606212009022001", jenis:"mengajar", uraian:"Geografi", kelas:"XI E–F", jp:10 },
  { username:"198606212009022001", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },,
   { username:"198606212009022001", jenis:"tambahan", uraian:"Guru Piket", kelas:"", jp:1 },

  /* ========== MUHAMMAD AFWAN MAULANA ========== */
  { username:"200001242024211004", jenis:"mengajar", uraian:"Geografi", kelas:"XI A–B", jp:10 },
  { username:"200001242024211004", jenis:"mengajar", uraian:"Geografi", kelas:"X E–H", jp:12 },
  { username:"200001242024211004", jenis:"tambahan", uraian:"Wali Kelas XI A", kelas:"", jp:2 },,
  { username:"200001242024211004", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },

  /* ========== MUHAMMAD NASIR ========== */
  { username:"198902022024211015", jenis:"mengajar", uraian:"Bahasa Indonesia", kelas:"XI G–H", jp:8 },
  { username:"198902022024211015", jenis:"mengajar", uraian:"Bahasa Indonesia", kelas:"X E–H", jp:16 },
  { username:"198902022024211015", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },,
   { username:"198902022024211015", jenis:"tambahan", uraian:"Guru Piket", kelas:"", jp:1 },

  /* ========== MULYADI ========== */
  { username:"198310102022211022", jenis:"mengajar", uraian:"PKN", kelas:"XII C, D, E, F, G", jp:10 },
  { username:"198310102022211022", jenis:"mengajar", uraian:"PKN", kelas:"X A–C", jp:6 },
  { username:"198310102022211022", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },,
  { username:"198310102022211022", jenis:"tambahan", uraian:"Wali Kelas XII F", kelas:"", jp:2 },,
  { username:"198310102022211022", jenis:"tambahan", uraian:"Koor. Projek Kelas XII F", kelas:"", jp:2 },,
  { username:"198310102022211022", jenis:"tambahan", uraian:"Koor. Projek Kelas XII G", kelas:"", jp:2 },,
  { username:"198310102022211022", jenis:"tambahan", uraian:"Koor. Projek Kelas XII H", kelas:"", jp:2 },,

  /* ========== NATALIA TIVO ========== */
  { username:"199512052023212025", jenis:"mengajar", uraian:"Geografi", kelas:"XII A–B", jp:10 },
  { username:"199512052023212025", jenis:"mengajar", uraian:"Geografi", kelas:"X A–D", jp:12 },
  { username:"199512052023212025", jenis:"tambahan", uraian:"Wali Kelas X D", kelas:"", jp:2 },,
  { username:"199512052023212025", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },,

  /* ========== NATANIEL DEDI AMBA TODING ========== */
  { username:"199612212023211001", jenis:"mengajar", uraian:"Matematika (Tk. Lanjut)", kelas:"XII A–B, E", jp:15 },
  { username:"199612212023211001", jenis:"mengajar", uraian:"Matematika", kelas:"X A–C", jp:12 },
  { username:"199612212023211001", jenis:"tambahan", uraian:"Wali Kelas X A", kelas:"", jp:2 },,
  { username:"199612212023211001", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },,

  /* ========== NINA ROSIDA ========== */
  { username:"199201052014032003", jenis:"mengajar", uraian:"Matematika", kelas:"XII A–D", jp:16 },
  { username:"199201052014032003", jenis:"mengajar", uraian:"Matematika", kelas:"XI A–B", jp:8 },
  { username:"199201052014032003", jenis:"tambahan", uraian:"Wali Kelas XII A", kelas:"", jp:2 },,
  { username:"199201052014032003", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },,

  /* ========== NOPITA PUTRI NASARI ========== */
  { username:"199411062025212073", jenis:"mengajar", uraian:"Matematika", kelas:"XI G", jp:4 },
  { username:"199411062025212073", jenis:"mengajar", uraian:"Matematika", kelas:"X D–H", jp:20 },
   { username:"199411062025212073", jenis:"tambahan", uraian:"Guru Piket", kelas:"", jp:1 },

  /* ========== NURINTAN TOGATOROP ========== */
  { username:"198711222025212023", jenis:"mengajar", uraian:"Ekonomi", kelas:"X A–H", jp:24 },
  { username:"198711222025212023", jenis:"tambahan", uraian:"Wali Kelas X H", kelas:"", jp:2 },,
  { username:"198711222025212023", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },,

  /* ========== NURMAYA SIHOTANG ========== */
  { username:"199108242025212058", jenis:"mengajar", uraian:"Sosiologi", kelas:"XI C–D", jp:10 },
  { username:"199108242025212058", jenis:"mengajar", uraian:"Sosiologi", kelas:"X F–H", jp:9 },
  { username:"199108242025212058", jenis:"mengajar", uraian:"Sejarah", kelas:"X F–H", jp:6 },
  { username:"199108242025212058", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },,
   { username:"199108242025212058", jenis:"tambahan", uraian:"Guru Piket", kelas:"", jp:1 },

  /* ========== PERAWATI ========== */
  { username:"198602272025212025", jenis:"mengajar", uraian:"Bahasa Inggris", kelas:"X A–F", jp:18 },
  { username:"198602272025212025", jenis:"tambahan", uraian:"Wali Kelas X F", kelas:"", jp:2 },,
  { username:"198602272025212025", jenis:"tambahan", uraian:"Koor. Projek Kelas X D", kelas:"", jp:2 },,
  { username:"198602272025212025", jenis:"tambahan", uraian:"Koor. Projek Kelas X E", kelas:"", jp:2 },,
  { username:"198602272025212025", jenis:"tambahan", uraian:"Koor. Projek Kelas X F", kelas:"", jp:2 },,
  { username:"198602272025212025", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },,

  /* ========== PETRONELA SHERLLY ========== */
  { username:"199405162024212036", jenis:"mengajar", uraian:"PKN", kelas:"XI F, G, H", jp:6 },
  { username:"199405162024212036", jenis:"mengajar", uraian:"PKN", kelas:"X D, E, F, G, H", jp:10 },
  { username:"199405162024212036", jenis:"mengajar", uraian:"Sejarah", kelas:"X A, B, C, D, E", jp:10 },
  { username:"199405162024212036", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },,
  { username:"199405162024212036", jenis:"tambahan", uraian:"Wali Kelas X E", kelas:"", jp:2 },,
  { username:"199405162024212036", jenis:"tambahan", uraian:"Koor. Projek Kelas XII A", kelas:"", jp:2 },,
  { username:"199405162024212036", jenis:"tambahan", uraian:"Koor. Projek Kelas XII B", kelas:"", jp:2 },,
  { username:"199405162024212036", jenis:"tambahan", uraian:"Koor. Projek Kelas X H", kelas:"", jp:2 },,

  /* ========== R ARIEF SIDIK PRAMONO ========== */
  { username:"196703311991031009", jenis:"mengajar", uraian:"PKWU", kelas:"XI G–H", jp:4 },
  { username:"196703311991031009", jenis:"mengajar", uraian:"Biologi", kelas:"X A–C", jp:9 },
  { username:"196703311991031009", jenis:"tambahan", uraian:"Kepala Laboratorium", kelas:"", jp:12 },
  { username:"196703311991031009", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },,

  /* ========== RIFKY IBNU ABDUL AZIZ ========== */
  { username:"Rifky Ibnu Abdul Aziz", jenis:"mengajar", uraian:"Bimbingan Konseling", kelas:"XII A–D", jp:8 },
  { username:"Rifky Ibnu Abdul Aziz", jenis:"mengajar", uraian:"Bimbingan Konseling", kelas:"XI A–H", jp:16 },
  { username:"Rifky Ibnu Abdul Aziz", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },,
   { username:"Rifky Ibnu Abdul Aziz", jenis:"tambahan", uraian:"Guru Piket", kelas:"", jp:1 },

  /* ========== RILATI SRI WAHYUNI ========== */
  { username:"199604272024212035", jenis:"mengajar", uraian:"Kimia", kelas:"XI G–H", jp:10 },
  { username:"199604272024212035", jenis:"mengajar", uraian:"Kimia", kelas:"X A–E", jp:15 },
  { username:"199604272024212035", jenis:"tambahan", uraian:"Wali Kelas XI H", kelas:"", jp:2 },,
  { username:"199604272024212035", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },,

  /* ========== ROMI PUSPITA ========== */
  { username:"198903112025212023", jenis:"mengajar", uraian:"Biologi", kelas:"XI C–D", jp:10 },
  { username:"198903112025212023", jenis:"mengajar", uraian:"Biologi", kelas:"X D–H", jp:15 },
  { username:"198903112025212023", jenis:"tambahan", uraian:"Pembina UKS", kelas:"", jp:2 },,
  { username:"198903112025212023", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },
   { username:"198903112025212023", jenis:"tambahan", uraian:"Guru Piket", kelas:"", jp:1 },

  /* ========== SATIA LIRI YANTI ========== */
  { username:"199408092024212035", jenis:"mengajar", uraian:"PJOK", kelas:"XII E–H", jp:12 },
  { username:"199408092024212035", jenis:"mengajar", uraian:"PJOK", kelas:"X F, G, H", jp:9 },
  { username:"199408092024212035", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },,
  { username:"199408092024212035", jenis:"tambahan", uraian:"Guru Piket", kelas:"", jp:1 },

  /* ========== SAUL ========== */
  { username:"197107211995021001", jenis:"mengajar", uraian:"Fisika", kelas:"X A–E", jp:15 },
  { username:"197107211995021001", jenis:"tambahan", uraian:"Waka Kurikulum", kelas:"", jp:12 },
  { username:"197107211995021001", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },,

  /* ========== SITI AMINAH ========== */
  { username:"198908132025212024", jenis:"mengajar", uraian:"PKWU", kelas:"XII A, B, E, F", jp:8 },
  { username:"198908132025212024", jenis:"mengajar", uraian:"PKWU", kelas:"X A–H", jp:16 },
  { username:"198908132025212024", jenis:"tambahan", uraian:"Wali Kelas X G", kelas:"", jp:2 },,
  { username:"198908132025212024", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },,

  /* ========== SOPIANA ========== */
  { username:"197908162024212003", jenis:"mengajar", uraian:"Agama Kristen", kelas:"XII A–H", jp:24 },
  { username:"197908162024212003", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },,
   { username:"197908162024212003", jenis:"tambahan", uraian:"Guru Piket", kelas:"", jp:1 },

  /* ========== STIVAN MARGUS PICASOUW ========== */
  { username:"198403052022211022", jenis:"mengajar", uraian:"Bahasa Inggris", kelas:"XII A–G", jp:21 },
  { username:"198403052022211022", jenis:"tambahan", uraian:"Wali Kelas XII B", kelas:"", jp:2 },,
  { username:"198403052022211022", jenis:"tambahan", uraian:"Guru Piket", kelas:"", jp:1 },
  { username:"198403052022211022", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },,

  /* ========== SUMARMI ========== */
  { username:"198110172010012022", jenis:"mengajar", uraian:"Kimia", kelas:"XII A–D", jp:20 },
  { username:"198110172010012022", jenis:"tambahan", uraian:"Waka Sapras", kelas:"", jp:12 },
  { username:"198110172010012022", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },,
   { username:"198110172010012022", jenis:"tambahan", uraian:"Guru Piket", kelas:"", jp:1 },

  /* ========== SUSILAWATI ========== */
  { username:"198006132005022004", jenis:"mengajar", uraian:"Biologi", kelas:"XII C–D, H", jp:15 },
  { username:"198006132005022004", jenis:"tambahan", uraian:"Waka Humas", kelas:"", jp:12 },
  { username:"198006132005022004", jenis:"tambahan", uraian:"Penilai Kinerja Guru (PKG)", kelas:"", jp:2 },,
  { username:"198006132005022004", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },,
   { username:"198006132005022004", jenis:"tambahan", uraian:"Guru Piket", kelas:"", jp:1 },

  /* ========== VIDRICH DENDI ========== */
  { username:"Vidrich Dendi", jenis:"mengajar", uraian:"Bimbingan Konseling", kelas:"XII E–H", jp:8 },
  { username:"Vidrich Dendi", jenis:"mengajar", uraian:"Bimbingan Konseling", kelas:"X A–H", jp:16 },
  { username:"Vidrich Dendi", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },,
   { username:"Vidrich Dendi", jenis:"tambahan", uraian:"Guru Piket", kelas:"", jp:1 },

  /* ========== YOHANA FRANSISKA SELLA ========== */
  { username:"199210132024212038", jenis:"mengajar", uraian:"Kimia", kelas:"XII E–F, H", jp:15 },
  { username:"199210132024212038", jenis:"mengajar", uraian:"Kimia", kelas:"X F–G", jp:9 },
  { username:"199210132024212038", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },,

  /* ========== YOSEP ARAKIAN LEPABATANG ========== */
  { username:"198212282024211011", jenis:"mengajar", uraian:"Bahasa Inggris", kelas:"XII G", jp:3 },
  { username:"198212282024211011", jenis:"mengajar", uraian:"Bahasa Inggris", kelas:"X G–H", jp:6 },
  { username:"198212282024211011", jenis:"mengajar", uraian:"Sastra Inggris (Tk. Lanjut)", kelas:"XI C–D", jp:10 },
  { username:"198212282024211011", jenis:"tambahan", uraian:"Koor. Projek Kelas XI C", kelas:"", jp:2 },,
  { username:"198212282024211011", jenis:"tambahan", uraian:"Koor. Projek Kelas XI D", kelas:"", jp:2 },,
  { username:"198212282024211011", jenis:"tambahan", uraian:"Koor. Projek Kelas XI E", kelas:"", jp:2 },,
  { username:"198212282024211011", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },,
   { username:"198212282024211011", jenis:"tambahan", uraian:"Guru Piket", kelas:"", jp:1 },

  /* ========== YUDHA KALVARI ========== */
  { username:"198912262025211011", jenis:"mengajar", uraian:"Sastra Inggris (Tk. Lanjut)", kelas:"XII C–D, G", jp:15 },
  { username:"198912262025211011", jenis:"mengajar", uraian:"Bahasa Inggris", kelas:"XI G", jp:3 },
  { username:"198912262025211011", jenis:"tambahan", uraian:"Wali Kelas XI G", kelas:"", jp:2 },,
  { username:"198912262025211011", jenis:"tambahan", uraian:"Koor. Projek Kelas XI F", kelas:"", jp:2 },,
  { username:"198912262025211011", jenis:"tambahan", uraian:"Koor. Projek Kelas XI G", kelas:"", jp:2 },,
  { username:"198912262025211011", jenis:"tambahan", uraian:"Koor. Projek Kelas XI H", kelas:"", jp:2 },,
  { username:"198912262025211011", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },,

  /* ========== YUVENALIS RAGA GENING ========== */
  { username:"Yuvenalis Raga Gening", jenis:"mengajar", uraian:"Agama Katolik", kelas:"XII A–H", jp:24 },
  { username:"Yuvenalis Raga Gening", jenis:"mengajar", uraian:"Agama Katolik", kelas:"XI A–D", jp:12 },
  { username:"Yuvenalis Raga Gening", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },
   { username:"Yuvenalis Raga Gening", jenis:"tambahan", uraian:"Guru Piket", kelas:"", jp:1 },

];

window.pembagianTugas = pembagianTugas;
