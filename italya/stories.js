// Lombardiya ve Lugano'nun hikâyesi — uzun okuma yazıları
// places: yazıda geçen ve haritada olan yerler (detayı açılır). img: kapak görseli için yer id'si.
window.STORIES = [
  {
    id: "bergamo",
    title: "Venedik'in en batı kalesi",
    era: "Bergamo · 1428–1797",
    read: 4,
    img: "mura",
    lead: "Bergamo, Venedik'ten 250 km uzakta olmasına rağmen tam 369 yıl Venedik Cumhuriyeti'nin bir parçasıydı. Città Alta'da yürürken gördüğünüz neredeyse her şey bu uzun ilişkinin izi.",
    places: ["vecchia", "mura", "colleoni", "smm", "campanone", "vigilio", "rocca"],
    sections: [
      { h: "İki dev arasında bir tepe şehri", p: [
        "Bergamo, Alplerin ilk tepelerinin Po ovasıyla buluştuğu yerde kuruldu. Romalılar buraya Bergomum dedi; şehir o zamandan beri iki katlı: tepede eski merkez (Città Alta), aşağıda ovaya yayılan yeni şehir (Città Bassa).",
        "Ortaçağda Bergamo, kuzey İtalya'nın çoğu şehri gibi kendi kendini yöneten bir komündü. Ama 14. yüzyılda güçlü komşusu Milano'nun Visconti ailesine boyun eğmek zorunda kaldı. Campanone kulesi ve Palazzo della Ragione bu özgür komün döneminden kalma."
      ]},
      { h: "1428: Venedik bayrağı", p: [
        "15. yüzyılın başında Venedik, deniz ticaretini korumak için anakarada da toprak toplamaya başladı. Milano ile yapılan uzun savaşların sonunda 1428'de Bergamo Venedik'e geçti. Şehir artık Venedik'in en batıdaki ucu, Milano'ya karşı sınır kalesiydi.",
        "Venedik yönetimi Bergamo'ya görece bir refah getirdi. Şehir yün ve ipek ticaretiyle zenginleşti, Venedikli valiler Piazza Vecchia'yı bugünkü haline getirdi. Palazzo della Ragione'nin cephesindeki kanatlı aslan, Venedik'in koruyucusu Aziz Markos'un simgesi."
      ]},
      { h: "Bir paralı askerin mezarı", p: [
        "Bu dönemin en ünlü Bergamolusu Bartolomeo Colleoni'ydi. Paralı asker olarak başladığı kariyerinde bazen Venedik, bazen Milano için savaştı ve sonunda Venedik ordusunun ömür boyu başkomutanı oldu. Muazzam bir servet biriktirdi.",
        "Colleoni şehrin kalbinde, Santa Maria Maggiore'nin yanında kendine bir mezar şapeli istedi. Bazilikanın bir bölümü onun için yıkıldı. Ortaya çıkan Cappella Colleoni, renkli mermer cephesiyle Lombardiya Rönesansı'nın en gösterişli eserlerinden biri oldu. Bergamo'nun Venedik dönemindeki zenginliğinin de, bir askerin kibrinin de anıtı."
      ]},
      { h: "Hiç kuşatılmayan surlar", p: [
        "16. yüzyılın ortasında Milano İspanyolların eline geçmişti ve Venedik batı sınırından endişeliydi. 1561'de Città Alta'nın çevresine dev bir tahkimat yapılmasına karar verildi. Yapım için yüzlerce ev ve birkaç kilise yıkıldı, binlerce işçi 27 yıl çalıştı.",
        "Sonuç: altı kilometreye yakın, burçlu ve top mevzili bir sur. İronik olan, bu surların hiç savaş görmemesi. 1797'de Napolyon'un askerleri geldiğinde Venedik Cumhuriyeti zaten çökmüştü ve şehir direnmeden teslim oldu. Bugün surların üstü ağaçlı bir gezi yolu; 2017'de UNESCO Dünya Mirası listesine girdi."
      ]},
      { h: "Gece 22:00'deki 100 vuruş", p: [
        "Venedik döneminde Campanone'nin çanı her akşam 100 kez çalarak şehir kapılarının kapandığını duyururdu. Kapılar bugün açık, ama gelenek sürüyor: Cumartesi akşamı saat 22:00'de Piazza Vecchia'da olursanız aynı 100 vuruşu duyarsınız."
      ]}
    ]
  },
  {
    id: "milano",
    title: "Dükler, Leonardo ve bir katedral",
    era: "Milano · 1277–1535",
    read: 5,
    img: "duomo",
    lead: "Rönesans Milano'su iki ailenin, Visconti'ler ve Sforza'ların şehriydi. Bugün turistlerin gördüğü en büyük üç şey, yani Duomo, Sforza Kalesi ve Son Akşam Yemeği, bu iki ailenin hırsından doğdu.",
    places: ["duomo", "sforzesco", "grazie", "vigna", "ambrogio", "navigli"],
    sections: [
      { h: "Visconti'lerin katedrali", p: [
        "Visconti ailesi 1277'den itibaren Milano'yu yönetti. En hırslısı Gian Galeazzo'ydu: kuzey İtalya'nın büyük kısmını ele geçirdi, imparatordan dük unvanını satın aldı ve 1386'da şehrin eski katedralinin yerine Avrupa'nın en büyük kilisesini yapmaya karar verdi.",
        "İtalya'da gotik mimari pek tutmamıştı ama Gian Galeazzo Fransız ve Alman katedralleriyle yarışmak istiyordu. Yurtdışından ustalar getirildi, Maggiore Gölü yakınındaki Candoglia ocaklarının mermeri kanallarla şehre taşındı. Katedrali yapan kurum, Veneranda Fabbrica, bugün de hâlâ çalışıyor ve binanın bakımını yapıyor.",
        "Yapım yüzyıllarca sürdü. Cephe ancak 1805'te Napolyon'un emriyle bitirildi; Napolyon aynı yıl burada İtalya Kralı olarak taç giydi. Son bronz kapılar 1965'te takıldı. İtalyancada uzun süren işler için hâlâ 'Duomo'nun yapımı gibi' denir."
      ]},
      { h: "Sforza'lar ve kale", p: [
        "Son Visconti 1447'de erkek varis bırakmadan öldü. Kısa bir cumhuriyet denemesinden sonra, Visconti'nin kızıyla evli paralı asker komutanı Francesco Sforza 1450'de şehre girdi ve kendini dük ilan etti. İlk işi, halkın yıktığı Visconti kalesini çok daha büyük olarak yeniden yapmak oldu: bugünkü Castello Sforzesco.",
        "Francesco'nun oğlu Ludovico, esmer teni yüzünden 'il Moro' (Mağribi) diye anılırdı. Onun sarayı Avrupa'nın en parlak Rönesans saraylarından biriydi; mimar Bramante ve Leonardo da Vinci burada çalıştı."
      ]},
      { h: "Leonardo'nun Milano yılları", p: [
        "Leonardo 1482'de Milano'ya geldiğinde Ludovico'ya yazdığı mektupta kendini önce askeri mühendis, köprü ve top yapımcısı olarak tanıttı; ressamlığından ancak sonlarda bahsetti. 17 yıl boyunca saray için bayram dekorları, kanal kapakları, at heykeli projeleri ve resimler yaptı.",
        "1495–1498 arasında Santa Maria delle Grazie manastırının yemekhanesinin duvarına Son Akşam Yemeği'ni boyadı. Yavaş ve tekrar tekrar düzelterek çalışabilmek için ıslak sıva üzerine yapılan klasik fresk yerine kuru duvara tempera denedi. Sonuç kısa vadede muhteşem, uzun vadede felaketti: boya daha Leonardo hayattayken dökülmeye başladı.",
        "Ludovico, Leonardo'ya teşekkür olarak Son Akşam Yemeği'nin karşısında bir bağ hediye etti. Bu bağ 2015'te yeniden dikildi ve bugün gezilebiliyor."
      ]},
      { h: "Düşüş ve bir bomba", p: [
        "1499'da Fransa kralı Milano'yu aldı, Ludovico Fransa'da hapiste öldü, Leonardo şehri terk etti. 1535'te Sforza soyu tamamen bitti ve Milano iki yüzyıl sürecek İspanyol yönetimine girdi.",
        "Son Akşam Yemeği'nin en büyük sınavı 1943'teydi: bir Müttefik bombası yemekhanenin çatısını ve bir duvarını yıktı. Freskli duvar, önüne yığılan kum torbaları sayesinde ayakta kaldı. 1999'da biten yirmi yıllık restorasyon, sonraki yüzyılların rötuşlarını temizleyerek Leonardo'dan kalanı ortaya çıkardı. Bugün ziyaretçiler 15 dakikalık gruplar halinde, iklim kontrollü odalardan geçerek içeri alınıyor."
      ]}
    ]
  },
  {
    id: "moda",
    title: "Opera, pasajlar ve moda",
    era: "Milano · 1778–bugün",
    read: 4,
    img: "galleria",
    lead: "Milano İtalya'nın başkenti değil, ama birçok İtalyan'a göre ülkenin gerçek merkezi. Opera, sanayi, tasarım ve moda bu şehirde buluştu.",
    places: ["scala", "galleria", "quadrilatero", "brera", "rinascente", "portanuova", "prada", "basso"],
    sections: [
      { h: "La Scala: bir yangından doğan tiyatro", p: [
        "1776'da Milano'nun saray tiyatrosu yandı. Şehrin Avusturyalı yöneticileri yerine yenisini yapmaya karar verdi ve eski Santa Maria alla Scala kilisesinin arsasını seçti; tiyatro adını bu kiliseden aldı. 1778'de açılan La Scala, 19. yüzyılda Rossini, Bellini, Donizetti ve özellikle Verdi'nin operalarıyla dünyanın en önemli opera sahnesi oldu.",
        "Verdi'nin Nabucco'sundaki esirler korosu, Avusturya yönetimine karşı İtalyan birliği isteyenlerin gayriresmî marşına dönüştü. 1943'te bombalarla yıkılan tiyatro, 1946'da şef Toscanini'nin yönettiği bir konserle yeniden açıldı. Sezon her yıl 7 Aralık'ta, Milano'nun koruyucu azizi Ambrosius'un gününde başlar."
      ]},
      { h: "Birleşik İtalya'nın vitrini", p: [
        "1859'da Avusturyalılar Lombardiya'dan çekildi ve Milano yeni kurulan İtalya Krallığı'na katıldı. Şehir yeni kimliğini göstermek için Duomo ile La Scala arasına cam ve demirden muhteşem bir pasaj yaptırdı: Galleria Vittorio Emanuele II. 1877'de tamamlanan pasaj, Avrupa'nın modern alışveriş merkezlerinin atalarından biri sayılıyor.",
        "Pasajın içinde 1913'te iki kardeş, Mario ve Martino Prada, deri çanta ve bavul satan bir dükkân açtı. O dükkân bugün de aynı yerde."
      ]},
      { h: "Sanayi ve 'ekonomik mucize'", p: [
        "20. yüzyılda Milano İtalya'nın sanayi başkenti oldu: Pirelli lastikleri, Alfa Romeo arabaları, Olivetti daktiloları bu bölgede üretildi. İkinci Dünya Savaşı'ndan sonraki 'ekonomik mucize' yıllarında güneyden milyonlarca insan iş için kuzeye göç etti. 1958'de yapılan Pirelli Kulesi, yeni Milano'nun sembolü oldu.",
        "Bu dönem tasarımı da doğurdu. Milanolu mimar ve tasarımcılar mobilyadan lambaya, kahve makinesinden arabaya kadar her şeyi yeniden düşündü. Her nisan yapılan Salone del Mobile hâlâ dünyanın en önemli tasarım fuarı."
      ]},
      { h: "Moda başkenti", p: [
        "1970'lere kadar İtalyan modasının merkezi Floransa ve Roma'ydı. Sonra Giorgio Armani, Gianni Versace, Gianfranco Ferré gibi genç tasarımcılar hazır giyim (prêt-à-porter) koleksiyonlarını Milano'da göstermeye başladı. Şehrin tekstil sanayisine ve reklam ajanslarına yakınlığı büyük avantajdı. Montenapoleone ve çevresindeki sokaklar kısa sürede dünyanın en pahalı alışveriş adresleri arasına girdi.",
        "Bugün Milano Moda Haftası Paris, Londra ve New York'la birlikte dünyanın en önemli dört moda haftasından biri. Prada, moda dışında da iz bırakıyor: 2015'te açılan Fondazione Prada, şehrin en ilgi çekici çağdaş sanat merkezlerinden."
      ]},
      { h: "Aperitivo: bir şehir ritüeli", p: [
        "Milano'da iş çıkışı, akşam yemeğinden önce bir içki ve atıştırmalık için buluşmak neredeyse kutsal. Campari 1860'larda Galleria'daki kafesinde bu acı likörü satmaya başladı; Negroni ve Spritz gibi kokteyller bu kültürün parçası oldu. Bar Basso'da 1960'ların sonunda yanlışlıkla cin yerine köpüklü şarap koyan barmen, dünyaya Negroni Sbagliato'yu hediye etti. Navigli kanallarının kıyısı bugün bu ritüelin en kalabalık sahnesi."
      ]}
    ]
  },
  {
    id: "como",
    title: "İpek, elektrik ve villalar",
    era: "Como Gölü · Roma'dan bugüne",
    read: 4,
    img: "bellagio",
    lead: "Como Gölü 2.000 yıldır zenginlerin dinlenme yeri. Ama Como şehri aynı zamanda Avrupa'nın ipek başkenti ve elektriğin doğduğu yer.",
    places: ["duomoco", "brunate", "faro", "voltiano", "lungolago", "olmo", "balbianello", "carlotta", "bellagio", "terragni"],
    sections: [
      { h: "Plinius'ların gölü", p: [
        "Romalılar gölü Lacus Larius diye adlandırdı. Como'da doğan Yaşlı Plinius doğa tarihi üzerine 37 ciltlik ansiklopedisini yazdı ve MS 79'da Vezüv patlamasını yakından görmek isterken öldü. Yeğeni Genç Plinius, mektuplarında göl kıyısındaki iki villasından bahseder: birine 'Komedi', diğerine 'Trajedi' adını vermişti. Bellagio'daki villanın bunlardan biri olduğu düşünülüyor.",
        "Como Katedrali'nin cephesinde iki Plinius'un heykelleri, azizlerin yanında duruyor. Hıristiyan bir kilisede pagan yazarlara bu kadar onur verilmesi çok nadir."
      ]},
      { h: "İpek şehri", p: [
        "16. yüzyılda dut ağaçları ve ipek böcekçiliği göl çevresine yayıldı. 19. yüzyılda Como, Avrupa'nın en önemli ipek üretim merkezlerinden biri oldu. Bugün dünyanın büyük moda evlerinin ipek eşarp ve kumaşlarının önemli bir kısmı hâlâ Como çevresindeki atölyelerde dokunuyor ve basılıyor. Bellagio ve Como'daki ipek dükkânları bu geleneğin vitrini."
      ]},
      { h: "Volta'nın pili", p: [
        "Alessandro Volta 1745'te Como'da doğdu. Bir meslektaşının kurbağa bacaklarıyla yaptığı deneyleri farklı yorumlayarak elektriğin iki farklı metalin teması ile üretilebileceğini gösterdi. 1800'de, çinko ve bakır diskleri tuzlu suya batırılmış kartonla üst üste dizerek ilk sürekli elektrik akımı veren pili yaptı. Napolyon onu kont yaptı. Elektrik geriliminin birimi 'volt' onun adını taşıyor.",
        "Como, ölümünün 100. yılı olan 1927'de onun için iki anıt yaptı: göl kıyısındaki Tempio Voltiano müzesi ve Brunate'nin tepesindeki deniz feneri şeklindeki Faro Voltiano. 2015'te Daniel Libeskind'in Life Electric heykeli bunlara eklendi."
      ]},
      { h: "Villalar çağı", p: [
        "16. yüzyıldan itibaren Milanolu soylular ve kardinaller göl kıyısına yazlık villalar yaptırmaya başladı. 18. ve 19. yüzyıllarda göl Avrupa aristokrasisinin, romantik şair ve bestecilerin buluşma yeri oldu. Stendhal, Liszt, Bellini, Verdi burada kaldı.",
        "Villa del Balbianello 1787'de bir kardinal için yapıldı; son sahibi Everest kâşifi Guido Monzino villayı İtalya'nın kültür mirası vakfına bıraktı. Villa Carlotta adını, annesinin düğün hediyesi olarak aldığı Prusya prensesi Charlotte'tan alıyor. 20. ve 21. yüzyılda göl Hollywood'un da gözdesi oldu: Star Wars, James Bond ve Ocean's Twelve sahneleri burada çekildi."
      ]},
      { h: "Kışın göl", p: [
        "Kasım sonunda göl bambaşka: villaların çoğu ve feribot seferlerinin bir kısmı kış uykusuna yatıyor, kalabalık yok, sis dağların arasında yükselip alçalıyor. Bu dönemde açık kalan Balbianello gibi birkaç villa, Brunate füniküleri ve Bellagio'nun sessiz sokakları gölün en samimi yüzünü gösteriyor."
      ]}
    ]
  },
  {
    id: "lugano",
    title: "İsviçre'nin İtalyan yüzü",
    era: "Lugano ve Ticino · 1512–bugün",
    read: 3,
    img: "riforma",
    lead: "Lugano'da herkes İtalyanca konuşuyor, kahve İtalyan gibi içiliyor, ama trenler İsviçre saatiyle kalkıyor. Bu ikili kimlik 500 yıllık bir tarihten geliyor.",
    places: ["riforma", "angioli", "lorenzo", "bre", "gandria", "morcote", "campione", "hesse", "grotto"],
    sections: [
      { h: "Milano'dan İsviçre'ye", p: [
        "Ortaçağda Lugano ve bugünkü Ticino bölgesi Milano dükalığına bağlıydı. 1500'lerin başında İtalya Savaşları sırasında İsviçre Konfederasyonu'nun kantonları Alpleri aşarak bu vadileri ele geçirdi. 1512–1513'ten itibaren Lugano, İsviçreli kantonların ortak yönettiği bir 'tabi bölge' oldu; yani İsviçre'ye aitti ama İsviçreli değildi.",
        "Bu dönemde yapılan Santa Maria degli Angioli kilisesindeki Bernardino Luini freskleri, Lugano'nun kültürel olarak hâlâ Milano'ya baktığını gösteriyor."
      ]},
      { h: "1798–1803: Ticino doğuyor", p: [
        "Napolyon'un ordusu 1798'de bölgeye girdiğinde halk Cisalpine Cumhuriyeti'ne, yani İtalya'ya katılmak yerine 'Özgür ve İsviçreli' olmayı seçti. 1803'te Ticino eşit haklara sahip bir kanton olarak İsviçre Konfederasyonu'na katıldı. Piazza della Riforma adını 1830'daki kanton anayasası reformundan alıyor.",
        "Campione d'Italia ise bu süreçte bir istisna olarak kaldı: kasaba yüzyıllardır Milano'daki bir manastıra bağlı olduğu için Lombardiya'nın parçası olarak kaldı ve bugün hâlâ İsviçre'nin ortasında küçük bir İtalyan toprağı."
      ]},
      { h: "Bankalar ve sanatçılar", p: [
        "20. yüzyılda Lugano, İsviçre'nin Zürih ve Cenevre'den sonra üçüncü büyük finans merkezi oldu; İtalyan sermayesi sınırın hemen öte yanındaki bu şehre aktı. Ilıman iklimi ve palmiye ağaçlarıyla da kuzeyli sanatçıları ve yazarları çekti. Alman yazar Hermann Hesse 1919'da yakındaki Montagnola köyüne yerleşti ve Siddhartha'yı, Bozkırkurdu'nu burada yazdı."
      ]},
      { h: "Grotto kültürü", p: [
        "Ticino'nun kendine özgü bir yemek kültürü var: grotto. Bunlar dağ yamaçlarına oyulmuş, doğal olarak serin kalan şarap ve peynir mahzenleriydi. Pazar günleri köylüler mahzenlerinin önünde taş masalarda yer içer olmuştu; zamanla bu mahzenler rustik lokantalara dönüştü. Bugün bir grottoda polenta, brasato (şarapta pişmiş dana) ve seramik kâsede (boccalino) Ticino merlot'su içmek, Lugano'nun en karakteristik akşamı."
      ]}
    ]
  },
  {
    id: "sofra",
    title: "Lombard sofrası",
    era: "Mutfak rehberi",
    read: 3,
    img: "corsarola",
    lead: "Kuzey İtalya mutfağı güneyden farklı: zeytinyağı yerine tereyağı, makarnanın yanında pirinç ve mısır unu, domates yerine peynir. Bu yazı menüde ne arayacağınızı anlatıyor.",
    places: ["corsarola", "marianna", "mimmo", "luini", "trattoria", "navigli", "silvio", "grotto", "basso"],
    sections: [
      { h: "Milano: safran ve altın pirzola", p: [
        "Risotto alla milanese: safranla sarıya boyanmış, tereyağı ve parmesanla kremamsı hale getirilmiş pirinç. Bir efsaneye göre 16. yüzyılda Duomo'nun vitraylarında çalışan bir ustanın çırağı renk için kullandığı safranı bir düğün yemeğine katınca doğmuş.",
        "Cotoletta alla milanese: kemikli dana pirzolanın yumurta ve galeta ununa bulanıp tereyağında kızartılmışı. Ossobuco: dana inciğinin yavaş pişirilmiş hali, çoğunlukla risotto ile servis edilir. Kışın panettone her yerde: Milano'nun kuru meyveli, yumuşak Noel ekmeği."
      ]},
      { h: "Bergamo: polenta ve casoncelli", p: [
        "Bergamo ve çevresinde mısır unu lapası polenta neredeyse her öğünde var. Polenta taragna karabuğday unu ve bol peynirle yapılan dağ usulü versiyonu. Casoncelli alla bergamasca: içi et, peynir ve bazen amaretti kurabiyesiyle doldurulmuş, eritilmiş tereyağı, adaçayı ve pancetta ile servis edilen dolma makarna.",
        "Tatlıda 'polenta e osei' (polenta ve kuşlar): aslında sarı badem ezmesiyle kaplı bir pandispanya, üstünde çikolatadan kuşlar. Adı, eskiden gerçekten kuşlarla yenen bir yemeğe şaka. Città Alta'daki La Marianna'da ise 1961'de stracciatella dondurması icat edildi."
      ]},
      { h: "Como: göl balığı", p: [
        "Göl kıyısında risotto con pesce persico (tatlı su levreği filetolu risotto) imza yemek. Missoltini, kurutulup tuzlanmış göl sardalyesi; polenta ile yenir. Como çevresi ayrıca kahverengi ekmek ve peynirleriyle bilinir."
      ]},
      { h: "Lugano: merlot ve çikolata", p: [
        "Ticino'nun şarap üretiminin büyük kısmı merlot. Grotto'larda polenta, brasato, luganighe sosisi ve kestane yemekleri çıkıyor. İsviçre'de olduğunuzu da unutmayın: çikolata her köşede, Caslano'daki Alprose fabrikasında üretimi izleyip tadabilirsiniz."
      ]},
      { h: "Pratik kurallar", p: [
        "İtalya'da öğle yemeği ≈12:30–14:30, akşam yemeği 19:30'dan sonra. Aperitivo saati 18:00–20:30. Masaya oturunca 'coperto' (servis/ekmek) ücreti yazılır, ≈2–4 € kişi başı; bahşiş zorunlu değil, iyi serviste küçük bir yuvarlama yeterli. Kapuçino sadece sabahları içilir; öğleden sonra espresso (sadece 'caffè' deyin) sipariş edin. Barda ayakta içilen kahve masada oturmaktan ucuzdur."
      ]}
    ]
  }
];
