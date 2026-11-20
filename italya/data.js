// Lombardiya & Lugano gezisi — tüm içerik verisi (21–26 Kasım 2026)
// Fiyatlar kişi başı euro (€). İsviçre'deki yerler CHF; 1 CHF ≈ 1,07 € alındı.
// Kaynaklar arasında çelişen fiyat/saatler "teyit" ile işaretli. Ulaşım bilerek yok: araç kiralıyorsunuz.

window.TRIP = {
  title: "Lombardiya & Lugano",
  dates: "21–26 Kas",
  guests: "2 misafir",
  sunset: "≈16:45"
};

// Kategoriler (Airbnb tarzı üst şerit)
window.CATS = [
  { id: "all",      label: "Tümü",            icon: "grid" },
  { id: "top",      label: "Mutlaka görün",   icon: "star" },
  { id: "bergamo",  label: "Bergamo",         icon: "dome" },
  { id: "avm",      label: "AVM & outlet",    icon: "bag" },
  { id: "milano",   label: "Milano",          icon: "museum" },
  { id: "como",     label: "Como Gölü",       icon: "lake" },
  { id: "lugano",   label: "Lugano",          icon: "mountain" },
  { id: "museum",   label: "Müze & sanat",    icon: "frame" },
  { id: "view",     label: "Manzara",         icon: "sun" },
  { id: "food",     label: "Yeme-içme",       icon: "food" },
  { id: "night",    label: "Aperitivo & akşam", icon: "glass" },
  { id: "free",     label: "Ücretsiz",        icon: "ticket" }
];

// Şehirler: haritada ve kartlarda bölge etiketi
window.CITIES = {
  bergamo: { name: "Bergamo", lat: 45.7000, lng: 9.6650 },
  avm: { name: "AVM & outlet", lat: 45.55, lng: 9.35 },
  milano: { name: "Milano", lat: 45.4655, lng: 9.1880 },
  como: { name: "Como Gölü", lat: 45.90, lng: 9.17 },
  lugano: { name: "Lugano (İsviçre)", lat: 46.0040, lng: 8.9520 }
};

// Mekânlar
// score: bizim önerimiz (5 = kaçırmayın). cats: kategori id'leri (ilk şehir id'si zorunlu).
// price.eur: kişi başı (0 = ücretsiz, null = değişken). gq: Google Haritalar'da aranacak tam ad.
window.PLACES = [
  // ───────────── BERGAMO ─────────────
  {
    id: "vecchia", name: "Piazza Vecchia", local: "Città Alta", city: "bergamo",
    lat: 45.70385, lng: 9.66252, score: 5,
    cats: ["bergamo", "top", "free", "view"],
    price: { eur: 0, txt: "Ücretsiz" }, hours: "7/24", dur: "30 dk",
    gq: "Piazza Vecchia, Bergamo",
    short: "Yukarı Şehir'in kalbi. Ortaçağ belediye sarayı, Venedik aslanı, mermer çeşme ve kütüphane aynı meydanda.",
    history: "Meydan 15. yüzyılda, Bergamo'nun Venedik Cumhuriyeti'ne bağlı olduğu dönemde bugünkü şeklini aldı: Venedikliler eski evleri yıkıp şehrin yönetim merkezini burada topladı. Bir tarafta 12. yüzyıldan kalan, 16. yüzyılda yangından sonra yeniden yapılan Palazzo della Ragione (Adalet Sarayı) duruyor; cephesinde Venedik'in kanatlı Aziz Markos aslanı var. Karşısındaki beyaz Palazzo Nuovo'nun yapımı 1600'lerde başladı ama ancak 1928'de bitti; bugün Angelo Mai Kütüphanesi. Ortadaki Contarini çeşmesini 1780'de Venedikli vali Alvise Contarini şehre hediye etti.",
    why: "Bergamo'nun 350 yıllık Venedik dönemi bu meydanda okunuyor. Le Corbusier'nin buraya 'Avrupa'nın en güzel meydanı' dediği anlatılır.",
    tips: "Palazzo della Ragione'nin kemerlerinin altından geçince arkadaki Duomo meydanına çıkıyorsunuz. Akşam ışıklandırması çok güzel; geceyi burada bitirin.",
    wiki: "Piazza Vecchia, Bergamo"
  },
  {
    id: "campanone", name: "Campanone (Şehir Kulesi)", local: "Torre Civica", city: "bergamo",
    lat: 45.70398, lng: 9.66285, score: 4,
    cats: ["bergamo", "view"],
    price: { eur: 5, txt: "≈5 €", note: "teyit" }, hours: "Genelde Sa–Pz 10:00–18:00, Pzt kapalı (teyit)", dur: "30 dk",
    gq: "Campanone, Piazza Vecchia, Bergamo",
    short: "52 metrelik kule. Asansörle çıkıp Città Alta'yı, ovayı ve Alplerin eteklerini 360° görüyorsunuz.",
    history: "Kule 12. yüzyılda Suardi ailesinin konut kulesi olarak yapıldı, sonra belediyeye geçti. Venedik döneminde büyük çanı her akşam saat 22:00'de 100 kez çalarak şehir kapılarının kapandığını duyururdu. Bu gelenek hâlâ sürüyor: her gece 22:00'de 100 vuruş duyabilirsiniz. Kule bugün Bergamo Hikâyeler Müzesi'nin (Museo delle Storie) altı durağından biri.",
    why: "Città Alta'nın kubbeleri ve kuleleri en iyi buradan görünüyor. Açık havada uzakta Milano gökdelenleri bile seçiliyor.",
    tips: "Gün batımından (≈16:45) yarım saat önce çıkın. 22:00'deki 100 vuruşu meydanda duymak için akşam yemeğinden sonra Piazza Vecchia'da olun.",
    wiki: "Campanone (Bergamo)"
  },
  {
    id: "smm", name: "Santa Maria Maggiore Bazilikası", local: "Basilica di Santa Maria Maggiore", city: "bergamo",
    lat: 45.70330, lng: 9.66240, score: 5,
    cats: ["bergamo", "top", "museum"],
    price: { eur: 5, txt: "≈5 €", note: "teyit: bazı kaynaklar ücretsiz diyor" }, hours: "Kasım: Pzt–Ct 09:00–12:30 / 14:30–17:00, Pz 09:00–13:00 / 15:00–18:00 (kaynaklar çelişiyor)", dur: "30–40 dk",
    gq: "Basilica di Santa Maria Maggiore, Bergamo",
    short: "Dışı sade Romanesk, içi baştan aşağı altın, fresk ve dev Flaman halıları. Bergamo'nun en etkileyici iç mekânı.",
    history: "1133'te Bergamo kuraklık, veba ve kıtlıkla boğuşurken halk Meryem Ana'ya adakta bulundu ve 1137'de bazilikanın temeli atıldı. Dışarıdan bakınca 12. yüzyılın sade taş mimarisini, aslanların taşıdığı sütunlu kapıları görüyorsunuz. İçerisi ise 16. ve 17. yüzyılda barok tarzda tamamen yeniden süslendi: altın varaklı tavanlar, Floransa ve Flandre'da dokunmuş duvar halıları, Lorenzo Lotto'nun çizimlerine göre yapılmış ahşap kakma koro panoları. Bergamolu besteci Gaetano Donizetti'nin mezarı da burada.",
    why: "Dışıyla içi arasındaki fark insanı şaşırtıyor. Lotto'nun kakma panoları Rönesans ahşap işçiliğinin zirvelerinden sayılıyor.",
    tips: "Koro panolarının çoğu korunmak için kapakla örtülü; görevliye sorarsanız bazılarını açıyorlar. Kasım'da öğle arası kapanıyor, 14:30 sonrasına planlayın.",
    wiki: "Santa Maria Maggiore, Bergamo"
  },
  {
    id: "colleoni", name: "Colleoni Şapeli", local: "Cappella Colleoni", city: "bergamo",
    lat: 45.70345, lng: 9.66268, score: 5,
    cats: ["bergamo", "top", "museum", "free"],
    price: { eur: 0, txt: "Ücretsiz" }, hours: "Kasım–Şubat: Sa–Pz 09:00–12:30 / 14:00–16:30, Pzt kapalı", dur: "15–20 dk",
    gq: "Cappella Colleoni, Bergamo",
    short: "Renkli mermerden Rönesans mücevheri. Paralı asker Bartolomeo Colleoni kendi mezarı için yaptırdı.",
    history: "Bartolomeo Colleoni (1395–1475), Venedik ordusunun başkomutanlığına kadar yükselmiş, çok zengin bir condottiere (paralı asker komutanı) idi. Mezarının şehrin en görünür yerinde olmasını istedi ve 1472'de bazilikanın yan odasını yıktırıp yerine bu şapeli yaptırdı. Mimar Giovanni Antonio Amadeo pembe, beyaz ve siyah mermerle Lombardiya Rönesansı'nın en süslü cephelerinden birini yarattı. İçerideki kubbe freskleri 1730'larda Giambattista Tiepolo'nun.",
    why: "Kuzey İtalya Rönesans heykelciliğinin başyapıtlarından. Hem bir askerin kibrinin hem de Bergamo'nun zenginliğinin anıtı.",
    tips: "Kapının demir parmaklığındaki armaya dikkat: soyadı İtalyancada 'testisler' anlamına gelen 'coglioni' kelimesine benzediği için ailenin arması bu kelime oyunu üzerine kurulu. Yerel gelenekte uğur için armaya dokunulur. Kasım'da 16:30'da kapanıyor.",
    wiki: "Colleoni Chapel"
  },
  {
    id: "duomobg", name: "Bergamo Katedrali", local: "Cattedrale di Sant'Alessandro", city: "bergamo",
    lat: 45.70340, lng: 9.66185, score: 3,
    cats: ["bergamo", "free"],
    price: { eur: 0, txt: "Ücretsiz" }, hours: "Pzt–Cu 07:30–12:30 / 15:00–18:30, Ct–Pz 07:00–19:00", dur: "15 dk",
    gq: "Cattedrale di Sant'Alessandro, Bergamo",
    short: "Şehrin koruyucu azizi Alessandro'ya adanmış katedral. Beyaz cephesi bazilikanın hemen yanında.",
    history: "Burada erken Hıristiyan döneminden beri kilise var. Bugünkü yapı 17. yüzyılda büyük ölçüde yeniden inşa edildi, neoklasik cephesi ise ancak 1889'da tamamlandı. Şehrin koruyucusu Aziz Alessandro, geleneğe göre Bergamo'da şehit edilen bir Roma askeriydi; 26 Ağustos'ta şehir onun adına bayram yapar.",
    why: "Santa Maria Maggiore ve Colleoni Şapeli ile birlikte Bergamo'nun dini merkezini oluşturuyor.",
    tips: "Bazilikadan çıkınca 2 dakikalık bir uğrama yeterli.",
    wiki: "Bergamo Cathedral"
  },
  {
    id: "mura", name: "Venedik Surları ve Porta San Giacomo", local: "Mura Veneziane", city: "bergamo",
    lat: 45.70190, lng: 9.66150, score: 5,
    cats: ["bergamo", "top", "view", "free"],
    price: { eur: 0, txt: "Ücretsiz" }, hours: "7/24", dur: "30–60 dk",
    gq: "Porta San Giacomo, Bergamo",
    short: "Yukarı Şehir'i çevreleyen 6 km'lik UNESCO surları. Porta San Giacomo'dan gün batımı manzarası efsane.",
    history: "Venedik, Milano'ya karşı batı sınırını korumak için 1561–1588 arasında Città Alta'nın çevresine bu dev tahkimatı yaptırdı. Yapım için yüzlerce ev, birkaç kilise ve manastır yıkıldı. İronik olan, surların hiç kuşatma görmemesi. 1592'de yapılan beyaz mermerli Porta San Giacomo, Milano'ya bakan kapıydı. 2017'de surlar 'Venedik Savunma Yapıları' adıyla UNESCO Dünya Mirası listesine girdi.",
    why: "Bergamo'nun kartpostal manzarası: surların üstünden aşağı şehir, ova ve hava açıksa Apeninler görünüyor.",
    tips: "Gün batımında (≈16:45) Porta San Giacomo'nun önündeki seki en iyi nokta. Surların üstündeki ağaçlı yol (Viale delle Mura) akşam yürüyüşü için çok romantik.",
    wiki: "Venetian Works of Defence between the 16th and 17th Centuries: Stato da Terra – Western Stato da Mar"
  },
  {
    id: "funi", name: "Città Alta Füniküleri", local: "Funicolare Città Alta", city: "bergamo",
    lat: 45.69895, lng: 9.66690, score: 3,
    cats: ["bergamo", "view"],
    price: { eur: 1.7, txt: "≈1,70 € tek yön", note: "teyit" }, hours: "Her gün ≈07:00–24:00, birkaç dakikada bir", dur: "5 dk",
    gq: "Funicolare Città Alta, Viale Vittorio Emanuele II, Bergamo",
    short: "1887'den beri Aşağı Şehir ile Yukarı Şehir'i bağlayan tarihi raylı asansör.",
    history: "Füniküler 1887'de açıldı; ilk yıllarında su ağırlığıyla çalışıyordu. Bugün elektrikli ve birkaç dakikada bir kalkıyor. Üst istasyon, Città Alta'nın eski pazar meydanı Piazza Mercato delle Scarpe'ye çıkıyor.",
    why: "Città Alta'ya çıkmanın en keyifli yolu. Arabayı aşağıda bırakmak isterseniz de pratik.",
    tips: "Biletinizle 75 dakika içinde San Vigilio füniküleri dahil şehir hatlarına binebiliyorsunuz (teyit).",
    wiki: "Bergamo funicular"
  },
  {
    id: "vigilio", name: "San Vigilio Füniküleri ve Kalesi", local: "Funicolare & Castello di San Vigilio", city: "bergamo",
    lat: 45.70760, lng: 9.65240, score: 4,
    cats: ["bergamo", "view"],
    price: { eur: 1.7, txt: "≈1,70 € tek yön", note: "teyit" }, hours: "Füniküler her gün geç saate kadar; kale parkı kışın gün batımına kadar (teyit)", dur: "45–60 dk",
    gq: "Castello di San Vigilio, Bergamo",
    short: "Città Alta'nın da üstüne çıkan ikinci füniküler. Tepede kale kalıntıları ve şehrin en yüksek manzarası.",
    history: "San Vigilio tepesindeki kale ortaçağdan kalma, Venedikliler surlarla birlikte güçlendirdi. Füniküler 1912'de açıldı ve 1976–1991 arası kapalı kaldıktan sonra yeniden çalıştırıldı. Tepedeki villalar 19. yüzyılda Bergamolu zenginlerin yazlıklarıydı.",
    why: "Città Alta'yı kuşbakışı görmenin en iyi yolu. Akşam ışıklarında aşağıdaki şehir parlıyor.",
    tips: "Alt istasyon Colle Aperto'da, La Marianna'nın hemen yanında. Tepede Il Baretto'da aperitivo yapıp manzarayı izleyebilirsiniz.",
    wiki: "Bergamo–San Vigilio funicular"
  },
  {
    id: "rocca", name: "Rocca (Kale) ve Parkı", local: "Rocca di Bergamo", city: "bergamo",
    lat: 45.70450, lng: 9.66700, score: 2,
    cats: ["bergamo", "view", "free"],
    price: { eur: 0, txt: "Park ücretsiz · müze ≈5 €", note: "teyit" }, hours: "Park genelde gündüz; müze hafta sonu (teyit)", dur: "20–30 dk",
    gq: "Rocca di Bergamo",
    short: "14. yüzyıl kalesi. Bahçesinden Città Alta'nın kulelerine farklı bir açıdan bakılıyor.",
    history: "Kale 1331'de Bohemya kralı Jan'ın Bergamo'ya hâkim olduğu kısa dönemde başladı, Visconti'ler ve sonra Venedikliler genişletti. 19. yüzyılda Avusturya garnizonu burada konuşlandı. Bugün içinde 19. yüzyıl Bergamo'sunu anlatan küçük bir müze var.",
    why: "Kalabalıktan uzak, sakin bir manzara noktası.",
    tips: "Füniküler üst istasyonundan 5 dakika. Vaktiniz dar ise atlanabilir.",
    wiki: "Rocca of Bergamo"
  },
  {
    id: "carrara", name: "Accademia Carrara", local: "Pinacoteca dell'Accademia Carrara", city: "bergamo",
    lat: 45.70510, lng: 9.67270, score: 4,
    cats: ["bergamo", "museum"],
    price: { eur: 15, txt: "15 €", note: "teyit" }, hours: "Ça–Pzt 09:30–17:30 (son giriş 16:30), Salı kapalı (teyit)", dur: "1,5 sa",
    gq: "Accademia Carrara, Bergamo",
    short: "İtalya'nın en iyi resim galerilerinden. Raffaello, Botticelli, Bellini, Mantegna, Lotto.",
    history: "Kont Giacomo Carrara 1796'da koleksiyonunu ve bir resim okulunu şehre bağışladı. Sonraki iki yüzyılda başka Bergamolu koleksiyoncular da eserlerini buraya bıraktı; bu yüzden müze kendini 'koleksiyonculuğun müzesi' olarak tanımlıyor. 2015'teki büyük restorasyondan sonra yeniden açıldı. Raffaello'nun genç yaşta yaptığı Aziz Sebastian, Botticelli'nin Giuliano de' Medici portresi ve Bergamo okulu ressamı Giovan Battista Moroni'nin portreleri en ünlü eserler.",
    why: "Küçük ama yoğun: yaklaşık 300 eserle 500 yıllık İtalyan resmi. Kalabalık değil.",
    tips: "Cumartesi açık. Yukarı Şehir'den Porta Sant'Agostino'dan merdivenle 10 dakikada iniliyor. Arkadaki bahçede bistro var.",
    wiki: "Accademia Carrara"
  },
  {
    id: "corsarola", name: "Via Gombito ve Via Colleoni", local: "La Corsarola", city: "bergamo",
    lat: 45.70410, lng: 9.66330, score: 4,
    cats: ["bergamo", "food", "free"],
    price: { eur: 0, txt: "Ücretsiz" }, hours: "Dükkânlar ≈10:00–19:30", dur: "30–45 dk",
    gq: "Via Gombito, Bergamo",
    short: "Città Alta'nın ana caddesi: pastaneler, şarküteriler, polenta ve kurabiye dükkânları.",
    history: "Yerel halkın 'Corsarola' dediği bu dar cadde, Roma döneminde şehri doğu-batı yönünde kesen ana yolun (decumanus) izini takip ediyor. Ortaçağda tüccar ve zanaatkâr dükkânlarıyla doluydu. Üzerindeki Gombito Kulesi (12. yy) şehrin ayakta kalan en eski kule evlerinden.",
    why: "Bergamo'nun yeme-içme vitrini. Yürürken tadım yapmak için ideal.",
    tips: "Pasticceria'larda 'polenta e osei' tatlısını (badem ezmesinden polenta, çikolatadan kuş) mutlaka görün. Akşamüstü kalabalık olur.",
    wiki: "Città Alta"
  },
  {
    id: "marianna", name: "La Marianna", local: "Stracciatella'nın doğduğu dondurmacı", city: "bergamo",
    lat: 45.70500, lng: 9.65560, score: 4,
    cats: ["bergamo", "food"],
    price: { eur: null, txt: "Dondurma ≈3–5 €" }, hours: "Genelde 08:00–24:00 (teyit)", dur: "15 dk",
    gq: "La Marianna, Largo Colle Aperto, Bergamo",
    short: "Dünyaca ünlü stracciatella dondurması 1961'de burada icat edildi.",
    history: "Enrico Panattoni 1961'de, yumurtalı bir çorbadan (stracciatella) esinlenip süt bazlı dondurmanın üzerine erimiş çikolata dökerek ince çikolata parçacıkları elde etti. Tarif İtalya'dan bütün dünyaya yayıldı. Dükkân hâlâ aile işletmesi.",
    why: "Bir dondurmanın doğum yerinde onu yemek: küçük ama tatlı bir tarih anı.",
    tips: "Kasım'da bile kuyruk olabilir. San Vigilio füniküleri hemen yanında.",
    wiki: null
  },
  {
    id: "baretto", name: "Il Baretto di San Vigilio", local: "Manzaralı bar-restoran", city: "bergamo",
    lat: 45.70690, lng: 9.65220, score: 3,
    cats: ["bergamo", "night", "food", "view"],
    price: { eur: null, txt: "Aperitivo ≈12–18 €" }, hours: "Öğle ve akşam (teyit, rezervasyon önerilir)", dur: "1 sa",
    gq: "Il Baretto di San Vigilio, Bergamo",
    short: "San Vigilio füniküleri üst istasyonunun yanında, şehre bakan şık aperitivo ve yemek mekânı.",
    history: "Füniküler istasyonunun hemen yanındaki küçük bar, onlarca yıldır Bergamoluların özel akşam mekânı. Kış bahçesinden Città Alta ve ova görünüyor.",
    why: "Gün batımı ya da akşam ışıklarında bir kadeh için Bergamo'nun en romantik noktalarından.",
    tips: "Cumartesi akşamı için rezervasyon yapın. Pahalı tarafta; sadece aperitivo da olur.",
    wiki: null
  },
  {
    id: "mimmo", name: "Ristorante Da Mimmo", local: "Via Colleoni 17", city: "bergamo",
    lat: 45.70430, lng: 9.66060, score: 3,
    cats: ["bergamo", "food"],
    price: { eur: null, txt: "Ana yemek ≈15–25 €" }, hours: "Öğle ve akşam (Salı kapalı olabilir, teyit)", dur: "1,5 sa",
    gq: "Ristorante Da Mimmo, Via Bartolomeo Colleoni, Bergamo",
    short: "1956'dan beri Corsarola'da aile restoranı: casoncelli, polenta ve odun fırınında pizza.",
    history: "Città Alta'nın en eski aile restoranlarından. Bergamo mutfağının klasik yemeklerini ve pizzayı bir arada sunuyor.",
    why: "Casoncelli alla bergamasca (tereyağı, adaçayı ve pancettalı dolma makarna) için güvenli bir adres.",
    tips: "Cumartesi akşamı için önceden yer ayırtın. Alternatif: Via Gombito'daki Trattoria Da Ornella (polenta taragna).",
    wiki: null
  },
  {
    id: "sentierone", name: "Sentierone ve Aşağı Şehir", local: "Città Bassa", city: "bergamo",
    lat: 45.69580, lng: 9.66960, score: 2,
    cats: ["bergamo", "night", "free"],
    price: { eur: 0, txt: "Ücretsiz" }, hours: "7/24", dur: "45 dk",
    gq: "Sentierone, Bergamo",
    short: "Aşağı Şehir'in ağaçlı gezi yolu: Teatro Donizetti, kafeler, Via XX Settembre alışveriş caddesi.",
    history: "Sentierone 17. yüzyılda Sant'Alessandro fuarının yapıldığı alanın kenarında gezi yolu olarak düzenlendi. 1920'lerde Marcello Piacentini'nin tasarımıyla bugünkü meydan ve binalar yapıldı. Teatro Donizetti (1791) Bergamolu besteci adına 1897'de yeniden adlandırıldı.",
    why: "Yukarı Şehir'in ortaçağ havasına karşılık 20. yüzyıl Bergamo'su. Pazar akşamı AVM dönüşü aperitivo için uygun.",
    tips: "Kasım sonu Noel ışıkları ve buz pisti kurulmuş olabilir (teyit).",
    wiki: "Teatro Donizetti"
  },

  // ───────────── AVM & OUTLET ─────────────
  {
    id: "orio", name: "Oriocenter", local: "Orio al Serio · Bergamo", city: "avm",
    lat: 45.66880, lng: 9.70180, score: 5,
    cats: ["avm", "top"],
    price: { eur: 0, txt: "Ücretsiz giriş" }, hours: "Her gün 09:00–22:00 (Pazar dahil)", dur: "4–6 sa",
    gq: "Oriocenter, Orio al Serio",
    short: "İtalya'nın en büyük AVM'lerinden: 280'den fazla mağaza, Iper hipermarket, sinema, yemek katı.",
    history: "1998'de Bergamo havalimanının tam karşısında açıldı, 2017'deki büyütmeyle İtalya'nın en büyük alışveriş merkezlerinden biri oldu. Zara, H&M gibi zincirlerden Apple, Sephora, Rinascente tarzı premium markalara kadar geniş bir yelpaze var. Kasım sonunda 'Black Days' indirimleri yapılıyor.",
    why: "Pazar günü açık, kapalı ve büyük: hava ne olursa olsun bütün gün geçirilebilir. Bergamo'ya en yakın seçenek.",
    tips: "Ücretsiz açık ve kapalı otopark var. Black Friday 27 Kasım; ondan önceki hafta da birçok mağazada indirim başlamış oluyor. Vergi iadesi (tax free) için pasaportunuzu yanınızda taşıyın.",
    wiki: "Oriocenter"
  },
  {
    id: "serravalle", name: "Serravalle Designer Outlet", local: "Serravalle Scrivia (Piemonte)", city: "avm",
    lat: 44.72740, lng: 8.85840, score: 4,
    cats: ["avm"],
    price: { eur: 0, txt: "Ücretsiz giriş" }, hours: "Her gün ≈10:00–20:00", dur: "Yarım gün+",
    gq: "Serravalle Designer Outlet",
    short: "Avrupa'nın en büyük outlet köylerinden: 230'dan fazla marka. 20–30 Kasım 2026 Black Friday ek indirimi.",
    history: "McArthurGlen grubu 2000'de açtı. Lüks markalardan (Prada, Gucci, Burberry vb.) spor markalarına kadar sezonu geçmiş ürünler %30–70 indirimli satılıyor. 2026'da Black Friday promosyonu 20 Kasım Cuma'dan 30 Kasım Pazartesi'ye kadar outlet fiyatlarına ek indirimle sürüyor.",
    why: "Marka alışverişi asıl hedefse ve Black Friday ek indirimini yakalamak istiyorsanız en güçlü seçenek.",
    tips: "Bergamo'dan uzak (Milano'nun ≈1 sa güneyinde), bütün günü ayırın. Erken gidin, öğleden sonra kalabalıklaşıyor. Tax free bürosu var.",
    wiki: null
  },
  {
    id: "franciacorta", name: "Franciacorta Designer Village", local: "Rodengo Saiano · Brescia", city: "avm",
    lat: 45.59680, lng: 10.10700, score: 4,
    cats: ["avm"],
    price: { eur: 0, txt: "Ücretsiz giriş" }, hours: "Her gün ≈10:00–20:00 (teyit)", dur: "3–5 sa",
    gq: "Franciacorta Designer Village",
    short: "Bergamo'ya ≈40 dk outlet köyü: 190'dan fazla marka, Kasım'da 'Black Weeks' indirimleri.",
    history: "Lombardiya'nın köpüklü şarap bölgesi Franciacorta'nın kenarında, köy meydanı gibi tasarlanmış açık hava outlet'i. Yıl boyu %30–70 indirim; Kasım'da Black Weeks kampanyası var.",
    why: "Serravalle'den daha yakın ve sakin. Çıkışta Iseo Gölü'nde gün batımı ile birleştirilebiliyor.",
    tips: "Açık hava olduğu için yağmurda daha az keyifli. Yakındaki şarap evlerinde (cantina) Franciacorta tadımı yapılabilir; pazar günü açık olanları önceden kontrol edin.",
    wiki: "Franciacorta"
  },
  {
    id: "iseo", name: "Iseo Gölü kıyısı", local: "Iseo · Lungolago", city: "avm",
    lat: 45.65880, lng: 10.05050, score: 3,
    cats: ["avm", "view", "free"],
    price: { eur: 0, txt: "Ücretsiz" }, hours: "7/24", dur: "45 dk",
    gq: "Lungolago Marconi, Iseo",
    short: "Franciacorta outlet'ine 15 dk. Sakin göl kıyısı, ortasında Avrupa'nın en büyük göl adası Monte Isola.",
    history: "Iseo, Como'ya göre çok daha az turistik bir göl. Ortasındaki Monte Isola, Avrupa'daki göl adalarının en büyüğü. 2016'da sanatçı Christo burada suyun üzerinde yürünen turuncu 'Floating Piers' iskelelerini kurmuştu.",
    why: "AVM gününü bir gün batımıyla kapatmak için.",
    tips: "Gün batımı ≈16:45. Kıyıdaki kafelerde bir sıcak çikolata ya da aperitivo.",
    wiki: "Lake Iseo"
  },
  {
    id: "arese", name: "Il Centro Arese", local: "Arese · Milano kuzeybatı", city: "avm",
    lat: 45.56150, lng: 9.05480, score: 3,
    cats: ["avm"],
    price: { eur: 0, txt: "Ücretsiz giriş" }, hours: "Her gün ≈09:00–22:00 (teyit)", dur: "3–5 sa",
    gq: "Il Centro, Arese",
    short: "İtalya'nın en büyük AVM'lerinden, eski Alfa Romeo fabrikasının arazisinde. Yanında Alfa Romeo Müzesi.",
    history: "2016'da, Alfa Romeo'nun 1960'lardan beri çalışan Arese fabrikasının boşalan arazisinde açıldı. 200'ü aşkın mağaza, büyük yemek alanı ve cam çatılı galerileri var.",
    why: "Milano tarafında kalıyorsanız Oriocenter'a alternatif. Araba meraklısıysanız müze ile birleştirilir.",
    tips: "Pazar günü kalabalık; öğleden önce gidin.",
    wiki: "Il Centro"
  },
  {
    id: "alfa", name: "Alfa Romeo Müzesi", local: "Museo Storico Alfa Romeo · Arese", city: "avm",
    lat: 45.55930, lng: 9.04600, score: 3,
    cats: ["avm", "museum"],
    price: { eur: 12, txt: "≈12 €", note: "teyit" }, hours: "Genelde 10:00–18:00, Salı kapalı (teyit)", dur: "1,5 sa",
    gq: "Museo Storico Alfa Romeo, Arese",
    short: "1910'dan bugüne Alfa Romeo: yarış arabaları, efsane modeller ve tasarım.",
    history: "Alfa Romeo 1910'da Milano'da A.L.F.A. adıyla kuruldu. Arese'deki tarihi müze 1976'da açıldı, 2015'te yenilenerek 'La macchina del tempo' (Zaman makinesi) adıyla yeniden açıldı. İçinde markanın yarış tarihinden 1950'ler-60'ların sokak arabalarına kadar 200'e yakın araç var.",
    why: "Lombardiya'nın sanayi ve tasarım tarihine eğlenceli bir bakış.",
    tips: "Il Centro'nun 5 dakika yanında. Pazar açık.",
    wiki: "Museo Storico Alfa Romeo"
  },
  {
    id: "citylife", name: "CityLife Shopping District", local: "Milano · Tre Torri", city: "avm",
    lat: 45.47780, lng: 9.15610, score: 2,
    cats: ["avm", "milano"],
    price: { eur: 0, txt: "Ücretsiz giriş" }, hours: "Her gün ≈10:00–21:00 (teyit)", dur: "2 sa",
    gq: "CityLife Shopping District, Milano",
    short: "Zaha Hadid, Arata Isozaki ve Daniel Libeskind'in gökdelenlerinin dibinde şehir içi AVM.",
    history: "Eski Milano fuar alanında yapılan CityLife projesinin alışveriş bölümü 2017'de açıldı. Üç kulenin halk arasındaki adları: Isozaki'nin 'Il Dritto' (düz), Hadid'in 'Lo Storto' (eğri) ve Libeskind'in 'Il Curvo' (kavisli).",
    why: "Modern Milano mimarisi ile alışverişi birleştiriyor.",
    tips: "Kulelerin arasındaki park akşam ışıklarında güzel.",
    wiki: "CityLife, Milan"
  },
  {
    id: "foxtown", name: "FoxTown Factory Stores", local: "Mendrisio · İsviçre", city: "lugano",
    lat: 45.85780, lng: 8.99450, score: 3,
    cats: ["lugano", "avm"],
    price: { eur: 0, txt: "Ücretsiz giriş" }, hours: "Her gün ≈11:00–19:00 (teyit)", dur: "2–4 sa",
    gq: "FoxTown Factory Stores, Mendrisio",
    short: "Lugano'ya 20 dk, İtalya sınırının hemen üstünde 160 mağazalı kapalı outlet.",
    history: "1995'te açıldı. İsviçre'de olduğu için fiyatlar CHF; birçok mağaza euro da kabul ediyor. Kapalı ve çok katlı olması yağmurda avantaj.",
    why: "Lugano gününe alışveriş eklemek isterseniz yol üstünde.",
    tips: "İsviçre'den AB'ye dönerken belli tutarın üstündeki alışverişler gümrükte beyan gerektirebilir; faturaları saklayın.",
    wiki: "FoxTown"
  },

  // ───────────── MİLANO ─────────────
  {
    id: "duomo", name: "Milano Katedrali (Duomo) ve Terasları", local: "Duomo di Milano · Terrazze", city: "milano",
    lat: 45.46420, lng: 9.19160, score: 5,
    cats: ["milano", "top", "view"],
    price: { eur: 20, txt: "Katedral ≈11 € · teraslar dahil ≈20 € (merdiven) / ≈27 € (asansör)", note: "teyit" }, hours: "Her gün ≈09:00–19:00 (son giriş ≈18:10). Müze Çarşamba kapalı", dur: "1,5–2 sa",
    gq: "Duomo di Milano",
    short: "Dünyanın en büyük gotik katedrallerinden. Çatısında 135 sivri kulenin arasında yürüyorsunuz.",
    history: "Yapımına 1386'da Milano hükümdarı Gian Galeazzo Visconti'nin isteğiyle başlandı ve neredeyse 600 yıl sürdü. Cephe ancak 1805'te, burada İtalya Kralı olarak taç giyecek Napolyon'un emriyle tamamlandı; son kapılar 1965'te takıldı. Bütün yapı Maggiore Gölü yakınındaki Candoglia ocaklarından gelen pembe-beyaz mermerden. En yüksek kulenin tepesindeki altın kaplı Madonnina heykeli 1774'ten beri şehrin sembolü; bir dönem Milano'da hiçbir bina ondan yüksek yapılamazdı.",
    why: "Çatı teraslarında, heykellerin ve uçan payandaların arasında yürümek dünyada pek az katedralde yapılabiliyor. Açık havada Alpler görünüyor.",
    tips: "Biletleri resmi siteden (duomomilano.it) önceden saatli alın. Omuz ve diz kapalı olmalı. Pazartesi açık olan birkaç büyük noktadan biri, sabah ilk saatlere koyun.",
    wiki: "Milan Cathedral"
  },
  {
    id: "galleria", name: "Galleria Vittorio Emanuele II", local: "Piazza del Duomo", city: "milano",
    lat: 45.46590, lng: 9.19000, score: 5,
    cats: ["milano", "top", "free"],
    price: { eur: 0, txt: "Ücretsiz" }, hours: "7/24 (mağazalar ≈10:00–20:00)", dur: "20–30 dk",
    gq: "Galleria Vittorio Emanuele II, Milano",
    short: "Cam kubbeli 19. yüzyıl alışveriş pasajı: Prada'nın ilk mağazası, tarihi kafeler ve mozaik zemin.",
    history: "Mimar Giuseppe Mengoni'nin tasarımıyla 1865–1877 arasında yapıldı ve İtalya'nın birleşmesinin kralı Vittorio Emanuele II'nin adını aldı. Mengoni, açılıştan bir gün önce iskeleden düşerek öldü. Dünyanın en eski alışveriş pasajlarından biri. Prada 1913'te ilk mağazasını burada açtı.",
    why: "Milano'nun 'oturma odası' denir. Duomo ile La Scala'yı birbirine bağlayan yol.",
    tips: "Ortadaki sekizgen meydanda zemindeki boğa mozaiğinin üzerinde topuk üstünde dönmek uğur sayılıyor. Kafeler çok pahalı; sadece gezip geçin.",
    wiki: "Galleria Vittorio Emanuele II"
  },
  {
    id: "scala", name: "La Scala Opera Binası ve Müzesi", local: "Museo Teatrale alla Scala", city: "milano",
    lat: 45.46740, lng: 9.18950, score: 4,
    cats: ["milano", "museum"],
    price: { eur: 12, txt: "12 € (tarihli bilet)", note: "açık tarihli 15 €" }, hours: "Her gün 09:30–17:30 (son giriş 17:00)", dur: "1 sa",
    gq: "Museo Teatrale alla Scala, Milano",
    short: "Dünyanın en ünlü opera binası. Müze biletiyle bir locadan salona bakabiliyorsunuz.",
    history: "Eski saray tiyatrosu 1776'da yanınca Avusturya imparatoriçesi Maria Theresa'nın onayıyla mimar Giuseppe Piermarini yeni binayı yaptı; 1778'de açıldı. Verdi'nin, Puccini'nin pek çok operası ilk kez burada sahnelendi. 1943'te bombalarla ağır hasar gördü, 1946'da Toscanini'nin yönettiği konserle yeniden açıldı. Müze 1913'ten beri binanın yanındaki Casino Ricordi'de.",
    why: "Prova ya da gösteri yoksa müze turu bir locadan altın ve kırmızı salona bakmayı içeriyor.",
    tips: "Salon görüşü prova programına bağlı; girişte sorun. Sezon 7 Aralık'ta açılıyor, Kasım'da bale ya da konser biletine bakın.",
    wiki: "La Scala"
  },
  {
    id: "quadrilatero", name: "Moda Dörtgeni (Via Montenapoleone)", local: "Quadrilatero della Moda", city: "milano",
    lat: 45.46860, lng: 9.19600, score: 4,
    cats: ["milano", "avm", "free"],
    price: { eur: 0, txt: "Ücretsiz (vitrin gezmek)" }, hours: "Mağazalar ≈10:00–19:30", dur: "1 sa",
    gq: "Via Monte Napoleone, Milano",
    short: "Montenapoleone, Della Spiga, Manzoni ve Sant'Andrea sokakları: dünyanın en pahalı alışveriş adreslerinden.",
    history: "Bu sokaklar 18.–19. yüzyılda soyluların konaklarıyla doluydu. 1970'lerden itibaren Armani, Versace, Prada gibi Milanolu tasarımcılar mağazalarını burada açınca bölge 'Quadrilatero d'oro' (Altın Dörtgen) adını aldı. Via Montenapoleone kira bedeliyle dünyanın en pahalı caddeleri listesinde ilk sıralarda.",
    why: "Milano'nun moda başkenti kimliğini en iyi burada hissediyorsunuz; vitrinler bile görmeye değer.",
    tips: "Pazartesi sabahı bazı butikler geç açar (≈11:00–15:00). Yan sokaklardaki avlulara göz atın.",
    wiki: "Via Montenapoleone"
  },
  {
    id: "brera", name: "Brera Mahallesi", local: "Via Brera · Via Fiori Chiari", city: "milano",
    lat: 45.47200, lng: 9.18680, score: 4,
    cats: ["milano", "free", "night"],
    price: { eur: 0, txt: "Ücretsiz" }, hours: "7/24", dur: "45 dk",
    gq: "Via Fiori Chiari, Milano",
    short: "Arnavut kaldırımlı sokaklar, sanat galerileri, antikacılar ve aperitivo barları. Milano'nun Montmartre'ı.",
    history: "Brera, 18. yüzyılda Avusturyalıların burada Güzel Sanatlar Akademisi'ni kurmasıyla sanatçı mahallesine dönüştü. 20. yüzyılda ressamlar, yazarlar ve gazeteciler buradaki kafelerde toplanırdı. Akademinin içindeki Pinacoteca di Brera, Napolyon döneminde 1809'da açıldı.",
    why: "Milano'nun en romantik yürüyüş bölgesi.",
    tips: "Pinacoteca di Brera Pazartesi kapalı ama akademinin avlusuna (Napolyon heykeli) girilebiliyor. Akşamüstü aperitivo için Via Fiori Chiari ve Via Madonnina.",
    wiki: "Brera (district of Milan)"
  },
  {
    id: "pinacoteca", name: "Pinacoteca di Brera", local: "Via Brera 28", city: "milano",
    lat: 45.47190, lng: 9.18790, score: 4,
    cats: ["milano", "museum"],
    price: { eur: 15, txt: "15 €" }, hours: "Sa–Pz 08:30–19:15 (son giriş 18:00), Pazartesi kapalı", dur: "1,5–2 sa",
    status: "Pazartesi kapalı: Milano günü (23 Kasım) gidilemiyor. Sadece Pazar günü Milano'ya gelirseniz.",
    gq: "Pinacoteca di Brera, Milano",
    short: "Mantegna'nın Ölü İsa'sı, Raffaello'nun Meryem'in Evliliği, Hayez'in Öpücük'ü.",
    history: "Napolyon döneminde, kapatılan kilise ve manastırlardan toplanan resimlerle 1809'da açıldı. Bu yüzden koleksiyon özellikle kuzey İtalya dini resminde çok güçlü.",
    why: "İtalyan resim sanatının en önemli koleksiyonlarından biri.",
    tips: "Rezervasyon gerekli (brerabooking.org). Ayın ilk pazarı ücretsiz.",
    wiki: "Pinacoteca di Brera"
  },
  {
    id: "sforzesco", name: "Castello Sforzesco", local: "Sforza Kalesi", city: "milano",
    lat: 45.47050, lng: 9.17950, score: 5,
    cats: ["milano", "top", "free"],
    price: { eur: 0, txt: "Avlular ücretsiz · müzeler 5 € (Pzt kapalı)" }, hours: "Avlular her gün ≈07:00–19:30; müzeler Sa–Pz 10:00–17:30", dur: "45 dk",
    gq: "Castello Sforzesco, Milano",
    short: "Milano dükalarının kalesi. Leonardo burada çalıştı, Michelangelo'nun son heykeli burada.",
    history: "Kale 14. yüzyılda Visconti ailesi için yapıldı; 1450'de Milano'yu ele geçiren Francesco Sforza onu bugünkü dev boyutuna getirdi. Oğlu Ludovico il Moro döneminde Leonardo da Vinci saray için çalıştı ve kalenin bir salonunu ağaç dallarıyla boyadı (Sala delle Asse). İspanyol ve Avusturya dönemlerinde kışla oldu. Ön cephedeki Filarete Kulesi 1521'de patlayan barutla yıkılmıştı, 1905'te yeniden yapıldı. İçindeki müzelerde Michelangelo'nun ölmeden önce üzerinde çalıştığı Rondanini Pietà'sı var.",
    why: "Rönesans Milano'sunun gücünü gösteren yapı. Avluları ücretsiz ve Pazartesi de açık.",
    tips: "Müzeler Pazartesi kapalı ama avlular ve surlar gezilebiliyor. Arkadan Parco Sempione'ye ve Arco della Pace'ye çıkın.",
    wiki: "Castello Sforzesco"
  },
  {
    id: "sempione", name: "Parco Sempione ve Barış Takı", local: "Arco della Pace", city: "milano",
    lat: 45.47570, lng: 9.17240, score: 3,
    cats: ["milano", "free", "view"],
    price: { eur: 0, txt: "Ücretsiz" }, hours: "Park gündüz", dur: "30 dk",
    gq: "Arco della Pace, Milano",
    short: "Kalenin arkasındaki büyük park ve Napolyon için başlanıp Avusturya için bitirilen zafer takı.",
    history: "Park, Sforza'ların av alanı olan arazide 1890'larda İngiliz bahçesi olarak düzenlendi. Arco della Pace'nin yapımına 1807'de Napolyon'un zaferleri için başlandı; Napolyon düşünce Avusturyalılar 1838'de takı 'Barış' adıyla tamamladı. Tepesindeki atlı arabanın yönü Fransa'ya bakıyor.",
    why: "Kaleden sonra kısa, yeşil bir yürüyüş.",
    tips: "Park içindeki Torre Branca (108 m) kışın sadece belirli günler açık (teyit).",
    wiki: "Sempione Park"
  },
  {
    id: "grazie", name: "Santa Maria delle Grazie ve Son Akşam Yemeği", local: "Cenacolo Vinciano", city: "milano",
    lat: 45.46600, lng: 9.17090, score: 5,
    cats: ["milano", "top", "museum"],
    price: { eur: 15, txt: "Cenacolo 15 € + rezervasyon ücreti · kilise ücretsiz" }, hours: "Cenacolo Sa–Pz 08:15–19:00, Pazartesi kapalı. Sadece rezervasyonla, 15 dk'lık gruplar", dur: "Cenacolo 15 dk · kilise 15 dk",
    status: "Son Akşam Yemeği (Cenacolo) Pazartesi kapalı. Milano günü görülemiyor; Pazar günü bilet bulursanız gidin. Kilisenin kendisi Pazartesi açık.",
    gq: "Santa Maria delle Grazie, Milano",
    short: "Leonardo'nun Son Akşam Yemeği freski bu manastırın yemekhanesinde. Bilet aylar öncesinden tükeniyor.",
    history: "Dominiken kilisesi 1463–1497 arasında yapıldı; Ludovico il Moro kendine mezar yeri olsun diye Bramante'ye kubbeli doğu bölümünü yaptırdı. Leonardo da Vinci, 1495–1498 arasında manastırın yemekhanesinin duvarına Son Akşam Yemeği'ni yaptı. Klasik fresk tekniği yerine kuru duvara tempera kullandığı için resim daha Leonardo hayattayken bozulmaya başladı. 1943'te bir bomba yemekhaneyi yıktı, freskli duvar kum torbalarıyla korunduğu için ayakta kaldı. 1999'da biten 20 yıllık restorasyonla bugünkü hâline geldi. 1980'den beri UNESCO Dünya Mirası.",
    why: "Batı sanatının en çok tanınan eserlerinden biri.",
    tips: "Biletler üç ayda bir toplu satışa çıkıyor ve hemen tükeniyor; son dakika iptaller için resmi siteyi (cenacolovinciano.org) kontrol edin, alternatif olarak rehberli tur biletleri daha pahalı ama bulunabiliyor. Pazartesi günü sadece kilisenin içine ve Bramante kubbesine bakabilirsiniz.",
    wiki: "Santa Maria delle Grazie, Milan"
  },
  {
    id: "vigna", name: "Leonardo'nun Bağı", local: "Vigna di Leonardo · Casa degli Atellani", city: "milano",
    lat: 45.46640, lng: 9.17160, score: 3,
    cats: ["milano", "museum"],
    price: { eur: 12, txt: "≈12 €", note: "teyit" }, hours: "Her gün ≈09:00–18:00 (teyit)", dur: "45 dk",
    gq: "Vigna di Leonardo, Corso Magenta, Milano",
    short: "Ludovico il Moro'nun Leonardo'ya hediye ettiği bağ, Son Akşam Yemeği'nin tam karşısında. Pazartesi açık.",
    history: "1498'de Milano dükü Ludovico il Moro, Son Akşam Yemeği'ni yaparken Leonardo'ya teşekkür olarak bu bağı verdi. Leonardo bağı hayatı boyunca sakladı ve vasiyetinde andı. Bağ 20. yüzyılda yok oldu; 2015'te genetik araştırmayla eski üzüm türü (Malvasia di Candia aromatica) bulunup yeniden dikildi. Ön taraftaki Casa degli Atellani, Rönesans'tan kalma bir saray yavrusu.",
    why: "Pazartesi günü Cenacolo kapalıyken Leonardo'yu Milano'da hissetmenin bir yolu.",
    tips: "Sesli rehber dahil. Santa Maria delle Grazie'nin karşısında, ikisini birlikte gezin.",
    wiki: "Vigna di Leonardo"
  },
  {
    id: "ambrogio", name: "Sant'Ambrogio Bazilikası", local: "Basilica di Sant'Ambrogio", city: "milano",
    lat: 45.46230, lng: 9.17570, score: 4,
    cats: ["milano", "free"],
    price: { eur: 0, txt: "Ücretsiz" }, hours: "Genelde 10:00–12:00 / 14:30–18:00 (teyit)", dur: "20–30 dk",
    gq: "Basilica di Sant'Ambrogio, Milano",
    short: "4. yüzyılda kurulan, Milano'nun en eski ve en saygın kilisesi. Romanesk mimarinin örneği.",
    history: "Milano piskoposu Ambrosius 379–386 arasında bu kiliseyi kurdu; şehrin koruyucu azizi olan Ambrosius'un kalıntıları hâlâ kriptada. Bugünkü kırmızı tuğlalı yapı 11.–12. yüzyıldan; avlusu (atrium) ve iki farklı çan kulesiyle Lombard Romanesk mimarisinin modeli kabul ediliyor. İçindeki altın sunak 9. yüzyıldan kalma.",
    why: "Roma'dan Ortaçağ'a geçen Milano'nun en dokunaklı yapısı. Turist kalabalığı yok.",
    tips: "Avlunun sağındaki sütunda 'şeytanın boynuz izleri' denen iki delik var; efsaneye göre şeytan azizi kandıramayınca boynuzlarını buraya saplamış.",
    wiki: "Basilica of Sant'Ambrogio"
  },
  {
    id: "navigli", name: "Navigli Kanalları", local: "Naviglio Grande · Darsena", city: "milano",
    lat: 45.45200, lng: 9.17350, score: 5,
    cats: ["milano", "top", "night", "free", "view"],
    price: { eur: 0, txt: "Ücretsiz" }, hours: "7/24 · barlar akşam", dur: "1–2 sa",
    gq: "Naviglio Grande, Milano",
    short: "Kanal kıyısı barlar ve restoranlar. Milano'nun aperitivo kültürünün kalbi.",
    history: "Milano'nun kanal ağı 12. yüzyılda başladı. Duomo'nun mermeri Maggiore Gölü'nden bu kanallarla şehre taşındı. Leonardo da Vinci de kanal kapaklarını (conca) geliştirmek için çalıştı. 1930'larda kanalların çoğu üstü kapatılıp yola çevrildi; bugün sadece Naviglio Grande ve Naviglio Pavese açık. Kanalların birleştiği Darsena limanı 2015 Expo'su için yenilendi.",
    why: "Akşam ışıkları kanala yansırken bir Aperol Spritz ya da Negroni: Milano'nun en keyifli saati.",
    tips: "18:00–21:00 arası aperitivo saati; birçok bar içkiyle birlikte büfe ya da atıştırmalık veriyor. Kanal boyunca Vicolo dei Lavandai (eski çamaşırhane) fotoğraf için güzel.",
    wiki: "Navigli"
  },
  {
    id: "portanuova", name: "Porta Nuova ve Bosco Verticale", local: "Piazza Gae Aulenti", city: "milano",
    lat: 45.48450, lng: 9.19000, score: 3,
    cats: ["milano", "free", "view"],
    price: { eur: 0, txt: "Ücretsiz" }, hours: "7/24", dur: "30–45 dk",
    gq: "Bosco Verticale, Milano",
    short: "Yeni Milano: ağaçlarla kaplı 'dikey orman' kuleleri ve İtalya'nın en yüksek gökdelenlerinden UniCredit Kulesi.",
    history: "Porta Nuova, 2000'lerde boş demiryolu arazilerinde yapılan büyük kentsel dönüşüm projesi. Mimar Stefano Boeri'nin 2014'te bitirdiği Bosco Verticale (Dikey Orman) kulelerinin balkonlarında yüzlerce ağaç ve binlerce bitki var. César Pelli'nin tasarladığı UniCredit Kulesi'nin sivri ucu 231 metre.",
    why: "Gotik Duomo ile aynı gün 21. yüzyıl Milano'sunu görmek için.",
    tips: "Akşam ışıklarında Piazza Gae Aulenti'nin su havuzları güzel. Yakındaki Corso Como alışveriş sokağıyla birleştirin.",
    wiki: "Bosco Verticale"
  },
  {
    id: "corsocomo", name: "Corso Como ve 10 Corso Como", local: "Garibaldi", city: "milano",
    lat: 45.48230, lng: 9.18750, score: 2,
    cats: ["milano", "avm", "night"],
    price: { eur: 0, txt: "Ücretsiz" }, hours: "Mağaza ≈10:30–19:30", dur: "45 dk",
    gq: "10 Corso Como, Milano",
    short: "Yaya caddesi ve dünyanın ilk 'konsept mağazalarından' 10 Corso Como.",
    history: "Galerici ve editör Carla Sozzani 1990'da bir avlu içinde galeri, kitapçı, moda mağazası ve kafeyi birleştiren 10 Corso Como'yu açtı. Konsept, dünyadaki pek çok mağazaya model oldu.",
    why: "Moda meraklıları için Montenapoleone'den daha samimi bir alternatif.",
    tips: "Porta Nuova'ya 5 dakika yürüme.",
    wiki: null
  },
  {
    id: "prada", name: "Fondazione Prada", local: "Largo Isarco 2", city: "milano",
    lat: 45.44460, lng: 9.20490, score: 4,
    cats: ["milano", "museum"],
    price: { eur: 15, txt: "15 €" }, hours: "Pzt ve Ça–Pz 10:00–19:00, Salı kapalı", dur: "1,5–2 sa",
    gq: "Fondazione Prada, Milano",
    short: "Rem Koolhaas'ın eski bir cin fabrikasını dönüştürdüğü çağdaş sanat merkezi. Pazartesi açık.",
    history: "Miuccia Prada ve Patrizio Bertelli'nin vakfı 2015'te, 1910'dan kalma bir içki fabrikasını OMA/Rem Koolhaas'a dönüştürterek bu kampüsü açtı. 24 ayar altın varakla kaplanmış 'Haunted House' binası ve 2018'de eklenen beyaz beton Torre en dikkat çekici yapılar. Kafesi Bar Luce'yi yönetmen Wes Anderson 1950'lerin Milano kafeleri gibi tasarladı.",
    why: "Pazartesi kapalı müzelerin yerine geçebilecek en güçlü seçenek; mimarisi bile tek başına görmeye değer.",
    tips: "Bar Luce'ye biletsiz girilebiliyor; pastel renkleri ve langırt makineleriyle fotoğraf için ideal.",
    wiki: "Fondazione Prada"
  },
  {
    id: "poldi", name: "Poldi Pezzoli Müzesi", local: "Museo Poldi Pezzoli", city: "milano",
    lat: 45.46850, lng: 9.19250, score: 3,
    cats: ["milano", "museum"],
    price: { eur: 14, txt: "≈14 €", note: "teyit" }, hours: "Ça–Pzt 10:00–18:00, Salı kapalı (teyit)", dur: "1 sa",
    gq: "Museo Poldi Pezzoli, Milano",
    short: "Bir koleksiyoncunun 19. yüzyıl konağında ev-müze. Pollaiuolo'nun ünlü kadın portresi burada.",
    history: "Soylu Gian Giacomo Poldi Pezzoli, konağını ve sanat koleksiyonunu 1879'da öldüğünde müze olsun diye bıraktı; 1881'de açıldı. 1943'te bombalarla hasar gördü, savaştan sonra yeniden kuruldu. Piero del Pollaiuolo'nun yandan çizilmiş genç kadın portresi müzenin sembolü.",
    why: "Pazartesi açık, küçük ve zarif bir müze. Moda Dörtgeni'nin hemen yanında.",
    tips: "Silah ve zırh salonu ile saat koleksiyonu da ilginç.",
    wiki: "Museo Poldi Pezzoli"
  },
  {
    id: "rinascente", name: "Rinascente ve çatı katı", local: "Piazza del Duomo", city: "milano",
    lat: 45.46520, lng: 9.19120, score: 3,
    cats: ["milano", "avm", "food", "view"],
    price: { eur: 0, txt: "Ücretsiz giriş" }, hours: "Her gün ≈10:00–21:00 (teyit)", dur: "1 sa",
    gq: "Rinascente Milano Piazza Duomo",
    short: "İtalya'nın en ünlü büyük mağazası. En üst katın yemek bölümünden Duomo'nun kulelerine burun buruna bakıyorsunuz.",
    history: "Mağaza 1865'te açıldı; 1917'de şair Gabriele D'Annunzio 'Yeniden doğan' anlamına gelen Rinascente adını verdi. 1918'deki yangından sonra yeniden açıldığı için ad tam oturdu.",
    why: "Duomo teraslarını karşıdan görmenin bedava yolu, hem de bir kahve eşliğinde.",
    tips: "7. kattaki kafe ve barlar. Tax free hizmeti var.",
    wiki: "La Rinascente"
  },
  {
    id: "luini", name: "Luini Panzerotti", local: "Via Santa Radegonda 16", city: "milano",
    lat: 45.46560, lng: 9.19060, score: 3,
    cats: ["milano", "food"],
    price: { eur: null, txt: "≈3–5 € / adet" }, hours: "Pzt 10:00–15:00, Sa–Ct 10:00–20:00, Pz kapalı (teyit)", dur: "15 dk",
    gq: "Luini Panzerotti, Milano",
    short: "1949'dan beri Duomo'nun arkasında kızarmış mini calzone (panzerotto) satan efsane dükkân.",
    history: "Puglia'dan Milano'ya gelen Giuseppina Luini, 1949'da memleketinin sokak yemeği panzerottiyi burada satmaya başladı. Bugün hâlâ ailenin işlettiği dükkânın önünde gün boyu kuyruk var.",
    why: "Hızlı, ucuz ve lezzetli öğle yemeği. Domates-mozzarellalı klasik olanı deneyin.",
    tips: "Pazartesi sadece 15:00'e kadar açık. Kuyruk hızlı ilerliyor.",
    wiki: null
  },
  {
    id: "trattoria", name: "Trattoria Milanese", local: "Via Santa Marta 11", city: "milano",
    lat: 45.46270, lng: 9.18340, score: 3,
    cats: ["milano", "food"],
    price: { eur: null, txt: "Ana yemek ≈20–30 €" }, hours: "Öğle ve akşam (kapalı gün teyit)", dur: "1,5 sa",
    gq: "Trattoria Milanese, Via Santa Marta, Milano",
    short: "Eski Milano sokaklarında geleneksel trattoria: safranlı risotto, cotoletta, ossobuco.",
    history: "1930'lardan beri aynı adreste hizmet veren, Milano mutfağının klasiklerini yapan küçük bir lokanta.",
    why: "Risotto alla milanese ve kemikli dana pirzola (cotoletta alla milanese) için doğru yer.",
    tips: "Rezervasyon yapın. Alternatif: Antica Trattoria della Pesa (1880'den beri).",
    wiki: null
  },
  {
    id: "basso", name: "Bar Basso", local: "Via Plinio 39", city: "milano",
    lat: 45.47780, lng: 9.22080, score: 3,
    cats: ["milano", "night"],
    price: { eur: null, txt: "Kokteyl ≈10–14 €" }, hours: "Akşam geç saate kadar, Salı kapalı (teyit)", dur: "1 sa",
    gq: "Bar Basso, Via Plinio, Milano",
    short: "Negroni Sbagliato'nun doğduğu bar. Kokteyller dev kadehlerde geliyor.",
    history: "Barmen Mirko Stocchetto 1960'ların sonunda bir Negroni hazırlarken cin yerine yanlışlıkla köpüklü şarap koydu; ortaya çıkan içkiye 'Negroni Sbagliato' (yanlış Negroni) dendi. Bar, tasarım haftalarında mimarların ve tasarımcıların buluşma yeri.",
    why: "Milano'nun en ünlü kokteylini doğduğu yerde içmek.",
    tips: "Dev 'bicchierone' kadehi sipariş edin. Merkeze biraz uzak, akşam yemeğinden sonra gidin.",
    wiki: "Bar Basso"
  },

  // ───────────── COMO GÖLÜ ─────────────
  {
    id: "duomoco", name: "Como Katedrali ve Broletto", local: "Duomo di Como", city: "como",
    lat: 45.81180, lng: 9.08390, score: 4,
    cats: ["como", "top", "free"],
    price: { eur: 0, txt: "Ücretsiz" }, hours: "Genelde 08:00–19:00 (teyit)", dur: "20–30 dk",
    gq: "Duomo di Como",
    short: "Gotikten Rönesans'a geçişi gösteren mermer katedral. Cephesinde Como'lu iki Plinius'un heykelleri.",
    history: "Katedralin yapımı 1396'da başladı ve 1770'te Filippo Juvarra'nın kubbesiyle bitti; bu yüzden alt kısımlar gotik, üst kısımlar Rönesans ve barok. Cephedeki heykellerden ikisi Como doğumlu Romalı yazarlar: doğa tarihçisi Yaşlı Plinius ve yeğeni Genç Plinius. Bir kilise cephesinde pagan yazarların bulunması çok nadir. Hemen yanındaki çizgili taşlı Broletto, 1215'te yapılmış eski belediye binası.",
    why: "Como şehir merkezinin en önemli yapısı.",
    tips: "İçerideki 16. yüzyıl duvar halılarına ve Luini'nin resimlerine bakın. Kasım sonunda meydana Noel ağacı kurulmaya başlanmış olabilir.",
    wiki: "Como Cathedral"
  },
  {
    id: "lungolago", name: "Göl kıyısı ve Life Electric", local: "Piazza Cavour · Diga Foranea", city: "como",
    lat: 45.81450, lng: 9.08180, score: 3,
    cats: ["como", "free", "view"],
    price: { eur: 0, txt: "Ücretsiz" }, hours: "7/24", dur: "30 dk",
    gq: "Life Electric, Como",
    short: "Piazza Cavour'dan dalgakıranın ucuna yürüyüş. Ucunda Daniel Libeskind'in Volta'ya adadığı çelik heykel.",
    history: "Como'lu fizikçi Alessandro Volta 1800'de ilk elektrik pilini icat etti. 2015'te mimar Daniel Libeskind, onun anısına dalgakıranın ucuna iki kavisli çelik formdan oluşan 'Life Electric' heykelini dikti. Kıyıdaki rasyonalist Savaş Anıtı (1933) da mimar Antonio Sant'Elia'nın çizimlerine dayanıyor.",
    why: "Gölü, şehri ve karşıdaki Brunate'yi birlikte gören en güzel kısa yürüyüş.",
    tips: "Life Electric'in arkasından göl ve dağlar fotoğraf için ideal. Rüzgârlı olabilir.",
    wiki: "Life Electric"
  },
  {
    id: "brunate", name: "Como–Brunate Füniküleri", local: "Funicolare Como–Brunate", city: "como",
    lat: 45.81360, lng: 9.08980, score: 5,
    cats: ["como", "top", "view"],
    price: { eur: 7.2, txt: "7,20 € gidiş-dönüş · 3,60 € tek yön" }, hours: "Her gün ≈06:00–22:30 (Ct 24:00'e kadar), ≈15–30 dk arayla", dur: "Yolculuk 7 dk · tepede 1 sa",
    gq: "Funicolare Como Brunate",
    short: "1894'ten beri Como'dan 'Alplerin balkonu' Brunate köyüne 7 dakikada tırmanan füniküler.",
    history: "Füniküler 1894'te açıldı; ilk yıllarında buharla çalışıyordu, 1911'de elektriğe geçti. Brunate, 19. yüzyılın sonunda Milanolu zenginlerin Liberty (art nouveau) üslubunda yazlık villalar yaptırdığı bir tatil köyüne dönüştü. Hattın ortasındaki 'öğle topu' her gün 12:00'de kurusıkı atış yapar.",
    why: "Como Gölü'nü, şehri ve havası açıksa Monte Rosa'yı kuşbakışı görmenin en kolay yolu.",
    tips: "Arabayı aşağıda bırakın. Tepeden 25 dakikalık yürüyüşle Faro Voltiano'ya çıkabilirsiniz. Saat 12:00'de tepede olursanız top atışını duyarsınız.",
    wiki: "Como–Brunate funicular"
  },
  {
    id: "faro", name: "Faro Voltiano (Brunate)", local: "San Maurizio · Brunate", city: "como",
    lat: 45.82060, lng: 9.10630, score: 3,
    cats: ["como", "view"],
    price: { eur: 2, txt: "≈2 €", note: "teyit" }, hours: "Kışın genelde hafta sonu ve tatiller (teyit)", dur: "45 dk",
    gq: "Faro Voltiano, Brunate",
    short: "Volta'nın ölümünün 100. yılında 1927'de dikilen deniz feneri biçimli anıt. 143 basamak, dev manzara.",
    history: "Fener 1927'de Alessandro Volta'nın ölümünün yüzüncü yılında onun anısına yapıldı. Geceleri İtalyan bayrağının renklerinde ışık yakıyor. Tepesinden Como Gölü'nün iki kolu, Lugano tarafı ve Alpler görünüyor.",
    why: "Brunate'deki en yüksek manzara noktası.",
    tips: "Salı günü kapalı olabilir; kapalıysa bile önündeki seki manzaralı. Brunate istasyonundan yokuş yukarı ≈25 dk.",
    wiki: "Brunate"
  },
  {
    id: "voltiano", name: "Tempio Voltiano", local: "Volta Müzesi", city: "como",
    lat: 45.81390, lng: 9.07790, score: 2,
    cats: ["como", "museum"],
    price: { eur: 5, txt: "≈5 €", note: "teyit" }, hours: "Sa–Pz ≈10:00–18:00, Pzt kapalı (teyit)", dur: "30 dk",
    gq: "Tempio Voltiano, Como",
    short: "Göl kıyısında neoklasik tapınak: Volta'nın ilk pilleri ve deney aletleri.",
    history: "Alessandro Volta (1745–1827) 1800'de ilk sürekli elektrik akımı veren pili (pila voltaica) yaptı. Gerilim birimi 'volt' onun adını taşıyor. Müze 1927'de ölümünün yüzüncü yılında açıldı.",
    why: "Bilim tarihine küçük bir uğrama; göl kıyısı yürüyüşünün üzerinde.",
    tips: "Yağmurlu günde iyi bir seçenek.",
    wiki: "Tempio Voltiano"
  },
  {
    id: "olmo", name: "Villa Olmo", local: "Via Cantoni 1", city: "como",
    lat: 45.82320, lng: 9.06610, score: 3,
    cats: ["como", "free", "view"],
    price: { eur: 0, txt: "Park ücretsiz · sergiler ücretli" }, hours: "Park gündüz; villa sergiye göre (teyit)", dur: "30–45 dk",
    gq: "Villa Olmo, Como",
    short: "Göl kıyısında neoklasik villa ve bahçesi. Şehir merkezinden kıyı boyunca 20 dk yürüyüş.",
    history: "Villa 1797'de mimar Simone Cantoni tarafından Odescalchi ailesi için yapıldı. Napolyon ve Garibaldi gibi konuklar ağırladı. 1924'ten beri Como Belediyesi'nin; bugün sergi ve etkinlik mekânı.",
    why: "Como Gölü villalarının çoğu Kasım'da kapalıyken bahçesi açık olan, şehre en yakın villa.",
    tips: "Kıyı yolu (Passeggiata Lino Gelpi) boyunca başka villaları da dışarıdan görürsünüz.",
    wiki: "Villa Olmo"
  },
  {
    id: "terragni", name: "Casa del Fascio (Terragni)", local: "Piazza del Popolo, Como", city: "como",
    lat: 45.81080, lng: 9.08680, score: 2,
    cats: ["como", "free"],
    price: { eur: 0, txt: "Dışarıdan ücretsiz" }, hours: "Sadece dışarıdan", dur: "10 dk",
    gq: "Casa del Fascio, Como",
    short: "İtalyan rasyonalist mimarisinin başyapıtı sayılan beyaz, geometrik bina.",
    history: "Mimar Giuseppe Terragni binayı 1932–1936 arasında faşist partinin yerel merkezi olarak yaptı. Siyasi geçmişinden bağımsız olarak, cam ve beton ızgarasıyla modern mimarinin önemli eserlerinden sayılıyor ve mimarlık okullarında okutuluyor. Bugün Guardia di Finanza (mali polis) binası.",
    why: "Como'nun ortaçağ ve villa kimliğinin yanında 20. yüzyıl modernizmini de görmek isteyenler için.",
    tips: "Katedralin arkasında, 3 dakika.",
    wiki: "Casa del Fascio (Como)"
  },
  {
    id: "cernobbio", name: "Cernobbio ve Villa d'Este", local: "Cernobbio", city: "como",
    lat: 45.84220, lng: 9.07390, score: 3,
    cats: ["como", "free", "view"],
    price: { eur: 0, txt: "Ücretsiz (kıyı)" }, hours: "7/24", dur: "30 dk",
    gq: "Cernobbio lungolago",
    short: "Como'nun hemen kuzeyinde şık göl kasabası. Dünyanın en ünlü otellerinden Villa d'Este burada.",
    history: "Villa d'Este 1568'de Kardinal Tolomeo Gallio için yapıldı, 1873'ten beri otel. Her eylül Avrupa'nın siyaset ve iş dünyasını toplayan Ambrosetti Forumu burada yapılır.",
    why: "Batı kıyısı yoluna çıkarken ilk mola; iskeleden göl manzarası.",
    tips: "Villa d'Este bir otel; bahçesi konuk olmayanlara açık değil. Kıyı boyunca kısa bir yürüyüş yeterli.",
    wiki: "Cernobbio"
  },
  {
    id: "balbianello", name: "Villa del Balbianello", local: "Lenno · Tremezzina", city: "como",
    lat: 45.96450, lng: 9.20300, score: 5,
    cats: ["como", "top", "view", "museum"],
    price: { eur: 15, txt: "Bahçe ≈15 € · villa turu dahil ≈25 €", note: "teyit" }, hours: "Pzt ve Ça hariç ≈10:00–17:00; Kasım ortasından sonra sadece belirli günler (teyit). Rezervasyon şart", dur: "1,5–2 sa",
    status: "Kasım sonunda sadece belirli günler açık olabiliyor: 24 Kasım Salı için FAI sitesinden (fondoambiente.it) mutlaka teyit edip rezervasyon yapın.",
    gq: "Villa del Balbianello, Lenno",
    short: "Göle uzanan bir burnun üstünde teraslı bahçeler. Star Wars ve James Bond çekimleri burada yapıldı.",
    history: "Kardinal Angelo Maria Durini 1787'de eski bir Fransisken manastırının yerinde bu villayı yaptırdı. 1974'te villayı alan kâşif Guido Monzino (1973 İtalyan Everest seferinin lideri) 1988'de ölünce villayı İtalya'nın kültür mirası vakfı FAI'ye bıraktı. İçeride kutup ve dağ seferlerinden objeler var. Star Wars II: Klonların Saldırısı ve Casino Royale'in sahneleri burada çekildi.",
    why: "Como Gölü'nün en fotojenik noktası; Kasım'da açık olan birkaç villadan biri.",
    tips: "Lenno'dan 1 km'lik orman yolundan yürüyerek gidiliyor (kışın su taksisi seferi olmayabilir). Rezervasyonsuz gitmeyin.",
    wiki: "Villa del Balbianello"
  },
  {
    id: "carlotta", name: "Villa Carlotta", local: "Tremezzo", city: "como",
    lat: 45.98640, lng: 9.23070, score: 3,
    cats: ["como", "museum", "view"],
    price: { eur: 17.5, txt: "17,50 €" }, hours: "2026 sezonu 8 Kasım'da bitti; Kasım sonu sadece hafta sonları", dur: "1,5 sa",
    status: "24 Kasım Salı kapalı (Kasım sonunda sadece hafta sonu açık). Önünden geçip dışarıdan görebilirsiniz.",
    gq: "Villa Carlotta, Tremezzina",
    short: "Botanik bahçesi ve Canova eserleriyle ünlü villa. Salı günü kapalı, dışarıdan görülüyor.",
    history: "1690'larda Marki Giorgio Clerici için yapıldı. 1843'te Prusya prensesi Marianne villayı kızı Charlotte'a düğün hediyesi olarak aldı; adı oradan geliyor. İçinde Canova'nın Aşk ve Psyche'sinin kopyası ve Hayez'in Romeo ile Juliet'in son öpücüğü resmi var.",
    why: "Göl kıyısındaki en büyük bahçelerden. Bu gezide dışarıdan görebilirsiniz.",
    tips: "Kapalı günlerde sadece randevuyla (segreteria@villacarlotta.it).",
    wiki: "Villa Carlotta"
  },
  {
    id: "bellagio", name: "Bellagio", local: "Gölün incisi", city: "como",
    lat: 45.98730, lng: 9.26180, score: 5,
    cats: ["como", "top", "view", "free"],
    price: { eur: 0, txt: "Ücretsiz" }, hours: "7/24", dur: "1,5–2 sa",
    gq: "Bellagio, Como",
    short: "Gölün üç kolunun birleştiği burundaki merdivenli sokaklı köy. Como Gölü'nün en ünlü yeri.",
    history: "Bellagio'da Roma döneminde Genç Plinius'un villalarından biri olduğu anlatılır. 19. yüzyılda Avrupa aristokrasisinin ve sanatçıların gözdesi oldu; Liszt, Stendhal ve daha birçokları burada kaldı. Köyün ucundaki Punta Spartivento'da gölün Como, Lecco ve kuzey kolları birleşiyor.",
    why: "Taş merdivenli dar sokaklar, ipek dükkânları ve göl manzarası. Kışın sakinliği ayrı güzel.",
    tips: "Kasım'da bazı oteller ve dükkânlar kapalı, ama köy yaşıyor. Gün batımını Punta Spartivento'da izleyin. Villa Melzi ve Villa Serbelloni bahçeleri kışın kapalı.",
    wiki: "Bellagio, Lombardy"
  },
  {
    id: "gallo", name: "Osteria del Gallo", local: "Via Vitani 16, Como", city: "como",
    lat: 45.81010, lng: 9.08580, score: 3,
    cats: ["como", "food"],
    price: { eur: null, txt: "Öğle ≈15–25 €" }, hours: "Öğle ağırlıklı (teyit)", dur: "1 sa",
    gq: "Osteria del Gallo, Como",
    short: "Eski şehirde, rafları şarap şişeleriyle dolu küçük, otantik osteria.",
    history: "Como'nun tarihi merkezinde yıllardır yerel yemekleri basit bir menüyle sunan, şarap dükkânı da olan bir osteria.",
    why: "Turistik göl kıyısı restoranlarına göre samimi ve makul fiyatlı.",
    tips: "Göl balığı ya da günün çorbasını sorun. Yer az, erken gidin.",
    wiki: null
  },
  {
    id: "gattonero", name: "Il Gatto Nero", local: "Rovenna · Cernobbio", city: "como",
    lat: 45.84870, lng: 9.08460, score: 3,
    cats: ["como", "food", "view", "night"],
    price: { eur: null, txt: "Ana yemek ≈30–45 €" }, hours: "Akşam (bazı günler öğle), kapalı gün teyit; rezervasyon şart", dur: "2 sa",
    gq: "Il Gatto Nero, Cernobbio",
    short: "Cernobbio'nun üstündeki tepede, terasından gölün tamamını gören ünlü romantik restoran.",
    history: "Onlarca yıldır ünlülerin ve yerel halkın özel gün mekânı. Teras manzarası Como Gölü'nün en güzellerinden sayılıyor.",
    why: "Çiftler için özel bir akşam yemeği.",
    tips: "Pencere kenarı masa için rezervasyonda belirtin. Pahalı.",
    wiki: null
  },
  {
    id: "silvio", name: "Ristorante Silvio", local: "Loppia · Bellagio", city: "como",
    lat: 45.97900, lng: 9.25600, score: 3,
    cats: ["como", "food", "view"],
    price: { eur: null, txt: "Ana yemek ≈20–30 €" }, hours: "Öğle ve akşam (kış kapanışı teyit)", dur: "1,5 sa",
    gq: "Ristorante Silvio, Bellagio",
    short: "1919'dan beri balıkçı ailesinin restoranı: göl balığı, risotto con pesce persico.",
    history: "Aile 1900'lerin başından beri gölde balıkçılık yapıyor; restoranda kendi tuttukları balıkları pişiriyorlar.",
    why: "Bellagio'da göl balığı yemek için klasik adres.",
    tips: "Risotto con filetti di pesce persico (tatlı su levreği filetolu risotto) Como Gölü'nün imza yemeği.",
    wiki: null
  },

  // ───────────── LUGANO (İSVİÇRE) ─────────────
  {
    id: "bre", name: "Monte Brè Füniküleri", local: "Funicolare Cassarate–Monte Brè", city: "lugano",
    lat: 46.01170, lng: 8.98410, score: 5,
    cats: ["lugano", "top", "view"],
    price: { eur: 27, txt: "≈CHF 25 gidiş-dönüş (≈27 €)", note: "teyit" }, hours: "Kasım'da kış tarifesi, ≈09:00–18:00 (teyit; 7 Ocak'tan bakıma giriyor)", dur: "1,5–2 sa",
    gq: "Monte Brè, Lugano",
    short: "'İsviçre'nin en güneşli dağı' 925 m. Tepeden Lugano Gölü, şehir ve Alpler.",
    history: "Füniküler 1908'de Cassarate'den Suvigliana'ya, 1912'de zirveye kadar açıldı. Tepedeki Brè köyü, sokaklarına yerleştirilmiş çağdaş sanat eserleri ve ressam Wilhelm Schmid'in evi-müzesiyle 'sanatçılar köyü' olarak biliniyor. Yılda ortalama 2.100 saatten fazla güneş alıyor.",
    why: "Lugano'yu ve gölü yukarıdan görmenin en iyi yolu. San Salvatore kapalıyken tek seçenek.",
    tips: "Alt istasyon Cassarate'de, otopark var. Tepeden Brè köyüne 15 dakikalık düz yürüyüş çok keyifli. Bulutluysa önce webcam'e bakın.",
    wiki: "Monte Brè"
  },
  {
    id: "gandria", name: "Gandria ve Zeytin Yolu", local: "Sentiero dell'olivo", city: "lugano",
    lat: 45.99630, lng: 9.00500, score: 4,
    cats: ["lugano", "view", "free"],
    price: { eur: 0, txt: "Ücretsiz" }, hours: "7/24", dur: "1–1,5 sa",
    gq: "Gandria, Lugano",
    short: "Göl kıyısındaki dik yamaca tutunmuş balıkçı köyü. Castagnola'dan zeytinlikler arasından 3 km'lik yol.",
    history: "Gandria yüzyıllarca balıkçılık, zeytin ve ipek böcekçiliğiyle geçindi; 1970'lere kadar sadece tekne ve patikayla ulaşılabiliyordu. Bu yüzden dar merdivenli sokakları neredeyse hiç değişmedi. Sentiero dell'olivo, bölgenin unutulmuş zeytincilik geleneğini anlatan levhalarla düzenlenmiş bir yürüyüş yolu.",
    why: "Lugano'nun en otantik köşesi. Kartpostal manzarası.",
    tips: "Arabayla köyün üstündeki otoparka gidip merdivenlerle inebilirsiniz. Kışın restoranların çoğu kapalı olabilir.",
    wiki: "Gandria"
  },
  {
    id: "lorenzo", name: "San Lorenzo Katedrali", local: "Cattedrale di San Lorenzo", city: "lugano",
    lat: 46.00640, lng: 8.94900, score: 3,
    cats: ["lugano", "free", "view"],
    price: { eur: 0, txt: "Ücretsiz" }, hours: "Genelde 06:30–18:00 (teyit)", dur: "15–20 dk",
    gq: "Cattedrale di San Lorenzo, Lugano",
    short: "Rönesans cepheli katedral; önündeki terastan şehrin çatıları ve göl manzarası.",
    history: "Kilise ortaçağdan kalma; zarif beyaz mermer cephesi 1517'de Lombard Rönesansı üslubunda yapıldı. 1888'de Lugano piskoposluğu kurulunca katedral oldu.",
    why: "Tren istasyonu ile eski şehir arasındaki en güzel manzara noktalarından.",
    tips: "Katedralden Via Cattedrale merdivenleriyle eski şehre inin.",
    wiki: "Lugano Cathedral"
  },
  {
    id: "riforma", name: "Piazza della Riforma ve Via Nassa", local: "Lugano merkez", city: "lugano",
    lat: 46.00500, lng: 8.95120, score: 4,
    cats: ["lugano", "top", "free"],
    price: { eur: 0, txt: "Ücretsiz" }, hours: "7/24 · mağazalar ≈09:00–18:30", dur: "45 dk–1 sa",
    gq: "Piazza della Riforma, Lugano",
    short: "Lugano'nun ana meydanı ve arkadlı lüks alışveriş caddesi Via Nassa.",
    history: "Meydan adını Ticino kantonunun 1830'daki anayasa reformundan alıyor. Kuzeyindeki neoklasik belediye binası (Palazzo Civico) 1844'te yapıldı. Ticino 1803'te İsviçre Konfederasyonu'na katılan İtalyanca konuşan tek kanton (Graubünden'in bir kısmıyla birlikte); bu yüzden Lugano'da İsviçre düzeni ile İtalyan yaşam tarzı yan yana.",
    why: "Kafeler, saatçiler, çikolatacılar ve göl kıyısı birkaç adımda.",
    tips: "Natale in Piazza Noel pazarı 26 Kasım'da açılıyor; 25 Kasım'da kurulum hazırlıklarını görebilirsiniz. Fiyatlar CHF, birçok yerde euro geçiyor ama para üstü frank verilir.",
    wiki: "Piazza della Riforma"
  },
  {
    id: "angioli", name: "Santa Maria degli Angioli", local: "Luini freski", city: "lugano",
    lat: 46.00140, lng: 8.94930, score: 4,
    cats: ["lugano", "museum", "free"],
    price: { eur: 0, txt: "Ücretsiz" }, hours: "Genelde 07:00–18:00 (teyit)", dur: "20 dk",
    gq: "Chiesa di Santa Maria degli Angioli, Lugano",
    short: "Sade bir Fransisken kilisesinde İsviçre'nin en önemli Rönesans freski: Luini'nin Çarmıh'a Geriliş'i.",
    history: "Kilise 1499–1515 arasında Fransisken manastırının parçası olarak yapıldı. Leonardo'nun öğrencisi sayılan Bernardino Luini 1529'da kiliseyi ikiye ayıran duvara İsa'nın Çilesi ve Çarmıha Gerilişi'ni anlatan dev freski yaptı. Yüzlerce figürlü bu resim İsviçre'deki Rönesans sanatının zirvesi kabul ediliyor.",
    why: "Dışarıdan hiç belli olmayan, içeri girince insanı şaşırtan bir başyapıt.",
    tips: "LAC'ın hemen yanında. İçeri girip arkanızı dönmeden duvarın tamamına bakın.",
    wiki: "Santa Maria degli Angioli, Lugano"
  },
  {
    id: "lac", name: "LAC ve MASI Müzesi", local: "Lugano Arte e Cultura", city: "lugano",
    lat: 46.00050, lng: 8.94800, score: 3,
    cats: ["lugano", "museum"],
    price: { eur: 21, txt: "CHF 20 (≈21 €)", note: "sergiye göre değişebilir" }, hours: "Sa, Ça, Cu 11:00–18:00 · Pe 11:00–20:00 · Ct–Pz 10:00–18:00 · Pzt kapalı", dur: "1–1,5 sa",
    gq: "LAC Lugano Arte e Cultura",
    short: "Göl kıyısında 2015'te açılan kültür merkezi. İçindeki MASI, İsviçre İtalyancası bölgesinin sanat müzesi.",
    history: "LAC, mimar Ivano Gianola'nın tasarımıyla eski Grand Hotel Palace'ın yanında 2015'te açıldı. Konser salonu, tiyatro ve Museo d'arte della Svizzera italiana'yı (MASI) bir araya getiriyor. Göle bakan cam lobi herkese açık.",
    why: "Yağmurlu havada ya da öğleden sonra kısa bir sanat molası.",
    tips: "Lobiden göl manzarası ücretsiz. 27 Kasım'da önünde buz pisti açılacak, siz bir gün önce oradasınız.",
    wiki: "LAC Lugano Arte e Cultura"
  },
  {
    id: "ciani", name: "Parco Ciani", local: "Göl kıyısı park", city: "lugano",
    lat: 46.00580, lng: 8.95830, score: 4,
    cats: ["lugano", "free", "view"],
    price: { eur: 0, txt: "Ücretsiz" }, hours: "Gündüz (kışın ≈06:00–21:00, teyit)", dur: "30–45 dk",
    gq: "Parco Ciani, Lugano",
    short: "Göl kıyısında asırlık ağaçlı park ve Villa Ciani. Gün batımı yürüyüşü için ideal.",
    history: "Milanolu Ciani kardeşler 1840'larda burada villalarını ve bahçelerini yaptırdı. 1912'de Lugano belediyesi satın alıp halka açtı. Parkın göl kıyısındaki yolu Lugano'nun en sevilen gezi yolu.",
    why: "Monte San Salvatore ve Monte Brè arasında kalan körfezin en güzel görüldüğü yer.",
    tips: "Gün batımı ≈16:50. Parkın ucundaki iskeleden Monte San Salvatore'nin silüeti fotoğraf için harika.",
    wiki: "Parco Ciani"
  },
  {
    id: "morcote", name: "Morcote", local: "İsviçre'nin en güzel köyü", city: "lugano",
    lat: 45.92350, lng: 8.91720, score: 5,
    cats: ["lugano", "top", "view", "free"],
    price: { eur: 0, txt: "Ücretsiz" }, hours: "7/24", dur: "1–1,5 sa",
    gq: "Morcote, Switzerland",
    short: "Göl kıyısında arkadlı evler, tepede 400 basamaklı kilise. 2016'da 'İsviçre'nin en güzel köyü' seçildi.",
    history: "Morcote ortaçağda Lugano Gölü'nün önemli bir limanı ve gümrük noktasıydı. Zengin tüccar aileleri kıyıya arkadlı konaklar yaptırdı. Tepedeki Santa Maria del Sasso kilisesine yüzlerce basamaklı bir merdivenle çıkılıyor; mezarlığından göl manzarası çok etkileyici. 2016'da bir İsviçre televizyon yarışmasında ülkenin en güzel köyü seçildi.",
    why: "Akşamüstü ışıklar yanarken göl kıyısında yürümek Lugano gününün en romantik anı.",
    tips: "Ünlü Parco Scherrer bahçesi kışın kapalı. Kilise merdivenlerini gün ışığında çıkın, sonra kıyıda bir kafede oturun.",
    wiki: "Morcote"
  },
  {
    id: "salvatore", name: "Monte San Salvatore", local: "Paradiso", city: "lugano",
    lat: 45.97720, lng: 8.94660, score: 2,
    cats: ["lugano", "view"],
    price: { eur: 27, txt: "≈CHF 25+ gidiş-dönüş", note: "teyit" }, hours: "Yaz sezonu Kasım başında bitiyor, kış sezonu Aralık başında açılıyor", dur: "1,5 sa",
    status: "25 Kasım'da füniküler bakımda, kapalı olması bekleniyor (yaz sezonu Kasım başında bitiyor, kış sezonu Aralık başında başlıyor). Bunun yerine Monte Brè'ye çıkın.",
    gq: "Monte San Salvatore, Lugano",
    short: "Lugano'nun 'şeker kelle' dağı. Kasım sonunda füniküler kapalı.",
    history: "Füniküler 1890'da açıldı. Zirvede küçük bir kilise ve müze var. Kış sezonu son yıllarda Aralık başında açılıyor.",
    why: "Normalde Lugano'nun en ünlü manzarası; bu tarihte Monte Brè daha mantıklı.",
    tips: "montesansalvatore.ch'den açılış tarihini kontrol edin.",
    wiki: "Monte San Salvatore"
  },
  {
    id: "alprose", name: "Alprose Çikolata Müzesi", local: "Caslano", city: "lugano",
    lat: 45.97180, lng: 8.88220, score: 3,
    cats: ["lugano", "museum", "food"],
    price: { eur: 3, txt: "CHF 3 (≈3 €)" }, hours: "Pzt–Cu 09:00–17:30, Ct–Pz 09:00–16:30 (teyit)", dur: "45 dk",
    gq: "Alprose Chocolate Experience, Caslano",
    short: "Çalışan çikolata fabrikasını yukarıdan izleyip sonunda sınırsız tadım yaptığınız müze.",
    history: "Alprose 1957'de Caslano'da kuruldu. Müzede çikolatanın tarihi anlatılıyor; hafta içi fabrikadaki üretim bandı bir cam koridordan izlenebiliyor. Çıkıştaki dükkânda ürünleri tadabiliyorsunuz.",
    why: "Çarşamba hafta içi olduğu için üretimi canlı görebilirsiniz. Ucuz ve tatlı bir mola.",
    tips: "Morcote'ye 20 dakika. Hediyelik çikolata için fabrika fiyatları iyi.",
    wiki: "Caslano"
  },
  {
    id: "campione", name: "Campione d'Italia", local: "İsviçre içinde İtalyan kasabası", city: "lugano",
    lat: 45.96900, lng: 8.97070, score: 2,
    cats: ["lugano", "free", "view"],
    price: { eur: 0, txt: "Ücretsiz" }, hours: "7/24", dur: "30 dk",
    gq: "Campione d'Italia",
    short: "Dört yanı İsviçre ile çevrili küçük İtalyan toprağı. Mario Botta tasarımı dev kumarhane binası.",
    history: "Kasaba 8. yüzyılda Milano'daki Sant'Ambrogio manastırına bağışlandı ve 1797'de Ticino İsviçre'ye geçtiğinde bile Lombardiya'ya bağlı kaldı. Bu yüzden bugün İtalya'nın bir parçası ama günlük hayatta İsviçre frangı kullanılıyor. Kumarhanenin 2007'de açılan binasını İsviçreli mimar Mario Botta tasarladı.",
    why: "Coğrafi bir tuhaflık; göl kıyısından Lugano manzarası güzel.",
    tips: "Lugano'dan karşı kıyıya 15 dk. Kısa bir uğrama yeterli.",
    wiki: "Campione d'Italia"
  },
  {
    id: "hesse", name: "Hermann Hesse Müzesi", local: "Montagnola", city: "lugano",
    lat: 45.98460, lng: 8.91650, score: 2,
    cats: ["lugano", "museum"],
    price: { eur: 11, txt: "≈CHF 10", note: "teyit" }, hours: "Kışın genelde sadece hafta sonu (teyit)", dur: "45 dk",
    status: "Kış aylarında genelde sadece hafta sonu açık: Çarşamba günü kapalı olması muhtemel, gitmeden teyit edin.",
    gq: "Museo Hermann Hesse, Montagnola",
    short: "Siddhartha ve Bozkırkurdu'nun yazarı Hesse'nin hayatının son 43 yılını geçirdiği köy.",
    history: "Hermann Hesse 1919'da Montagnola'ya yerleşti ve 1962'deki ölümüne kadar burada yaşadı. Siddhartha, Bozkırkurdu ve Boncuk Oyunu'nu burada yazdı, 1946'da Nobel Edebiyat Ödülü aldı. Müze, yaşadığı Casa Camuzzi'nin kulesinde.",
    why: "Hesse okurları için özel bir durak.",
    tips: "Kapalıysa köyde Hesse'nin yürüyüş yolunu (levhalı) yürüyebilirsiniz.",
    wiki: "Montagnola"
  },
  {
    id: "bottegone", name: "Bottegone del Vino", local: "Via Magatti 3, Lugano", city: "lugano",
    lat: 46.00470, lng: 8.95030, score: 3,
    cats: ["lugano", "food"],
    price: { eur: null, txt: "Ana yemek ≈CHF 25–40" }, hours: "Pzt–Ct öğle ve akşam, Pazar kapalı (teyit)", dur: "1,5 sa",
    gq: "Bottegone del Vino, Lugano",
    short: "Eski şehirde şarap evi-lokanta: Ticino merlot'su, risotto, mevsim yemekleri.",
    history: "Lugano'nun merkezinde uzun yıllardır yerel şarapları ve Ticino mutfağını sunan sevilen bir adres.",
    why: "Ticino'nun ünlü merlot şaraplarını tatmak için iyi bir yer.",
    tips: "Öğle menüsü akşama göre daha uygun fiyatlı. İsviçre'de restoran fiyatları İtalya'nın yaklaşık 1,5–2 katı.",
    wiki: null
  },
  {
    id: "grotto", name: "Ticino grottosu", local: "ör. Grotto della Salute, Massagno", city: "lugano",
    lat: 46.01180, lng: 8.94050, score: 3,
    cats: ["lugano", "food", "night"],
    price: { eur: null, txt: "Ana yemek ≈CHF 25–35" }, hours: "Akşam (kapalı gün teyit)", dur: "1,5–2 sa",
    gq: "Grotto della Salute, Massagno",
    short: "Eskiden şarap mahzeni olan taş binalarda rustik Ticino lokantaları: polenta, brasato, merlot.",
    history: "Grotto'lar Ticino'da kayalık yamaçlara oyulmuş serin mahzenlerdi; köylüler şarap, peynir ve salamı burada saklardı. 19. yüzyıldan itibaren pazar günleri burada yemek yenmeye başlandı ve zamanla mahzenler basit lokantalara dönüştü. Bugün hâlâ taş masalar, merlot dolu seramik kâseler (boccalino) ve tahta ateşinde polenta ile Ticino'nun en karakteristik yemek kültürü.",
    why: "Lugano'da İtalyan değil, Ticino'ya özgü bir akşam yemeği.",
    tips: "Grotto'ların çoğu kışın kısa saatlerle çalışır ya da kapanır; telefonla teyit edin. Merlot'yu boccalino'da isteyin.",
    wiki: null
  },
  {
    id: "vanini", name: "Vanini", local: "Piazza della Riforma", city: "lugano",
    lat: 46.00490, lng: 8.95150, score: 2,
    cats: ["lugano", "food"],
    price: { eur: null, txt: "Kahve + tatlı ≈CHF 8–12" }, hours: "Gündüz (teyit)", dur: "30 dk",
    gq: "Vanini Lugano Piazza della Riforma",
    short: "Meydanda pastane-çikolatacı: sıcak çikolata, pralinler.",
    history: "Lugano'nun ana meydanında yıllardır çikolata ve pasta satan köklü bir pastane.",
    why: "İsviçre'de bir sıcak çikolata molası.",
    tips: "Hediyelik çikolata için iyi ama Alprose fabrika dükkânı daha ucuz.",
    wiki: null
  }
];

// ── Günler: planlarda yeniden kullanılan gün blokları ──
// steps: [saat, yer id, açıklama]. mode: Google Maps yol tarifi tipi (walking / driving)
window.DAYS = {
  bgKlasik: { d: "Cumartesi 21 Kasım", t: "Bergamo: Città Alta ve gün batımı", city: "bergamo", mode: "walking", steps: [
    ["14:30", "funi", "Città Alta'ya çıkış (füniküler ya da otoparktan yürüyüş)"],
    ["14:45", "vecchia", "Piazza Vecchia ve Palazzo della Ragione"],
    ["15:00", "smm", "Santa Maria Maggiore (Kasım'da 17:00'de kapanıyor)"],
    ["15:35", "colleoni", "Colleoni Şapeli (16:30'da kapanıyor)"],
    ["15:55", "duomobg", "Katedral"],
    ["16:10", "campanone", "Campanone'ye çıkış: altın saat manzarası"],
    ["16:35", "mura", "Porta San Giacomo'da gün batımı (≈16:45)"],
    ["17:10", "corsarola", "Via Colleoni ve Via Gombito'da pastane turu"],
    ["17:45", "marianna", "La Marianna'da orijinal stracciatella"],
    ["18:00", "vigilio", "San Vigilio füniküleriyle tepeye, gece manzarası"],
    ["18:20", "baretto", "Il Baretto'da aperitivo"],
    ["19:45", "mimmo", "Corsarola'da akşam yemeği: casoncelli ve polenta"],
    ["21:30", "vecchia", "Işıklı Piazza Vecchia, 22:00'de Campanone'nin 100 vuruşu"]
  ]},
  bgSanat: { d: "Cumartesi 21 Kasım", t: "Bergamo: Carrara resim galerisi ve Yukarı Şehir", city: "bergamo", mode: "walking", steps: [
    ["14:30", "carrara", "Accademia Carrara (≈1,5 sa; son giriş 16:30)"],
    ["16:05", "mura", "Porta Sant'Agostino'dan surlara çıkış, gün batımı (≈16:45)"],
    ["16:40", "smm", "Santa Maria Maggiore (17:00'de kapanıyor)"],
    ["17:05", "vecchia", "Piazza Vecchia"],
    ["17:20", "corsarola", "Corsarola'da polenta e osei ve kahve"],
    ["18:00", "marianna", "La Marianna'da stracciatella"],
    ["18:15", "vigilio", "San Vigilio'da gece manzarası ve aperitivo"],
    ["19:45", "mimmo", "Akşam yemeği"],
    ["21:45", "campanone", "22:00'de Campanone'nin 100 vuruşunu meydanda dinleyin"]
  ]},
  bgYagmur: { d: "Cumartesi 21 Kasım", t: "Bergamo: kapalı mekânlar ağırlıklı", city: "bergamo", mode: "walking", steps: [
    ["14:30", "carrara", "Accademia Carrara (≈1,5 sa)"],
    ["16:10", "funi", "Füniküler ile Città Alta"],
    ["16:20", "smm", "Santa Maria Maggiore"],
    ["16:50", "duomobg", "Katedral"],
    ["17:05", "corsarola", "Kapalı pastanelerde mola"],
    ["19:30", "mimmo", "Akşam yemeği"]
  ]},

  avmOrio: { d: "Pazar 22 Kasım", t: "AVM günü: Oriocenter, akşam Aşağı Şehir", city: "avm", mode: "driving", steps: [
    ["10:00", "orio", "Oriocenter açılışta (09:00–22:00)"],
    ["13:30", "orio", "AVM içinde öğle yemeği"],
    ["14:30", "orio", "Kalan mağazalar, Iper'den hediyelik İtalyan ürünleri"],
    ["18:00", "sentierone", "Bergamo Aşağı Şehir'de Sentierone yürüyüşü ve aperitivo"],
    ["19:30", "sentierone", "Città Bassa'da akşam yemeği"]
  ]},
  avmSerravalle: { d: "Pazar 22 Kasım", t: "Outlet günü: Serravalle Black Friday", city: "avm", mode: "driving", steps: [
    ["10:00", "serravalle", "Serravalle Designer Outlet açılışta (Black Friday ek indirimi 20–30 Kasım)"],
    ["13:30", "serravalle", "Outlet içinde öğle yemeği"],
    ["14:30", "serravalle", "Öğleden sonra ikinci tur, tax free işlemleri"],
    ["18:30", "citylife", "Dönüşte CityLife: kuleler ve akşam ışıkları"]
  ]},
  avmFranciacorta: { d: "Pazar 22 Kasım", t: "Outlet + göl: Franciacorta ve Iseo'da gün batımı", city: "avm", mode: "driving", steps: [
    ["10:00", "franciacorta", "Franciacorta Designer Village (Black Weeks)"],
    ["13:00", "franciacorta", "Öğle yemeği"],
    ["15:45", "iseo", "Iseo Gölü kıyısında gün batımı (≈16:45)"],
    ["17:30", "iseo", "Kıyıda sıcak çikolata ya da Franciacorta köpüklü şarap"],
    ["19:30", "sentierone", "Bergamo'ya dönüş, Aşağı Şehir'de akşam yemeği"]
  ]},
  avmMilano: { d: "Pazar 22 Kasım", t: "Milano tarafı: Il Centro, Alfa Romeo ve (bilet bulursanız) Cenacolo", city: "avm", mode: "driving", steps: [
    ["10:00", "arese", "Il Centro Arese"],
    ["13:00", "arese", "Öğle yemeği"],
    ["14:00", "alfa", "Alfa Romeo Müzesi (≈1,5 sa)"],
    ["16:30", "grazie", "Son Akşam Yemeği: Pazar açık, sadece bileti olanlar için (Pazartesi kapalı)"],
    ["17:15", "vigna", "Leonardo'nun Bağı"],
    ["18:15", "navigli", "Navigli'de aperitivo"]
  ]},

  miKlasik: { d: "Pazartesi 23 Kasım", t: "Milano: Duomo, La Scala, Sforza Kalesi ve Navigli", city: "milano", mode: "walking", steps: [
    ["09:00", "duomo", "Duomo ve çatı terasları (önceden saatli bilet)"],
    ["10:45", "galleria", "Galleria Vittorio Emanuele II"],
    ["11:10", "scala", "La Scala Müzesi ve locadan salon"],
    ["12:15", "luini", "Luini'de panzerotto (Pazartesi 15:00'e kadar)"],
    ["12:45", "quadrilatero", "Moda Dörtgeni: Via Montenapoleone"],
    ["13:45", "brera", "Brera sokakları (Pinacoteca Pzt kapalı)"],
    ["14:40", "sforzesco", "Castello Sforzesco avluları"],
    ["15:20", "sempione", "Parco Sempione ve Barış Takı"],
    ["15:55", "vigna", "Leonardo'nun Bağı"],
    ["16:40", "grazie", "Santa Maria delle Grazie (kilise; Cenacolo Pzt kapalı)"],
    ["17:05", "ambrogio", "Sant'Ambrogio"],
    ["17:45", "navigli", "Navigli'de aperitivo"],
    ["20:00", "trattoria", "Risotto alla milanese ve cotoletta"],
    ["22:00", "galleria", "Gece Duomo ve Galleria ışıkları"]
  ]},
  miAlisveris: { d: "Pazartesi 23 Kasım", t: "Milano: moda, alışveriş ve Duomo", city: "milano", mode: "walking", steps: [
    ["09:30", "duomo", "Duomo ve teraslar"],
    ["11:00", "galleria", "Galleria'da Prada'nın ilk mağazası"],
    ["11:30", "rinascente", "Rinascente ve çatı katında kahve"],
    ["12:30", "luini", "Luini'de hızlı öğle"],
    ["13:00", "quadrilatero", "Montenapoleone, Della Spiga, Sant'Andrea"],
    ["15:00", "brera", "Brera'nın butikleri"],
    ["16:15", "corsocomo", "Corso Como ve 10 Corso Como"],
    ["17:00", "portanuova", "Porta Nuova, Bosco Verticale akşam ışıkları"],
    ["18:30", "navigli", "Navigli'de aperitivo ve akşam yemeği"]
  ]},
  miSanat: { d: "Pazartesi 23 Kasım", t: "Milano: Pazartesi açık müzeler", city: "milano", mode: "walking", steps: [
    ["09:00", "duomo", "Duomo ve teraslar"],
    ["10:45", "galleria", "Galleria"],
    ["11:00", "scala", "La Scala Müzesi"],
    ["12:00", "poldi", "Poldi Pezzoli Müzesi (Pzt açık)"],
    ["13:15", "luini", "Luini'de öğle"],
    ["14:00", "sforzesco", "Castello Sforzesco avluları"],
    ["14:45", "vigna", "Leonardo'nun Bağı"],
    ["15:45", "prada", "Fondazione Prada (Pzt açık) ve Bar Luce"],
    ["18:15", "navigli", "Navigli'de aperitivo"],
    ["20:00", "trattoria", "Akşam yemeği"]
  ]},
  miRomantik: { d: "Pazartesi 23 Kasım", t: "Milano: sakin sabah, terasta gün batımı, kanalda akşam", city: "milano", mode: "walking", steps: [
    ["10:00", "ambrogio", "Sant'Ambrogio'nun sessiz avlusu"],
    ["10:45", "vigna", "Leonardo'nun Bağı ve Atellani bahçesi"],
    ["11:45", "sforzesco", "Sforza Kalesi ve Parco Sempione"],
    ["13:00", "brera", "Brera'da öğle yemeği ve sokaklar"],
    ["14:45", "quadrilatero", "Montenapoleone vitrinleri"],
    ["15:40", "duomo", "Duomo terasında gün batımı (≈16:45; 15:45 civarı slot alın)"],
    ["17:15", "galleria", "Galleria ışıkları"],
    ["18:00", "navigli", "Navigli'de aperitivo ve kanal kıyısında akşam yemeği"],
    ["21:30", "basso", "Bar Basso'da dev kadehte Negroni Sbagliato"]
  ]},
  miYagmur: { d: "Pazartesi 23 Kasım", t: "Milano: çatı altında bir gün", city: "milano", mode: "walking", steps: [
    ["09:30", "duomo", "Duomo'nun içi (teraslar yağmurda kapanabilir)"],
    ["10:45", "galleria", "Galleria"],
    ["11:00", "scala", "La Scala Müzesi"],
    ["12:15", "rinascente", "Rinascente çatı katında öğle"],
    ["13:30", "poldi", "Poldi Pezzoli"],
    ["15:00", "prada", "Fondazione Prada"],
    ["18:00", "navigli", "Navigli'de kapalı bir barda aperitivo"]
  ]},

  coKlasik: { d: "Salı 24 Kasım", t: "Como Gölü: şehir, Brunate, Balbianello ve Bellagio", city: "como", mode: "driving", steps: [
    ["09:15", "duomoco", "Como Katedrali ve Broletto"],
    ["09:45", "lungolago", "Göl kıyısı ve Life Electric"],
    ["10:20", "brunate", "Füniküler ile Brunate"],
    ["10:40", "faro", "Brunate manzarası, Faro Voltiano yolu"],
    ["12:15", "gallo", "Como'da öğle yemeği"],
    ["13:30", "cernobbio", "Batı kıyısı: Cernobbio'da kısa mola"],
    ["14:30", "balbianello", "Villa del Balbianello (rezervasyonlu, açık gün teyitli)"],
    ["16:10", "carlotta", "Tremezzo: Villa Carlotta'yı dışarıdan görün"],
    ["16:30", "bellagio", "Bellagio'ya geçiş, Punta Spartivento'da gün batımı"],
    ["17:30", "bellagio", "Bellagio'nun merdivenli sokakları"],
    ["19:00", "silvio", "Göl balığıyla akşam yemeği"]
  ]},
  coSakin: { d: "Salı 24 Kasım", t: "Como Gölü: şehir, villalar ve manzaralı akşam yemeği", city: "como", mode: "driving", steps: [
    ["10:00", "duomoco", "Como Katedrali"],
    ["10:30", "terragni", "Terragni'nin rasyonalist binası"],
    ["10:50", "voltiano", "Tempio Voltiano"],
    ["11:30", "olmo", "Kıyı boyunca Villa Olmo'ya yürüyüş"],
    ["12:45", "gallo", "Öğle yemeği"],
    ["14:00", "brunate", "Füniküler ile Brunate"],
    ["14:20", "faro", "Faro Voltiano'ya yürüyüş, gölde gün batımı (≈16:45)"],
    ["17:30", "lungolago", "Akşam ışıklarında Life Electric"],
    ["19:30", "gattonero", "Il Gatto Nero'da manzaralı akşam yemeği"]
  ]},
  coYagmur: { d: "Salı 24 Kasım", t: "Como: yağmurda kapalı mekânlar ve Bellagio", city: "como", mode: "driving", steps: [
    ["10:00", "duomoco", "Katedral"],
    ["10:40", "voltiano", "Tempio Voltiano"],
    ["11:30", "olmo", "Villa Olmo (sergi varsa)"],
    ["12:45", "gallo", "Öğle yemeği"],
    ["14:30", "bellagio", "Bellagio: kapalı ipek dükkânları ve kafeler"],
    ["18:30", "silvio", "Akşam yemeği"]
  ]},

  luKlasik: { d: "Çarşamba 25 Kasım", t: "Lugano: Monte Brè, Gandria, eski şehir ve Morcote", city: "lugano", mode: "driving", steps: [
    ["09:30", "bre", "Monte Brè füniküleri ve zirve"],
    ["11:30", "gandria", "Gandria köyü ve zeytin yolu"],
    ["13:00", "bottegone", "Eski şehirde öğle yemeği"],
    ["14:15", "lorenzo", "San Lorenzo Katedrali ve teras"],
    ["14:40", "riforma", "Via Nassa ve Piazza della Riforma"],
    ["15:20", "angioli", "Santa Maria degli Angioli: Luini freski"],
    ["15:40", "lac", "LAC lobisi ya da MASI (≈1 sa)"],
    ["16:35", "ciani", "Parco Ciani'de gün batımı (≈16:50)"],
    ["17:40", "morcote", "Akşam ışıklarında Morcote"],
    ["19:30", "grotto", "Ticino grottosunda akşam yemeği"]
  ]},
  luFox: { d: "Çarşamba 25 Kasım", t: "Lugano sabahı + FoxTown outlet", city: "lugano", mode: "driving", steps: [
    ["09:30", "bre", "Monte Brè zirvesi"],
    ["11:30", "riforma", "Via Nassa ve meydan"],
    ["12:15", "angioli", "Luini freski"],
    ["12:45", "bottegone", "Öğle yemeği"],
    ["14:15", "foxtown", "FoxTown Mendrisio (≈11:00–19:00)"],
    ["18:30", "morcote", "Dönüşte Morcote'de akşam ışıkları"],
    ["19:45", "grotto", "Akşam yemeği"]
  ]},
  luRomantik: { d: "Çarşamba 25 Kasım", t: "Lugano: köyler, çikolata ve göl kıyısında gün batımı", city: "lugano", mode: "driving", steps: [
    ["09:30", "bre", "Monte Brè ve Brè köyü yürüyüşü"],
    ["11:45", "gandria", "Gandria'nın merdivenli sokakları"],
    ["13:00", "bottegone", "Öğle yemeği"],
    ["14:15", "angioli", "Luini freski"],
    ["14:40", "riforma", "Via Nassa, Vanini'de sıcak çikolata"],
    ["15:30", "alprose", "Alprose'da çikolata fabrikası ve tadım"],
    ["16:20", "morcote", "Morcote: kilise merdivenleri ve gölde gün batımı"],
    ["19:00", "grotto", "Grotto'da polenta ve merlot"]
  ]},
  luYagmur: { d: "Çarşamba 25 Kasım", t: "Lugano: müzeler, çikolata ve kapalı outlet", city: "lugano", mode: "driving", steps: [
    ["10:00", "angioli", "Santa Maria degli Angioli"],
    ["10:30", "lac", "MASI (11:00'de açılıyor) ve LAC"],
    ["12:30", "bottegone", "Öğle yemeği"],
    ["14:00", "alprose", "Alprose çikolata müzesi"],
    ["15:30", "foxtown", "FoxTown (kapalı outlet)"],
    ["19:00", "grotto", "Akşam yemeği"]
  ]}
};

// Gezi planları — her plan 5 günden oluşuyor (Perşembe dönüş, plan yok)
(function () {
  const D = window.DAYS;
  window.PLANS = [
    { id: "klasik", name: "Klasik rota", tag: "Önerilen", color: "#FF385C",
      desc: "Her şehrin en iyisi: Bergamo'da gün batımı, Pazar Oriocenter, Milano'da Duomo'dan Navigli'ye, Como'da Brunate ve Bellagio, Lugano'da Monte Brè ve Morcote.",
      days: [D.bgKlasik, D.avmOrio, D.miKlasik, D.coKlasik, D.luKlasik] },
    { id: "romantik", name: "Romantik & manzara", tag: "Çiftlere", color: "#C2185B",
      desc: "Her akşam bir gün batımı: Porta San Giacomo, Iseo Gölü, Duomo terası, Bellagio ve Morcote. Arada Franciacorta outlet, Bar Basso ve grotto akşamı.",
      days: [D.bgKlasik, D.avmFranciacorta, D.miRomantik, D.coKlasik, D.luRomantik] },
    { id: "alisveris", name: "Alışveriş & outlet", tag: "Black Friday", color: "#B45309",
      desc: "Pazar Serravalle'de Black Friday ek indirimi (20–30 Kasım), Pazartesi Milano'nun moda sokakları, Çarşamba FoxTown. Arada Bergamo, Como ve Lugano'nun en iyisi.",
      days: [D.bgKlasik, D.avmSerravalle, D.miAlisveris, D.coKlasik, D.luFox] },
    { id: "sanat", name: "Sanat & tarih", tag: "Müze sevenlere", color: "#7B4FB8",
      desc: "Accademia Carrara, Pazar günü (bilet bulursanız) Son Akşam Yemeği, Pazartesi açık müzeler (La Scala, Poldi Pezzoli, Fondazione Prada), Volta ve Luini.",
      days: [D.bgSanat, D.avmMilano, D.miSanat, D.coSakin, D.luKlasik] },
    { id: "yagmur", name: "Yağmurlu gün planı", tag: "B planı", color: "#5B5BD6",
      desc: "Kasım Lombardiya'nın en yağışlı aylarından. Kapalı mekânlar ağırlıklı, teleferik ve manzara noktaları çıkarıldı. Günleri tek tek de değiştirebilirsiniz.",
      days: [D.bgYagmur, D.avmOrio, D.miYagmur, D.coYagmur, D.luYagmur] }
  ];
})();

// Ortak bloklar (her planda aynı)
window.FIXED = {
  arrival: [
    ["—", null, "Bergamo'ya iniş, araç teslimi ve yerleşme"],
    ["14:30", null, "Plan buradan başlıyor"]
  ],
  departure: [
    ["—", null, "Perşembe 26 Kasım: dönüş günü. Plan yok, iyi yolculuklar!"]
  ]
};

// Tarih zaman çizelgesi
window.TIMELINE = [
  ["MÖ 1. yy", "Romalılar Mediolanum (Milano), Comum (Como) ve Bergomum'u (Bergamo) şehir statüsüne getiriyor. Sezar MÖ 59'da Como'ya yerleşimci gönderiyor."],
  ["313", "İmparator Konstantin Milano Fermanı ile Hıristiyanlığa serbestlik tanıyor."],
  ["374–397", "Ambrosius Milano piskoposu. Sant'Ambrogio Bazilikası kuruluyor."],
  ["568", "Germen Longobardlar İtalya'ya giriyor; bölge adını onlardan alıyor: Lombardiya."],
  ["1176", "Lombardiya Birliği şehirleri Legnano'da İmparator Barbarossa'yı yeniyor."],
  ["1386", "Gian Galeazzo Visconti Milano Katedrali'nin yapımını başlatıyor."],
  ["1428", "Bergamo Venedik Cumhuriyeti'ne geçiyor; 1797'ye kadar Venedik'in en batı şehri kalıyor."],
  ["1450", "Francesco Sforza Milano dükü oluyor ve kaleyi yeniden yapıyor."],
  ["1495–1498", "Leonardo da Vinci Son Akşam Yemeği'ni yapıyor."],
  ["1512–1513", "İsviçre Konfederasyonu Lugano'yu ve bugünkü Ticino'yu ele geçiriyor."],
  ["1535", "Sforza soyu bitiyor, Milano İspanyol yönetimine giriyor."],
  ["1561–1588", "Venedik, Bergamo'nun surlarını inşa ediyor."],
  ["1714", "Milano Avusturya Habsburglarına geçiyor."],
  ["1778", "La Scala açılıyor."],
  ["1797–1800", "Napolyon kuzey İtalya'yı alıyor. Volta Como'da elektrik pilini icat ediyor (1800)."],
  ["1803", "Ticino bağımsız bir kanton olarak İsviçre Konfederasyonu'na katılıyor."],
  ["1805", "Napolyon Milano Katedrali'nde İtalya Kralı olarak taç giyiyor."],
  ["1848", "Beş Gün ayaklanması: Milanolular Avusturya garnizonunu şehirden çıkarıyor."],
  ["1859–1861", "Lombardiya Piemonte-Sardinya Krallığı'na katılıyor, ardından İtalya Krallığı kuruluyor."],
  ["1877", "Galleria Vittorio Emanuele II tamamlanıyor."],
  ["1943", "Müttefik bombardımanları Milano'yu, La Scala'yı ve Santa Maria delle Grazie'yi vuruyor."],
  ["Nisan 1945", "Mussolini Como Gölü kıyısında yakalanıp öldürülüyor; savaş kuzey İtalya'da bitiyor."],
  ["1950'ler–60'lar", "'Ekonomik mucize': Milano İtalya'nın sanayi ve finans başkenti oluyor."],
  ["1970'ler–80'ler", "Armani, Versace, Prada: Milano dünya moda başkentlerinden biri oluyor."],
  ["2015", "Milano Expo'ya ev sahipliği yapıyor. Fondazione Prada ve LAC Lugano açılıyor."],
  ["2017", "Bergamo'nun Venedik surları UNESCO Dünya Mirası listesine giriyor."],
  ["2020", "Bergamo, Avrupa'da COVID-19 salgınının en ağır vurduğu yerlerden biri oluyor."],
  ["2023", "Bergamo ve Brescia birlikte İtalya Kültür Başkenti."],
  ["Şubat 2026", "Milano ve Cortina d'Ampezzo Kış Olimpiyatları'na ev sahipliği yapıyor."]
];
