// Tiran gezisi — tüm içerik verisi (20–23 Kasım 2026)
// Fiyatlar Arnavut leki (L). 100 L ≈ 1 €. Kaynaklar arasında çelişen fiyat/saatler "teyit" ile işaretli.

window.TRIP = {
  home: {
    name: "Konaklamanız",
    sub: "20 – 22 Kas",
    address: "Rruga Qemal Stafa, Pallati 6 (Sheshi Skënderbej 31), Tiranë 1001",
    lat: 41.3309, lng: 19.8240
  },
  flights: {
    out: { no: "PC283", from: "İstanbul (SAW)", dep: "20 Kas Cuma 22:55 (TR)", arr: "22:40 (Tiran yerel)" },
    back: { no: "PC284", dep: "23 Kas Pazartesi 02:35 (Tiran) = Pazar gecesi", arr: "≈06:15 (TR)" }
  }
};

// Kategoriler (Airbnb tarzı üst şerit)
window.CATS = [
  { id: "all",      label: "Tümü",            icon: "grid" },
  { id: "top",      label: "Mutlaka görün",   icon: "star" },
  { id: "ottoman",  label: "Osmanlı & eski şehir", icon: "dome" },
  { id: "communism",label: "Komünizm & bunker", icon: "bunker" },
  { id: "faith",    label: "İnanç & Bektaşi", icon: "faith" },
  { id: "museum",   label: "Müzeler",         icon: "museum" },
  { id: "view",     label: "Manzara & doğa",  icon: "mountain" },
  { id: "daytrip",  label: "Günübirlik",      icon: "road" },
  { id: "food",     label: "Yeme-içme",       icon: "food" },
  { id: "free",     label: "Ücretsiz",        icon: "ticket" },
  { id: "practical",label: "Ulaşım & pratik", icon: "bus" }
];

// Mekânlar
// score: bizim önerimiz (5 = kaçırmayın). cats: kategori id'leri. price.lek: kişi başı (0 = ücretsiz, null = değişken)
window.PLACES = [
  // ───────────── MERKEZ ─────────────
  {
    id: "square", name: "Skanderbeg Meydanı", local: "Sheshi Skënderbej",
    lat: 41.32814, lng: 19.81843, area: "Merkez", score: 5,
    cats: ["top", "ottoman", "free"],
    price: { lek: 0, txt: "Ücretsiz" }, hours: "7/24", dur: "30–45 dk",
    short: "Şehrin kalbi. Etrafında cami, saat kulesi, opera ve tarih müzesi var.",
    history: "Osmanlı döneminde burası Tiran'ın çarşısıydı. 1920'lerde ve 30'larda Kral Zogu döneminde İtalyan mimarlar meydanı bugünkü bakanlık binalarıyla çevrelediler. Komünist rejim 1959–60'ta eski çarşıyı yıkıp yerine Kültür Sarayı'nı yaptı. 1968'de, İskender Bey'in ölümünün 500. yılında bugünkü atlı heykel dikildi. 1988'de meydana Enver Hoca'nın 10 metrelik heykeli kondu, 20 Şubat 1991'de öğrenci eylemleri sırasında halk tarafından devrildi. Meydan 2017'de Belçikalı 51N4E ofisinin tasarımıyla tamamen yayalaştırıldı. Zemindeki taşlar Arnavutluk'un farklı bölgelerinden getirildi.",
    why: "Arnavutluk'un 500 yılı tek bir meydanda: Osmanlı camisi, faşist İtalyan bakanlıkları, Sovyet yapımı Kültür Sarayı ve sosyalist mozaik yan yana duruyor. Hoca heykelinin devrilişi Arnavutluk'ta komünizmin sonunu simgeleyen an.",
    tips: "Gece ışıklandırması çok güzel. Meydanın ortası hafif bir piramit gibi yükseliyor; köşelerdeki çeşmelerde yağmurlu günde su birikebilir.",
    wiki: "Skanderbeg Square"
  },
  {
    id: "ethem", name: "Ethem Bey Camii", local: "Xhamia e Et'hem Beut",
    lat: 41.3278, lng: 19.81933, area: "Merkez", score: 5,
    cats: ["top", "ottoman", "faith", "free"],
    price: { lek: 0, txt: "Ücretsiz" }, hours: "Namaz vakitleri dışında", dur: "20–30 dk",
    short: "Şehrin en önemli Osmanlı yapısı. İçindeki manzara freskleri İslam sanatında çok nadir.",
    history: "Yapımına 1789'da Molla Bey başladı, oğlu Hacı Ethem Bey 1821–23 civarında tamamladı. Ethem Bey, Tiran'ın kurucusu Süleyman Paşa Bargjini'nin soyundandı. 1967'de rejim ülkedeki dini yapıların çoğunu yıktığında, bu cami 'kültür anıtı' sayıldığı için ayakta kaldı ama ibadete kapatıldı. 18 Ocak 1991'de polisin uyarılarına rağmen binlerce kişi camiye girip namaz kıldı. Bu olay Arnavutluk'ta din özgürlüğünün geri dönüşünün sembolü oldu. Cami 2020'de TİKA desteğiyle restore edildi.",
    why: "İç ve dış duvarlardaki ağaç, şelale ve köprü freskleri Osmanlı camilerinde bile az rastlanan bir üslup. Hem Osmanlı mirası hem de 1991'deki sessiz direnişin mekânı.",
    tips: "Ayakkabılar çıkarılıyor. Diz ve omuz kapalı olmalı. Cuma ve namaz vakitlerinde ziyaret kısıtlanıyor.",
    wiki: "Et'hem Bey Mosque"
  },
  {
    id: "clock", name: "Saat Kulesi", local: "Kulla e Sahatit",
    lat: 41.3277, lng: 19.81968, area: "Merkez", score: 4,
    cats: ["ottoman", "view"],
    price: { lek: 200, txt: "≈200 L", note: "teyit" }, hours: "Genelde 09:00–16:00, pazar kapalı olabilir (kaynaklar çelişiyor)", dur: "20 dk",
    short: "1822'den kalma 35 m'lik kule. 90 basamakla meydanı kuşbakışı görüyorsunuz.",
    history: "Hacı Ethem Bey, camiyi bitirdikten sonra 1822'de bu kuleyi yaptırdı. O dönem şehrin en yüksek yapısıydı. Kulenin çanı uzun süre Tiran'da zamanı bildiren tek araçtı. 1928'de Almanya'dan getirilen mekanik saat takıldı. İkinci Dünya Savaşı'nda hasar gördü, sonra onarıldı.",
    why: "Osmanlı Tiran'ının silüetini belirleyen iki yapıdan biri. Tepesinden meydan, Dajti Dağı ve bulvar çok güzel görünüyor.",
    tips: "Cumartesi sabahı gidin, pazar kapalı olabilir. Merdivenler dar ve dik.",
    wiki: "Clock Tower of Tirana"
  },
  {
    id: "kaplan", name: "Kaplan Paşa Türbesi", local: "Tyrbja e Kapllan Pashës",
    lat: 41.32784, lng: 19.82165, area: "Merkez", score: 2,
    cats: ["ottoman", "free"],
    price: { lek: 0, txt: "Ücretsiz" }, hours: "Dışarıdan", dur: "5 dk",
    short: "Kaleye giderken önünden geçeceğiniz zarif, sütunlu sekizgen Osmanlı türbesi.",
    history: "19. yüzyılın başında, Tiran'ın idaresinde söz sahibi Toptani ailesinden Kaplan Paşa için yapıldı. Sekiz sütunlu açık türbe tipi Balkanlar'da az bulunuyor. Komünist dönemde 'kültür anıtı' sayıldığı için korundu.",
    why: "Şehir merkezinde ayakta kalan birkaç Osmanlı yapısından biri. Kale yolunda 2 dakikalık bir mola.",
    tips: "Kale ve Bunk'Art 2 arasında, yol üstünde.",
    wiki: "Tomb of Kapllan Pasha"
  },
  {
    id: "kalaja", name: "Tiran Kalesi", local: "Kalaja e Tiranës (Justinianus Kalesi)",
    lat: 41.32591, lng: 19.82255, area: "Merkez", score: 4,
    cats: ["top", "ottoman", "food", "free"],
    price: { lek: 0, txt: "Ücretsiz" }, hours: "7/24 (mekânlar ≈10:00–24:00)", dur: "30–60 dk",
    short: "Bizans duvarları arasında restoranlar, kafeler ve el sanatları dükkânlarından oluşan yaya sokağı.",
    history: "Kalenin temelleri Bizans dönemine, geleneğe göre İmparator Justinianus'un (6. yy) zamanına uzanıyor. Bugünkü duvarlar büyük ölçüde 19. yüzyılın başında Toptani ailesinden Ahmet Paşa'nın yaptırdığı onarımlardan kalma. Kale uzun süre şehrin içinde kayboldu. 2017'de restore edilip 'Kalaja' adıyla yaya sokağına dönüştürüldü.",
    why: "Tiran'ın 1614'teki kuruluşundan bile eski olan tek yapısı. Akşam yemeği için en keyifli yerlerden biri.",
    tips: "Komiteti Kafe-Müze hemen arkada. Akşam ışıklarıyla daha güzel.",
    wiki: "Tirana Castle"
  },
  {
    id: "tanners", name: "Tabakhane Köprüsü", local: "Ura e Tabakëve",
    lat: 41.32642, lng: 19.82605, area: "Merkez", score: 3,
    cats: ["ottoman", "free"],
    price: { lek: 0, txt: "Ücretsiz" }, hours: "7/24", dur: "10 dk",
    short: "18. yüzyıldan kalma kemerli Osmanlı taş köprüsü.",
    history: "18. yüzyılda Lana deresinin eski yatağı üzerine yapıldı. Adını çevresindeki tabakhanelerden (deri atölyeleri) alıyor. Şehre doğudan, Dibra yolundan gelen kervanlar ve hayvan tüccarları bu köprüyü kullanırdı. Lana'nın yatağı 1930'larda değiştirilince köprü kuru kaldı. Restore edilerek yaya köprüsü olarak korunuyor.",
    why: "Osmanlı Tiran'ının ticaret yollarından elde kalan ender somut iz.",
    tips: "Namazgah Camii'nin hemen yanında, ikisini birlikte gezin.",
    wiki: "Tanners' Bridge"
  },
  {
    id: "pazar", name: "Yeni Pazar", local: "Pazari i Ri",
    lat: 41.33025, lng: 19.82435, area: "Merkez · konaklamanın yanı", score: 4,
    cats: ["top", "ottoman", "food", "free"],
    price: { lek: 0, txt: "Ücretsiz" }, hours: "Tezgâhlar ≈07:00–20:00, restoranlar geç saate kadar", dur: "30–60 dk",
    short: "Konaklamanıza 2 dakika. Meyve, peynir, bal ve raki tezgâhları ile geleneksel lokantalar.",
    history: "Komünistler 1959'da eski Osmanlı çarşısını yıkınca şehrin pazarı bu bölgeye taşındı. Pazar yıllarca derme çatma tezgâhlarla devam etti. 2017'de cam çatılı kapalı pazar, yenilenmiş meydan ve renkli cepheler eklendi. Çevresi bugün Tiran'ın en canlı yeme-içme mahallelerinden biri.",
    why: "Gerçek Tiranlıların alışveriş yaptığı yer. Hediyelik zeytinyağı, bal, dağ çayı (çaj mali) ve raki için en iyi adres.",
    tips: "Kahvaltıyı burada yapın. Oda ve çevresindeki lokantalar akşam için çok iyi.",
    wiki: "Pazari i Ri"
  },
  {
    id: "namazgah", name: "Namazgah Camii", local: "Xhamia e Namazgjasë",
    lat: 41.32572, lng: 19.82424, area: "Merkez", score: 3,
    cats: ["faith", "free"],
    price: { lek: 0, txt: "Ücretsiz" }, hours: "Namaz vakitleri dışında", dur: "20 dk",
    short: "Balkanlar'ın en büyük camilerinden biri. Türkiye Diyanet desteğiyle yapıldı.",
    history: "Adını, Osmanlı döneminde burada bulunan açık hava namazgâhından alıyor. Temeli 2015'te atıldı. Yaklaşık 30 milyon avroluk projeyi kısmen Türkiye Diyanet Vakfı finanse etti. İnşaat 2023'te bitti ama açılış gecikti. 10 Ekim 2024'te Cumhurbaşkanı Erdoğan ve Başbakan Rama ile açıldı. İçeride 8.000, avluyla birlikte 10.000 kişi namaz kılabiliyor.",
    why: "Komünist dönemde dinin yasaklandığı bir ülkede bugünkü Türkiye–Arnavutluk ilişkisinin en görünür sembolü. Klasik Osmanlı mimarisini anımsatıyor.",
    tips: "Tabakhane Köprüsü hemen yanında. Kıyafete dikkat.",
    wiki: "Namazgah Mosque"
  },
  {
    id: "resurrection", name: "Diriliş Katedrali (Ortodoks)", local: "Katedralja Ngjallja e Krishtit",
    lat: 41.32649, lng: 19.81741, area: "Merkez", score: 2,
    cats: ["faith", "free"],
    price: { lek: 0, txt: "Ücretsiz" }, hours: "Gündüz", dur: "15–20 dk",
    short: "2012'de açılan, Balkanlar'ın en büyük Ortodoks kiliselerinden biri.",
    history: "1967 yasağından sonra yeniden yapılanan Arnavutluk Ortodoks Kilisesi'nin yeni katedrali. 2012'de açıldı. Ayrı çan kulesi ve kubbeli ana yapısıyla modern Bizans üslubunda.",
    why: "Arnavutluk'un dinler arası bir arada yaşama geleneğinin modern yüzü. House of Leaves'in hemen yanında.",
    tips: "House of Leaves ile aynı sokakta, birlikte gezilir.",
    wiki: "Resurrection Cathedral, Tirana"
  },
  {
    id: "stpaul", name: "Aziz Pavlus Katedrali (Katolik)", local: "Katedralja e Shën Palit",
    lat: 41.3248, lng: 19.82183, area: "Merkez", score: 1,
    cats: ["faith", "free"],
    price: { lek: 0, txt: "Ücretsiz" }, hours: "Gündüz", dur: "10 dk",
    short: "Ana Tereza ile Papa II. Jean Paul'ün vitraylarının olduğu modern katedral.",
    history: "2002'de açıldı. Ana Tereza'nın Arnavut asıllı olması nedeniyle vitraylarında onun portresi var.",
    why: "Tiran'da üç büyük inancın yapıları birbirine yürüme mesafesinde. Bu da onlardan biri.",
    tips: "Piramit yolu üzerinde, vaktiniz varsa uğrayın.",
    wiki: "St. Paul's Cathedral, Tirana"
  },
  {
    id: "nhm", name: "Ulusal Tarih Müzesi (cephe)", local: "Muzeu Historik Kombëtar",
    lat: 41.32943, lng: 19.81667, area: "Merkez", score: 3,
    cats: ["museum", "communism", "free"],
    price: { lek: 0, txt: "Kapalı · cephe ücretsiz" }, hours: "Tadilat nedeniyle 2028'e kadar KAPALI", dur: "10 dk",
    status: "Müze Mart 2024'ten beri tadilatta. Sadece cephedeki mozaiği görebilirsiniz.",
    short: "Cephesindeki dev 'Arnavutlar' mozaiği Tiran'ın en çok fotoğraflanan sosyalist eseri.",
    history: "1981'de açıldı. Cephedeki 'Shqiptarët' (Arnavutlar) mozaiği İlirya savaşçısından partizana kadar Arnavut tarihini sosyalist gerçekçilik üslubuyla anlatıyor. 1991'den sonra mozaikteki komünist simgelerin bir kısmı (örneğin yıldız) kaldırıldı. 2019 depreminde hasar gören bina AB'nin EU4Culture programıyla baştan yenileniyor.",
    why: "İçeri giremeseniz de mozaik, rejimin tarihi nasıl anlattığını bir bakışta gösteriyor.",
    tips: "Meydanın kuzeybatı köşesinde, geçerken bakın.",
    wiki: "National History Museum (Albania)"
  },
  {
    id: "opera", name: "Kültür Sarayı & Opera", local: "Pallati i Kulturës · TKOB",
    lat: 41.32883, lng: 19.81921, area: "Merkez", score: 2,
    cats: ["communism", "free"],
    price: { lek: 0, txt: "Dışarıdan ücretsiz" }, hours: "Gösteri günlerinde akşam", dur: "10 dk",
    short: "Kruşçev'in hediyesi olarak başlayıp Sovyetlerle kavga sonrası Arnavutların bitirdiği bina.",
    history: "1959'da Sovyet lideri Kruşçev'in ziyaretinde temeli atıldı. Bunun için Osmanlı çarşısı yıkıldı. 1961'de Arnavutluk–SSCB ilişkileri kopunca Sovyet mühendisler ayrıldı, bina 1966'da Arnavutlar tarafından tamamlandı. İçinde Ulusal Opera ve Bale Tiyatrosu ile Milli Kütüphane var.",
    why: "Soğuk Savaş'taki 'Arnavutluk SSCB'ye de küstü' hikâyesinin taştan kanıtı.",
    tips: "Hafta sonu bale ya da opera varsa biletler Avrupa'ya göre çok ucuz, tko.al'a bakın. Havalimanı otobüsü (LU-NA) binanın arkasından kalkıyor.",
    wiki: "Palace of Culture of Tirana"
  },
  {
    id: "bunk2", name: "Bunk'Art 2", local: "Bunk'Art 2",
    lat: 41.32702, lng: 19.81955, area: "Merkez", score: 5,
    cats: ["top", "communism", "museum"],
    price: { lek: 700, txt: "≈700 L", note: "1+2 kombine ≈1.300 L · teyit" }, hours: "≈09:00–18:00 (Cu–Ct 20:00'ye kadar olabilir)", dur: "1–1,5 sa",
    short: "Meydanın hemen yanında İçişleri Bakanlığı'nın nükleer sığınağı. Gizli polis Sigurimi'nin tarihi.",
    history: "1981–86 arasında İçişleri Bakanlığı için nükleer saldırıya dayanıklı bir sığınak olarak yapıldı. Hiç kullanılmadı. 2016'da müze olarak açıldı. 24 odada 1912'den 1991'e Arnavut polisinin tarihi, Sigurimi'nin sorgu ve takip yöntemleri, siyasi tutuklular ve çalışma kampları anlatılıyor. Girişteki mantar biçimli beton kubbe artık şehrin simgelerinden.",
    why: "Hoca rejiminin kendi halkına uyguladığı baskıyı anlamak için en kolay ulaşılan ve en çarpıcı müze.",
    tips: "Kart geçmeyebilir, nakit lek getirin. İçerisi serin, ince bir ceket işe yarar.",
    wiki: "Bunk'Art 2"
  },
  {
    id: "leaves", name: "Yapraklar Evi (Gizli Takip Müzesi)", local: "Shtëpia me Gjethe",
    lat: 41.32647, lng: 19.81633, area: "Merkez", score: 5,
    cats: ["top", "communism", "museum"],
    price: { lek: 700, txt: "700 L", note: "Sadece nakit" }, hours: "Kış: Sa–Ct 09:00–16:00, Pz 10:00–15:00, Pzt kapalı", dur: "1–1,5 sa",
    short: "Sigurimi'nin halkı dinlediği bina. Dinleme cihazları, gizli kameralar ve fişleme dosyaları.",
    history: "1931'de Dr. Jani Kozma'nın özel doğum kliniği olarak yapıldı. İkinci Dünya Savaşı'nda Gestapo tarafından kullanıldığı biliniyor. 1944'ten 1991'e kadar Sigurimi'nin teknik operasyon merkeziydi: telefonlar burada dinlendi, gizli kayıtlar burada işlendi. Adını cephesini saran sarmaşıklardan alıyor. 2017'de müze olarak açıldı, 2020'de Avrupa Konseyi Müze Ödülü'nü kazandı.",
    why: "Bir ülkenin vatandaşlarını nasıl gözetlediğini, kullanılan cihazlarla birebir gösteren Avrupa'daki en iyi müzelerden biri. Bunk'Art 2'den daha kişisel ve sarsıcı.",
    tips: "Pazar 15:00'te kapanıyor. Cumartesiye koymak en güvenlisi.",
    wiki: "House of Leaves (museum)"
  },
  {
    id: "boulevard", name: "Şehitler Bulvarı & İtalyan bakanlıkları", local: "Bulevardi Dëshmorët e Kombit",
    lat: 41.3262, lng: 19.8191, area: "Merkez", score: 3,
    cats: ["free"],
    price: { lek: 0, txt: "Ücretsiz" }, hours: "7/24", dur: "Yürüyüş 20 dk",
    short: "Meydandan üniversiteye uzanan 1930'ların İtalyan planlı ana aksı.",
    history: "1920'lerin sonunda Kral Zogu, İtalyan mimarlar Armando Brasini, Florestano Di Fausto ve sonra Gherardo Bosio'ya başkenti yeniden planlattı. Bakanlık binalarının sıralandığı bu bulvar o planın omurgası. Adı rejimlere göre değişti: önce Zogu Bulvarı, İtalyan işgalinde İmparatorluk Bulvarı, komünist dönemde Stalin Bulvarı, bugün Ulusal Şehitler Bulvarı.",
    why: "Tiran'ın 'neden İtalyan şehri gibi göründüğü' sorusunun cevabı. Bütün komünist dönem geçit törenleri burada yapıldı.",
    tips: "Meydan → Piramit → Ana Tereza Meydanı yürüyüşünü bu bulvar üzerinden yapın.",
    wiki: "Dëshmorët e Kombit Boulevard"
  },
  {
    id: "gallery", name: "Ulusal Sanat Galerisi", local: "Galeria Kombëtare e Arteve",
    lat: 41.32563, lng: 19.82025, area: "Merkez", score: 1,
    cats: ["museum", "communism"],
    price: { lek: null, txt: "Durumu belirsiz" }, hours: "Uzun süredir tadilatta, gitmeden kontrol edin", dur: "—",
    status: "2021'den beri tadilatta. 2026 itibarıyla açılıp açılmadığını doğrulayamadık. Lenin ve Stalin heykelleri de yerlerinden taşındı.",
    short: "Sosyalist gerçekçi resimlerin en büyük koleksiyonu. Açıksa harika bir sürpriz olur.",
    history: "1974'te açıldı. Arnavutluk'un sosyalist gerçekçilik dönemine ait resim ve heykellerin en büyük koleksiyonunu barındırıyor. Arka bahçesinde yıllarca sergilenen Lenin ve Stalin heykelleri inşaat nedeniyle taşındı.",
    why: "Açıksa rejimin sanatı nasıl propaganda aracına çevirdiğini görmek için ideal.",
    tips: "Önünden geçerken bakın, açık değilse vakit kaybetmeyin.",
    wiki: "National Museum of Fine Arts (Albania)"
  },
  {
    id: "pyramid", name: "Tiran Piramidi", local: "Piramida e Tiranës",
    lat: 41.32302, lng: 19.82159, area: "Merkez", score: 5,
    cats: ["top", "communism", "view", "free"],
    price: { lek: 0, txt: "Ücretsiz" }, hours: "Dış basamaklar 7/24", dur: "30 dk",
    short: "Enver Hoca'nın anıt-müzesi olarak yapıldı, bugün gençlik ve teknoloji merkezi. Tepesine çıkılıyor.",
    history: "1988'de Hoca'nın ölümünün ardından onun anıt-müzesi olarak açıldı. Tasarımcılar arasında kızı Pranvera Hoca ve damadı Klement Kolaneci vardı. 1991'den sonra kongre merkezi, 1999 Kosova savaşında NATO üssü, ardından TV stüdyosu oldu. Yıllarca terk edildi, gençler eğik yüzeyinden kaydı. 2023'te Hollandalı MVRDV ofisi binayı renkli kutular ve dış merdivenlerle yeniledi. Bugün çocuklara kodlama öğreten TUMO Tirana merkezi.",
    why: "Bir diktatör anıtının çocukların teknoloji okuluna dönüşmesi, Arnavutluk'un geçmişiyle hesaplaşmasının en güzel örneği.",
    tips: "Gün batımında (≈16:15) tepesine çıkın. Basamaklar yağmurda kaygan oluyor.",
    wiki: "Pyramid of Tirana"
  },
  {
    id: "postbllok", name: "Postbllok Anıtı", local: "Memoriali Postbllok",
    lat: 41.32096, lng: 19.82015, area: "Blloku", score: 4,
    cats: ["communism", "free"],
    price: { lek: 0, txt: "Ücretsiz" }, hours: "7/24", dur: "15 dk",
    short: "Berlin Duvarı parçası, bunker ve Spaç zindan madeninin beton direkleri bir arada.",
    history: "Blloku'nun eski kontrol noktası (post-bllok) yerinde, 2013'te yazar ve eski siyasi tutuklu Fatos Lubonja ile sanatçı Ardian Isufi tarafından kuruldu. Berlin Duvarı'ndan bir parça, komünist dönemden kalma bir 'pillbox' bunker ve siyasi tutukluların çalıştırıldığı Spaç maden kampından getirilmiş beton direkler yan yana duruyor.",
    why: "Tiran'daki tüm komünizm hikâyesini tek bir köşede özetleyen açık hava anıtı. Bunker'ın içine girilebiliyor.",
    tips: "Piramit'ten 5 dakika. Blloku'ya giriş kapısı gibi.",
    wiki: "Postbllok"
  },
  {
    id: "blloku", name: "Blloku", local: "Ish-Blloku",
    lat: 41.32133, lng: 19.81607, area: "Blloku", score: 5,
    cats: ["top", "communism", "food", "free"],
    price: { lek: 0, txt: "Ücretsiz" }, hours: "Kafeler sabahtan gece 02:00'ye kadar", dur: "Akşam boyu",
    short: "Komünist seçkinlerin halka kapalı mahallesiydi, bugün Tiran'ın gece hayatının merkezi.",
    history: "1950'lerden 1991'e kadar sadece Politbüro üyeleri ve aileleri burada yaşayabiliyordu. Sıradan vatandaşların girmesi yasaktı ve sokaklar nöbetçilerle korunuyordu. Rejim çöktükten sonra 1991'de halka açıldı. Bugün Tiran'ın en canlı kafe, bar ve restoran bölgesi.",
    why: "'Yasak bölge'den şehrin en özgür mahallesine dönüşüm. Akşam yemeği ve kahve için ilk tercih.",
    tips: "Radio Bar, Era ve Sky Tower burada. Cumartesi gecesi çok kalabalık oluyor.",
    wiki: "Blloku"
  },
  {
    id: "hoxhavilla", name: "Enver Hoca'nın Villası", local: "Vila e Enver Hoxhës",
    lat: 41.32108, lng: 19.8172, area: "Blloku", score: 3,
    cats: ["communism", "free"],
    price: { lek: 0, txt: "Dışarıdan ücretsiz" }, hours: "Genelde kapalı, dışarıdan", dur: "5–10 dk",
    short: "Diktatörün 1985'teki ölümüne kadar yaşadığı villa. Blloku'nun ortasında.",
    history: "Hoca ve ailesi on yıllarca bu üç katlı modernist villada yaşadı. Mahallenin halka kapalı olmasının asıl nedeni bu evdi. 1991'den sonra kaderi tartışma konusu oldu: zaman zaman sanat etkinliklerine açıldı, çoğunlukla kapalı kaldı.",
    why: "Bir ülkeyi 40 yıl dünyaya kapatan adamın şaşırtıcı derecede sade evi.",
    tips: "Postbllok'tan 2 dakika. Fotoğraf çekebilirsiniz ama kapıya dayanmayın.",
    wiki: "Villa of Enver Hoxha"
  },
  {
    id: "skytower", name: "Sky Tower (dönen bar)", local: "Sky Tower",
    lat: 41.32235, lng: 19.81812, area: "Blloku", score: 3,
    cats: ["view", "food"],
    price: { lek: null, txt: "İçecek ≈400–800 L" }, hours: "≈08:00–24:00", dur: "45 dk",
    short: "Tepedeki dönen bar ve restorandan 360° Tiran manzarası.",
    history: "2000'lerin başında yapılan, Tiran'ın ilk çok katlı modern binalarından biri. En üst katındaki döner bar, şehri bir kahve süresinde tamamen dolaşmanızı sağlıyor.",
    why: "Akşam şehrin ışıklarını ve Dajti Dağı'nı görmenin en rahat yolu.",
    tips: "Asansörle çıkılıyor. Hava kapalıysa Dajti yerine burayı seçin.",
    wiki: "Sky Tower (Tirana)"
  },
  {
    id: "teresa", name: "Ana Tereza Meydanı & Üniversite", local: "Sheshi Nënë Tereza",
    lat: 41.31755, lng: 19.82139, area: "Güney", score: 3,
    cats: ["free"],
    price: { lek: 0, txt: "Ücretsiz" }, hours: "7/24", dur: "15 dk",
    short: "1939–41 İtalyan faşist mimarisinin en saf örneği. Bulvarın bittiği yer.",
    history: "İtalyan işgali döneminde mimar Gherardo Bosio tarafından 'İmparatorluk Meydanı' olarak tasarlandı. Bugün Tiran Üniversitesi'nin ana binası olan yapı, faşist partinin merkezi (Casa del Fascio) olarak inşa edilmişti. Meydanın adı Arnavut asıllı Ana Tereza'dan geliyor.",
    why: "Akşam ışıklarıyla bulvarın sonundaki bu simetrik kompozisyon çok etkileyici.",
    tips: "Arkeoloji Müzesi aynı meydanda. Büyük Park hemen arkasında.",
    wiki: "Mother Teresa Square"
  },
  {
    id: "archaeo", name: "Arkeoloji Müzesi", local: "Muzeu Arkeologjik",
    lat: 41.31826, lng: 19.82189, area: "Güney", score: 2,
    cats: ["museum"],
    price: { lek: 500, txt: "≈300–500 L", note: "teyit" }, hours: "Genelde Sa–Pz gündüz", dur: "45 dk",
    short: "Tarih öncesinden Orta Çağ'a İlirya, Yunan ve Roma buluntuları.",
    history: "1948'de kurulan, ülkenin ilk müzelerinden biri. Arnavutluk Arkeoloji Enstitüsü'ne bağlı. İlirya mezar buluntuları, Apollonia ve Durrës'ten heykeller ve sikkeler sergileniyor.",
    why: "Tarih Müzesi kapalı olduğu için antik çağ merakınızı Tiran'da giderebileceğiniz tek yer.",
    tips: "Saatleri değişken. Yağmurlu bir gün planına iyi uyuyor.",
    wiki: "National Archaeological Museum (Albania)"
  },
  {
    id: "park", name: "Büyük Park & Yapay Göl", local: "Parku i Madh · Liqeni Artificial",
    lat: 41.31149, lng: 19.82200, area: "Güney", score: 3,
    cats: ["view", "free"],
    price: { lek: 0, txt: "Ücretsiz" }, hours: "7/24", dur: "45–90 dk",
    short: "Şehrin akciğeri. Göl çevresinde ≈5 km yürüyüş yolu.",
    history: "1955–56'da gönüllü 'gençlik çalışmalarıyla' yapay göl ve park oluşturuldu. Parkın kenarında Kral Zogu için İtalyanların yaptığı 'Tugaylar Sarayı' (Pallati i Brigadave), bugün devlet konutu, ve Arnavut yazarların anıtları var.",
    why: "Yoğun müze gününden sonra nefes almak için en iyi yer. Gün batımında gölün üzerindeki ışık çok güzel.",
    tips: "Kasımda hava 16:30'da kararıyor, parkı öğleden sonraya koyun. Mullixhiu restoranı park girişinde.",
    wiki: "Grand Park of Tirana"
  },
  {
    id: "mosaic", name: "Tiran Mozaiği", local: "Mozaiku i Tiranës",
    lat: 41.33006, lng: 19.80425, area: "Batı", score: 1,
    cats: ["museum"],
    price: { lek: null, txt: "Küçük ücret / ücretsiz", note: "teyit" }, hours: "Saatler düzensiz", dur: "20 dk",
    short: "3.–5. yüzyıldan kalma Roma villası ve erken Hristiyan bazilikası taban mozaikleri.",
    history: "1972'de bir inşaat sırasında bulundu. Önce Roma dönemi bir villaya, sonra erken Hristiyan bazilikasına ait taban mozaikleri. Tiran'da Roma döneminden kalan en önemli iz.",
    why: "Tiran'ın 1614'ten çok önce de yerleşim yeri olduğunun kanıtı. Antik çağ meraklıları için.",
    tips: "Merkezden biraz uzak (taksiyle 10 dk). Açık mı diye önceden bakın.",
    wiki: "Tirana Mosaic"
  },
  {
    id: "bektashi", name: "Bektaşi Dünya Merkezi", local: "Kryegjyshata Botërore Bektashiane",
    lat: 41.33121, lng: 19.84989, area: "Doğu", score: 5,
    cats: ["top", "faith", "museum", "free"],
    price: { lek: 0, txt: "Ücretsiz" }, hours: "Müze ≈09:00–17:30 (eski kaynak: 10–13 / 17–19)", dur: "1 sa",
    short: "Dünya Bektaşiliğinin merkezi. Tekke, dedebabaların türbeleri ve Bektaşilik müzesi.",
    history: "Bektaşi tarikatı 13. yüzyılda Anadolu'da Hacı Bektaş-ı Veli etrafında şekillendi ve Osmanlı'yla birlikte Balkanlar'a yayıldı. 1925'te Türkiye'de tekke ve zaviyeler kapatılınca tarikatın merkezi Hacıbektaş'tan Tiran'a taşındı. 1930'da burada 'Dünya Merkezi' (Kryegjyshata) kuruldu. 1967'de Hoca rejimi bütün dinleri yasaklayınca tekke kapatıldı, dervişler hapse atıldı. 22 Mart 1991'de, Nevruz günü yeniden açıldı. Bugünkü yapı ve bodrumdaki müze 2015'te açıldı. Merkez bugün Dedebaba Hacı Edmond Brahimaj (Baba Mondi) tarafından yönetiliyor. 2024'te Başbakan Rama, merkezin Vatikan benzeri egemen bir yapıya dönüştürülmesi fikrini duyurdu.",
    why: "Türkiye'den giden biri için Tiran'ın en anlamlı ziyareti. Hacıbektaş'tan kopan bir geleneğin nasıl Arnavutluk'ta yaşatıldığını, komünizmin baskısını ve Arnavut ulusal hareketindeki Bektaşi katkısını anlatıyor.",
    tips: "Konaklamadan ≈2,2 km: taksiyle 10 dk ya da 30 dk yürüyüş. Girişte pasaportunuzu emanet isteyebilirler. Kıyafete özen gösterin, müze anlatımları Arnavutça/İngilizce.",
    wiki: "World Headquarters of the Bektashi"
  },
  {
    id: "martyrs", name: "Ulusal Şehitlik & Ana Arnavutluk", local: "Varrezat e Dëshmorëve · Nëna Shqipëri",
    lat: 41.30854, lng: 19.84007, area: "Güneydoğu", score: 2,
    cats: ["communism", "view", "free"],
    price: { lek: 0, txt: "Ücretsiz" }, hours: "Gündüz", dur: "30 dk",
    short: "Şehri tepeden gören 12 m'lik 'Ana Arnavutluk' heykeli ve partizan mezarlığı.",
    history: "İkinci Dünya Savaşı'nda ölen partizanlar için yapıldı. 'Nëna Shqipëri' heykeli 1971'de dikildi. Enver Hoca 1985'te buraya gömüldü, 1992'de mezarı kaldırılarak sıradan bir mezarlığa taşındı.",
    why: "Rejimin kendi kahramanlık anlatısını en görkemli biçimde kurduğu yer. Manzarası güzel.",
    tips: "Taksiyle 10 dk. Az ziyaretçi alıyor, sakin.",
    wiki: "National Martyrs Cemetery of Albania"
  },

  // ───────────── DAJTİ ─────────────
  {
    id: "bunk1", name: "Bunk'Art 1", local: "Bunk'Art 1",
    lat: 41.35314, lng: 19.86121, area: "Dajti eteği", score: 5,
    cats: ["top", "communism", "museum"],
    price: { lek: 900, txt: "≈900 L", note: "1+2 kombine ≈1.300 L · teyit" }, hours: "Kış ≈09:00–16:00/16:30", dur: "1,5–2 sa",
    short: "Hoca'nın 5 katlı, 100'den fazla odalı atom sığınağı. Toplantı salonu bile var.",
    history: "1972–78 arasında 'Objekti Shtylla' kod adıyla, nükleer saldırıda devletin yönetimini sürdürmek için yapıldı. Hoca'nın ve başbakanın daireleri, parlamento toplantı salonu, haberleşme merkezi var. Gerçekte hiç kullanılmadı. 2014'te İtalyan gazeteci Carlo Bollino'nun girişimiyle müze ve sanat mekânı olarak açıldı. Rejimin 'her an saldırıya uğrayacağız' paranoyası yüzünden ülkeye dağıttığı on binlerce bunkerin anası sayılıyor.",
    why: "Arnavutluk'un kendini dünyadan nasıl yalıttığını hissettiren, gerçekten ürkütücü bir yeraltı dünyası. Komünizm konusunda tek bir yer seçecekseniz burası.",
    tips: "Kapanış erken, sabah ilk iş gidin. Taksiyle 15–20 dk (≈700–1.000 L). Dajti teleferiğinin alt istasyonu çok yakın.",
    wiki: "Bunk'Art"
  },
  {
    id: "dajtiEks", name: "Dajti Ekspres Teleferiği", local: "Dajti Ekspres",
    lat: 41.35083, lng: 19.86116, area: "Dajti eteği", score: 4,
    cats: ["view"],
    price: { lek: 1500, txt: "1.500 L gidiş-dönüş" }, hours: "Hafta içi 09:00–18:00, hafta sonu 09:00–18:30, SALI kapalı", dur: "15 dk tek yön",
    status: "Kuvvetli rüzgârda seferler duruyor. Gitmeden dajtiekspres.com'a bakın.",
    short: "4,7 km'lik, Balkanlar'ın en uzun teleferiklerinden biri. Ovadan 1.050 m'ye 15 dakika.",
    history: "2005'te Avusturyalı Doppelmayr firmasıyla kuruldu. Eskiden saatler süren dağ yolunu 15 dakikaya indirdi. Kabinler Tiran ovasının, bunkerlerin ve şehrin üzerinden geçiyor.",
    why: "Tiran'ı ve iyi havada Adriyatik'i yukarıdan görmenin en etkileyici yolu.",
    tips: "Bilet sadece gişeden ve sadece aynı gün için geçerli. Bunk'Art 1 ile aynı sabaha koyun.",
    wiki: "Dajti Ekspres"
  },
  {
    id: "dajti", name: "Dajti Dağı (Milli Park)", local: "Mali i Dajtit",
    lat: 41.3675, lng: 19.9010, area: "Dajti", score: 3,
    cats: ["view", "food"],
    price: { lek: 0, txt: "Ücretsiz (teleferik ayrı)" }, hours: "Gündüz", dur: "1–2 sa",
    short: "1.613 m'lik dağ. Ballkoni i Dajtit'te manzaralı öğle yemeği.",
    history: "1966'dan beri milli park. Tiran'ın doğusundaki doğal sınırı oluşturuyor. Komünist dönemde askeri tesisleriyle bilinirdi.",
    why: "Şehirden 15 dakikada kayın ve çam ormanı. Manzaralı restoranlarda kuzu ve kuzu kokoreç (kukurec) yenebiliyor.",
    tips: "Yukarısı şehirden 6–8 °C daha soğuk. Mont alın. Sis varsa hiçbir şey görmezsiniz.",
    wiki: "Mount Dajt"
  },
  {
    id: "petrela", name: "Petrela Kalesi", local: "Kalaja e Petrelës",
    lat: 41.25485, lng: 19.85458, area: "Güney · 25 dk", score: 2,
    cats: ["daytrip", "view", "ottoman"],
    price: { lek: null, txt: "Ücretsiz / ≈200–300 L" }, hours: "≈08:00–18:00", dur: "2–3 sa (yol dahil)",
    short: "Erzen vadisine bakan tepe kalesi. İçinde manzaralı bir restoran var.",
    history: "Temelleri 6. yüzyılda Bizans dönemine dayanıyor. 15. yüzyılda İskender Bey'in kız kardeşi Mamica Kastrioti'nin yönetimindeydi ve Krujë'yi koruyan gözetleme kalelerinden biriydi. Osmanlılar tarafından alındıktan sonra küçük bir garnizon olarak kullanıldı.",
    why: "Kısa sürede şehirden kaçıp vadide öğle yemeği için. Krujë kadar yoğun değil.",
    tips: "Taksiyle 25–35 dk. Köyden kaleye 10 dakikalık taş patika.",
    wiki: "Petrelë Castle"
  },

  // ───────────── KRUJË ─────────────
  {
    id: "kruja", name: "Krujë Kalesi", local: "Kalaja e Krujës",
    lat: 41.50689, lng: 19.79393, area: "Krujë · 1 sa", score: 5,
    cats: ["top", "daytrip", "ottoman", "view", "free"],
    price: { lek: 0, txt: "Kale ücretsiz" }, hours: "7/24 (müzeler ayrı)", dur: "Yarım gün",
    short: "İskender Bey'in 25 yıl Osmanlı'ya direndiği kale. Arnavutluk'un ulusal sembolü.",
    history: "Gjergj Kastrioti İskender Bey, Osmanlı sarayında yetişip 1443'te safları değiştirdi ve Krujë'yi direnişin merkezi yaptı. Kale 1450'de II. Murad'ın, 1466 ve 1467'de Fatih Sultan Mehmet'in kuşatmalarına dayandı. İskender Bey'in 1468'deki ölümünden 10 yıl sonra, 1478'de Fatih'in son kuşatmasıyla Osmanlı'ya geçti. Osmanlı döneminde Toptani gibi yerel ailelerin merkezi oldu.",
    why: "Arnavutların ulusal kimliğinin doğduğu yer. Aynı hikâyeyi Osmanlı tarafından bildiğimiz için, karşı tarafın anlatısını görmek çok ilginç oluyor.",
    tips: "Taksiyle ≈45–60 dk. 3 kişi için şoförlü yarım gün araç mantıklı. Minibüs alacaksanız 'Fushë-Krujë' değil 'Krujë' yazanına binin.",
    wiki: "Krujë Castle"
  },
  {
    id: "skmuseum", name: "İskender Bey Müzesi", local: "Muzeu Kombëtar Gjergj Kastrioti Skënderbeu",
    lat: 41.50746, lng: 19.79407, area: "Krujë", score: 4,
    cats: ["daytrip", "museum"],
    price: { lek: 500, txt: "≈500 L", note: "kaynaklar 200–500 L arası" }, hours: "≈09:00–17:00, Pzt kapalı olabilir", dur: "1 sa",
    short: "Kale içinde, ortaçağ kalesi görünümünde yapılmış ulusal müze.",
    history: "1982'de açıldı. Binayı Enver Hoca'nın kızı Pranvera Hoca ve Pirro Vaso tasarladı. Kale burcu görünümündeki yapıda İskender Bey dönemi silahlar, belgeler, keçi başlı miğferin kopyası ve büyük tarih tabloları sergileniyor.",
    why: "İskender Bey'in Arnavut milli kimliğinde nasıl bir yere oturtulduğunu görmek için.",
    tips: "Nakit lek gerekli.",
    wiki: "Skanderbeg Museum"
  },
  {
    id: "etno", name: "Krujë Etnografya Müzesi", local: "Muzeu Etnografik",
    lat: 41.5067, lng: 19.79371, area: "Krujë", score: 4,
    cats: ["daytrip", "museum", "ottoman"],
    price: { lek: 400, txt: "≈300–500 L", note: "teyit" }, hours: "≈09:00–17:00", dur: "45 dk",
    short: "1764 tarihli bir Osmanlı konağında, ev içi yaşam ve zanaatlar.",
    history: "18. yüzyıl ortasında zengin bir Krujë ailesi için yapılmış konakta açıldı. Odalar dönemin eşyaları, hamam, yağhane ve dokuma tezgâhlarıyla korunuyor.",
    why: "Osmanlı Balkan konak yaşamını en iyi koruyan yerlerden biri. Çoğu ziyaretçi İskender Bey Müzesi'nden daha çok beğeniyor.",
    tips: "Rehber genelde ücretsiz anlatım yapıyor, bahşiş bırakılabilir.",
    wiki: "Ethnographic Museum (Krujë)"
  },
  {
    id: "dollma", name: "Dollma Tekkesi", local: "Teqeja e Dollmës",
    lat: 41.50608, lng: 19.7928, area: "Krujë", score: 4,
    cats: ["daytrip", "faith", "ottoman"],
    price: { lek: null, txt: "Ücretsiz / bağış" }, hours: "Gündüz", dur: "15 dk",
    short: "Kale içindeki küçük Bektaşi tekkesi ve Dollma ailesinin türbesi.",
    history: "1789'da Krujë'nin Dollma ailesi tarafından yaptırıldı. Ülkedeki çoğu tekke 1967'de yıkılırken bu yapı kale içindeki konumu sayesinde ayakta kaldı. Bektaşi tekkesinin iç düzenini görebileceğiniz nadir yerlerden.",
    why: "Tiran'daki Bektaşi Merkezi'nin tarihsel karşılığı. İkisini aynı gün görmek tam bir 'Bektaşi rotası' oluşturuyor.",
    tips: "Kale yokuşunda. Kapı kapalıysa bekçiye sorun.",
    wiki: "Dollma Tekke"
  },
  {
    id: "bazaar", name: "Krujë Eski Çarşısı", local: "Pazari i Vjetër",
    lat: 41.51039, lng: 19.79188, area: "Krujë", score: 4,
    cats: ["daytrip", "ottoman", "free"],
    price: { lek: 0, txt: "Ücretsiz" }, hours: "≈09:00–18:00", dur: "45 dk",
    short: "Arnavut kilimleri, keçe külahlar (qeleshe), bakır ve antikalarla Osmanlı arastası.",
    history: "Osmanlı döneminden kalan, ahşap saçaklı ve taş döşeli çarşı. Komünist dönemde restore edildi, bugün Arnavutluk'un en bilinen el sanatları çarşısı.",
    why: "Hediyelik alışveriş için ülkenin en iyi yeri. Tiran'dakilerden daha otantik ve ucuz.",
    tips: "Pazarlık normal. Kale girişine giden yol zaten çarşının içinden geçiyor.",
    wiki: "Old Bazaar of Krujë"
  },
  {
    id: "sari", name: "Sarı Saltuk Tekkesi (mağara)", local: "Teqja e Sari Salltikut",
    lat: 41.51744, lng: 19.80214, area: "Krujë dağı", score: 4,
    cats: ["daytrip", "faith", "view"],
    price: { lek: 0, txt: "Ücretsiz" }, hours: "Gündüz (yol hava durumuna bağlı)", dur: "1,5 sa (yol dahil)",
    status: "Kötü havada ya da taş düşmesinde yol kapanabiliyor.",
    short: "Krujë dağında 1.100 m'de, Sarı Saltuk'a adanmış mağara tekke. Manzara olağanüstü.",
    history: "Sarı Saltuk, 13. yüzyılda Anadolu'dan Balkanlar'a geçen ve İslam'ın yayılmasında efsaneleşen bir Türkmen dervişi. Arnavut efsanesine göre Krujë'de kurban istenen prensesi yedi başlı ejderhayı öldürerek kurtardı, sonra bu mağarada inzivaya çekildi. Bektaşiler için önemli bir hac yeri. Her yıl ağustos sonunda binlerce kişi buraya çıkıyor.",
    why: "Türk ve Arnavut ortak hafızasının en ilginç noktalarından biri. Aynı kişi Romanya'dan Bosna'ya pek çok yerde anılıyor.",
    tips: "Krujë'den taksiyle 20 dakikalık virajlı yol, sonra kısa taş patika. Kalabalık değilse sessiz kalın, burası aktif bir ibadet yeri.",
    wiki: "Sarı Saltık"
  },

  // ───────────── DURRËS ─────────────
  {
    id: "amfi", name: "Durrës Amfitiyatrosu", local: "Amfiteatri i Durrësit",
    lat: 41.31212, lng: 19.445, area: "Durrës · 45 dk", score: 4,
    cats: ["daytrip", "museum"],
    price: { lek: 300, txt: "≈300 L" }, hours: "≈09:00–17:00 (kış)", dur: "45 dk",
    short: "2. yüzyıl Roma amfitiyatrosu. Balkanlar'ın en büyüğü, içinde mozaikli bir şapel var.",
    history: "İmparator Hadrian döneminde (2. yy) yaklaşık 15–20 bin kişilik olarak yapıldı. Orta Çağ'da üzerine evler kuruldu ve unutuldu. 1966'da tesadüfen yeniden bulundu. İçindeki küçük Bizans şapelinde nadir duvar mozaikleri var.",
    why: "Durrës (antik Dyrrachium) Arnavutluk'un en eski şehirlerinden; Via Egnatia buradan İstanbul'a uzanıyordu.",
    tips: "Kuzey-Güney otogarından otobüsle ≈1 sa, 200 L. Taksiyle ≈40 dk.",
    wiki: "Durrës Amphitheatre"
  },
  {
    id: "durresmuz", name: "Durrës Arkeoloji Müzesi", local: "Muzeu Arkeologjik Durrës",
    lat: 41.31155, lng: 19.44024, area: "Durrës", score: 3,
    cats: ["daytrip", "museum"],
    price: { lek: 300, txt: "≈300–500 L", note: "yeni açıldı · teyit" }, hours: "Nisan 2026'da yeniden açıldı", dur: "1 sa",
    short: "Ülkenin en büyük arkeoloji müzesi. Nisan 2026'da 3.200 eserle yenilenerek açıldı.",
    history: "2019 depreminde hasar gördü, AB'nin EU4Culture programıyla restore edilip Nisan 2026'da açıldı. 'Durrës Güzeli' mozaiği ve Dyrrachium'dan Roma heykelleri en önemli parçaları.",
    why: "Tiran'daki Tarih Müzesi kapalıyken ülkenin antik çağını en iyi anlatan yer.",
    tips: "Sahilde, amfitiyatroya 5 dakika.",
    wiki: "Archaeological Museum of Durrës"
  },
  {
    id: "venetian", name: "Venedik Kulesi", local: "Torra Veneciane",
    lat: 41.30968, lng: 19.44685, area: "Durrës", score: 2,
    cats: ["daytrip", "food", "free"],
    price: { lek: 0, txt: "Ücretsiz (kafe)" }, hours: "Gündüz-akşam", dur: "20 dk",
    short: "15. yüzyıldan kalma yuvarlak savunma kulesi. Bugün tepesi kafe.",
    history: "Bizans surlarının üzerine Venedikliler döneminde eklenen kule, şehrin limanını korurdu.",
    why: "Deniz kenarında bir kahve molası için.",
    tips: "Sahil yürüyüşüyle birleştirin.",
    wiki: "Venetian Tower of Durrës"
  },
  {
    id: "berat", name: "Berat (UNESCO)", local: "Kalaja e Beratit",
    lat: 40.70807, lng: 19.94553, area: "Berat · 2,5 sa", score: 2,
    cats: ["daytrip", "ottoman"],
    price: { lek: 300, txt: "Kale ≈300 L" }, hours: "Gündüz", dur: "Tam gün (yol 5 sa)",
    status: "Bu kısa gezi için uzak. Ancak Tiran'ı 1 günde bitirdiyseniz düşünün.",
    short: "'Bin pencereli şehir'. Osmanlı evleri ve içinde hâlâ insanların yaşadığı kale.",
    history: "2008'de Gjirokastër ile birlikte UNESCO Dünya Mirası Listesi'ne girdi. Osmanlı dönemi beyaz evler, Bizans kiliseleri ve 16. yy ressamı Onufri'nin müzesi var.",
    why: "Arnavutluk'taki en güzel Osmanlı kasabası.",
    tips: "Otobüsle tek yön ≈2,5 sa. Hava 16:30'da karardığı için 07:30'da çıkmanız gerekir.",
    wiki: "Berat Castle"
  },

  // ───────────── YEME-İÇME ─────────────
  {
    id: "oda", name: "Oda (geleneksel)", local: "Oda Restorant",
    lat: 41.33154, lng: 19.82461, area: "Yeni Pazar · eve 2 dk", score: 4,
    cats: ["food"],
    price: { lek: null, txt: "≈1.200–1.800 L/kişi" }, hours: "Öğle-akşam", dur: "1,5 sa",
    short: "Eski bir Tiran evinde, yer minderli odalarda geleneksel Arnavut mutfağı.",
    history: "Tiran'ın en bilinen geleneksel lokantalarından. Adı 'oda' (Türkçe 'oda' ile aynı) eski evlerdeki misafir odasından geliyor.",
    why: "Fërgesë (biber-peynir-domates güveci), tavë kosi (yoğurtlu kuzu), byrek ve ev rakisi.",
    tips: "Konaklamaya en yakın iyi lokanta. Cumartesi akşamı için rezervasyon yapın.",
    wiki: null
  },
  {
    id: "mullixhiu", name: "Mullixhiu", local: "Mullixhiu",
    lat: 41.31348, lng: 19.81666, area: "Büyük Park girişi", score: 3,
    cats: ["food"],
    price: { lek: null, txt: "≈3.000–5.000 L/kişi" }, hours: "Öğle-akşam", dur: "2 sa",
    short: "Şef Bledar Kola'nın Arnavut köy mutfağını yeniden yorumlayan ünlü restoranı.",
    history: "Kopenhag'daki Noma'da çalışmış şef Bledar Kola tarafından açıldı. Adı 'değirmenci' demek; tahılları kendi değirmeninde öğütüyor.",
    why: "Tiran'ın en çok konuşulan restoranı. Bir akşamlık 'özel yemek' için.",
    tips: "Mutlaka önceden rezervasyon.",
    wiki: null
  },
  {
    id: "komiteti", name: "Komiteti Kafe-Müze", local: "Komiteti – Kafe & Muzeum",
    lat: 41.3233, lng: 19.82259, area: "Kale yakını", score: 3,
    cats: ["food", "communism"],
    price: { lek: null, txt: "İçecek ≈200–500 L" }, hours: "Öğleden gece yarısına", dur: "45 dk",
    short: "Komünist dönem eşyalarıyla döşeli kafe. 20'den fazla çeşit raki.",
    history: "Adı 'parti komitesi'nden geliyor. Duvarlar ve masalar eski radyolar, daktilolar ve rejim döneminden kalma eşyalarla dolu.",
    why: "Kahve ya da raki tadımı için atmosferi en güçlü yer.",
    tips: "Raki tadım tabağı isteyin.",
    wiki: null
  },
  {
    id: "radio", name: "Radio Bar", local: "Radio Bar",
    lat: 41.32014, lng: 19.81501, area: "Blloku", score: 3,
    cats: ["food"],
    price: { lek: null, txt: "İçecek ≈400–700 L" }, hours: "Akşam-gece", dur: "1 sa",
    short: "Eski radyo koleksiyonuyla döşenmiş, bahçeli retro bar.",
    history: "Blloku'nun en köklü barlarından. Komünist dönemden kalma radyolar duvarlarda sergileniyor.",
    why: "Cumartesi akşamı için rahat bir başlangıç.",
    tips: "Era Blloku (yemek) hemen yanında.",
    wiki: null
  },
  {
    id: "era", name: "Era Blloku", local: "Era",
    lat: 41.32012, lng: 19.81467, area: "Blloku", score: 3,
    cats: ["food"],
    price: { lek: null, txt: "≈1.000–1.800 L/kişi" }, hours: "Öğle-gece", dur: "1,5 sa",
    short: "Hem Arnavut hem İtalyan mutfağı sunan, yerlilerin de sevdiği popüler lokanta.",
    history: "Tiran'ın en tanınmış yerel zincirlerinden. Fırın yemekleri ve pizzaları meşhur.",
    why: "Fiyat/performans. 3 kişi için güvenli seçim.",
    tips: "Hafta sonu akşam kalabalık.",
    wiki: null
  },

  // ───────────── PRATİK ─────────────
  {
    id: "airport", name: "Tiran Havalimanı (TIA)", local: "Aeroporti Nënë Tereza · Rinas",
    lat: 41.41152, lng: 19.71331, area: "Rinas · 25–45 dk", score: 0,
    cats: ["practical"],
    price: { lek: 2500, txt: "Taksi ≈2.000–2.500 L" }, hours: "7/24", dur: "—",
    short: "Varış: Cuma 22:40. Dönüş: Pazar gecesi (Pzt 02:35). En geç 00:30'da havalimanında olun.",
    history: "Adını Arnavut asıllı Ana Tereza'dan alıyor. Şehrin 17 km kuzeybatısında, Rinas'ta.",
    why: "Gece varışında 3 kişi için en mantıklısı resmi havalimanı taksisi. Sabit ücret ≈2.000–2.500 L (≈20–25 €), kişi başı ≈700–850 L.",
    tips: "Terminal dışındaki 'taksi?' diye yaklaşanlara binmeyin. LU-NA otobüsü 400 L, Opera arkasına iniyor, oradan Yeni Pazar içinden 10 dk yürüyüş.",
    wiki: null
  },
  {
    id: "luna", name: "LU-NA havalimanı otobüsü durağı", local: "Opera arkası",
    lat: 41.3294, lng: 19.8203, area: "Merkez", score: 0,
    cats: ["practical"],
    price: { lek: 400, txt: "400 L" }, hours: "Saat başı (gece seferleri düzensiz)", dur: "≈30–40 dk",
    short: "Kültür Sarayı'nın arkasından havalimanına saat başı otobüs.",
    history: "Ev sahibinin önerdiği alternatif: otobüs buraya iniyor, buradan Yeni Pazar içinden düz bir yürüyüşle 10 dakikada ev.",
    why: "Gündüz ucuz seçenek. Gece varış ve 02:35 dönüşü için taksi daha güvenli.",
    tips: "Son sefer saatini luna.al'dan teyit edin.",
    wiki: null
  },
  {
    id: "terminal", name: "Kuzey-Güney Otogarı", local: "Terminali i Autobusëve Veri-Jug",
    lat: 41.3448, lng: 19.7885, area: "Kthesa e Kamzës (yaklaşık)", score: 0,
    cats: ["practical"],
    price: { lek: 200, txt: "Krujë ≈200 L · Durrës ≈200 L" }, hours: "≈06:00–21:00", dur: "Merkezden taksi 15 dk",
    short: "Krujë ve Durrës minibüs/otobüsleri buradan kalkıyor.",
    history: "Şehir dışındaki şehirlerarası terminal. Konum yaklaşık; taksiye 'Terminali Veri-Jug' demeniz yeterli.",
    why: "Günübirlik gezide 3 kişi için taksi/şoförlü araç genelde daha pratik, ama otobüs çok ucuz.",
    tips: "Krujë dönüşündeki son minibüs 16:00–18:00 arası, kaçırmayın.",
    wiki: null
  }
];

// Gezi planları — her plan 4 bloktan oluşuyor: Cuma gece, Cumartesi, Pazar, Dönüş
window.PLANS = [
  {
    id: "klasik",
    name: "Klasik Tiran",
    tag: "Önerilen",
    color: "#FF385C",
    desc: "Bütün öne çıkan noktalar. Cumartesi merkez ve komünizm, Pazar bunker ve dağ.",
    days: [
      { d: "Cumartesi 21 Kasım", t: "Merkez yürüyüşü ve komünist geçmiş", steps: [
        ["09:00", "pazar", "Yeni Pazar'da kahvaltı: byrek, kahve"],
        ["09:45", "square", "Skanderbeg Meydanı ve Tarih Müzesi mozaiği"],
        ["10:00", "ethem", "Ethem Bey Camii freskleri"],
        ["10:20", "clock", "Saat Kulesi'ne tırmanış"],
        ["10:45", "bunk2", "Bunk'Art 2 (1–1,5 sa)"],
        ["12:15", "kaplan", "Kaplan Paşa Türbesi"],
        ["12:25", "kalaja", "Tiran Kalesi'nde öğle yemeği"],
        ["13:45", "leaves", "Yapraklar Evi (16:00'da kapanıyor)"],
        ["15:15", "boulevard", "Bulvar boyunca güneye"],
        ["15:50", "pyramid", "Piramit tepesinde gün batımı (≈16:15)"],
        ["16:30", "postbllok", "Postbllok anıtı"],
        ["16:45", "hoxhavilla", "Hoca'nın villası"],
        ["17:00", "teresa", "Ana Tereza Meydanı akşam ışıklarında"],
        ["19:00", "blloku", "Blloku'da akşam yemeği ve gece"]
      ]},
      { d: "Pazar 22 Kasım", t: "Bunker, teleferik ve Bektaşi Merkezi", steps: [
        ["09:00", "bunk1", "Taksiyle Bunk'Art 1 (1,5–2 sa)"],
        ["11:15", "dajtiEks", "Dajti Ekspres teleferiği"],
        ["11:40", "dajti", "Dajti'de manzaralı öğle yemeği"],
        ["14:30", "bektashi", "Dönüşte Bektaşi Dünya Merkezi"],
        ["16:00", "tanners", "Tabakhane Köprüsü"],
        ["16:15", "namazgah", "Namazgah Camii"],
        ["17:00", "pazar", "Yeni Pazar'da hediyelik"],
        ["19:30", "oda", "Oda'da veda yemeği"]
      ]}
    ]
  },
  {
    id: "bektasi",
    name: "Bektaşi & Osmanlı rotası",
    tag: "Türk gezgine özel",
    color: "#008489",
    desc: "Pazar gününü Krujë'ye ayırır: İskender Bey kalesi, Dollma Tekkesi, Sarı Saltuk mağarası. Tiran'da Bektaşi Merkezi ve Osmanlı izleri.",
    days: [
      { d: "Cumartesi 21 Kasım", t: "Tiran'da Osmanlı ve komünizm", steps: [
        ["09:00", "pazar", "Yeni Pazar'da kahvaltı"],
        ["09:45", "ethem", "Ethem Bey Camii"],
        ["10:05", "clock", "Saat Kulesi"],
        ["10:30", "square", "Skanderbeg Meydanı"],
        ["10:45", "bunk2", "Bunk'Art 2"],
        ["12:15", "kalaja", "Tiran Kalesi'nde öğle yemeği"],
        ["13:30", "leaves", "Yapraklar Evi"],
        ["15:00", "bektashi", "Bektaşi Dünya Merkezi ve müzesi (taksi 10 dk)"],
        ["16:30", "pyramid", "Piramit'te alacakaranlık"],
        ["17:00", "postbllok", "Postbllok"],
        ["19:00", "blloku", "Blloku'da akşam"]
      ]},
      { d: "Pazar 22 Kasım", t: "Krujë günü (şoförlü araç ya da taksi)", steps: [
        ["08:30", "kruja", "Tiran'dan çıkış, ≈1 sa yol"],
        ["09:30", "bazaar", "Eski Çarşı'dan kaleye yürüyüş"],
        ["10:00", "skmuseum", "İskender Bey Müzesi"],
        ["11:00", "etno", "Etnografya Müzesi (Osmanlı konağı)"],
        ["11:45", "dollma", "Dollma Bektaşi Tekkesi"],
        ["12:15", "kruja", "Kalede manzaralı öğle yemeği"],
        ["13:30", "sari", "Sarı Saltuk Tekkesi (virajlı yol, 20 dk)"],
        ["15:00", "pazar", "Tiran'a dönüş, Yeni Pazar"],
        ["19:30", "oda", "Oda'da veda yemeği"]
      ]}
    ]
  },
  {
    id: "komunizm",
    name: "Soğuk Savaş derinlemesine",
    tag: "Tarih meraklısına",
    color: "#484848",
    desc: "Arnavutluk'un 1944–1991 hikâyesine odaklanan iki gün: iki bunker, gizli polis, Blloku, Şehitlik.",
    days: [
      { d: "Cumartesi 21 Kasım", t: "Sigurimi'nin izinde", steps: [
        ["09:00", "nhm", "Tarih Müzesi mozaiği"],
        ["09:15", "opera", "Kültür Sarayı: Sovyet hediyesi"],
        ["09:30", "bunk2", "Bunk'Art 2"],
        ["11:00", "leaves", "Yapraklar Evi"],
        ["12:30", "komiteti", "Komiteti'de öğle arası"],
        ["13:30", "gallery", "Sanat Galerisi (açıksa)"],
        ["14:00", "pyramid", "Piramit"],
        ["14:30", "postbllok", "Postbllok"],
        ["14:45", "hoxhavilla", "Hoca'nın villası"],
        ["15:00", "blloku", "Blloku yürüyüşü"],
        ["16:00", "martyrs", "Şehitlik ve Ana Arnavutluk heykelinde gün batımı"],
        ["19:00", "radio", "Radio Bar"]
      ]},
      { d: "Pazar 22 Kasım", t: "Atom sığınağı ve dağ", steps: [
        ["09:00", "bunk1", "Bunk'Art 1 (rahat 2 sa)"],
        ["11:15", "dajtiEks", "Dajti Ekspres"],
        ["11:40", "dajti", "Dajti'de öğle"],
        ["14:30", "skytower", "Sky Tower'da kahve"],
        ["16:00", "park", "Büyük Park'ta yürüyüş"],
        ["19:30", "era", "Era Blloku'da veda yemeği"]
      ]}
    ]
  },
  {
    id: "durres",
    name: "Tiran + Durrës (deniz & Roma)",
    tag: "Alternatif",
    color: "#E07912",
    desc: "Cumartesi Tiran'ın özü, Pazar Adriyatik kıyısında Roma amfitiyatrosu ve yeni açılan arkeoloji müzesi.",
    days: [
      { d: "Cumartesi 21 Kasım", t: "Tiran'ın özü", steps: [
        ["09:00", "pazar", "Yeni Pazar'da kahvaltı"],
        ["09:45", "square", "Skanderbeg Meydanı"],
        ["10:00", "ethem", "Ethem Bey Camii"],
        ["10:30", "bunk2", "Bunk'Art 2"],
        ["12:00", "kalaja", "Kale'de öğle"],
        ["13:30", "leaves", "Yapraklar Evi"],
        ["15:00", "bektashi", "Bektaşi Merkezi"],
        ["16:15", "pyramid", "Piramit"],
        ["17:00", "postbllok", "Postbllok"],
        ["19:00", "blloku", "Blloku"]
      ]},
      { d: "Pazar 22 Kasım", t: "Durrës günü", steps: [
        ["09:00", "amfi", "Otobüs/taksi ile Durrës (≈45–60 dk)"],
        ["10:15", "amfi", "Roma Amfitiyatrosu"],
        ["11:15", "durresmuz", "Arkeoloji Müzesi"],
        ["12:30", "venetian", "Venedik Kulesi'nde kahve, sahilde balık"],
        ["15:00", "pazar", "Tiran'a dönüş"],
        ["19:30", "oda", "Oda'da veda yemeği"]
      ]}
    ]
  },
  {
    id: "yagmur",
    name: "Yağmurlu gün planı",
    tag: "B planı",
    color: "#5B5BD6",
    desc: "Hava bozarsa kapalı mekânlar ağırlıklı, yürüme mesafeleri kısa. Dajti iptal.",
    days: [
      { d: "Cumartesi 21 Kasım", t: "Kapalı mekânlar", steps: [
        ["09:30", "ethem", "Ethem Bey Camii"],
        ["10:00", "bunk2", "Bunk'Art 2"],
        ["11:30", "leaves", "Yapraklar Evi"],
        ["13:00", "kalaja", "Kale'de öğle"],
        ["14:30", "archaeo", "Arkeoloji Müzesi"],
        ["16:00", "komiteti", "Komiteti'de raki tadımı"],
        ["19:00", "blloku", "Blloku"]
      ]},
      { d: "Pazar 22 Kasım", t: "Bunker + Bektaşi + manzara barı", steps: [
        ["09:30", "bunk1", "Bunk'Art 1 (yeraltında yağmur fark etmez)"],
        ["12:30", "bektashi", "Bektaşi Merkezi"],
        ["14:00", "pazar", "Yeni Pazar'da öğle"],
        ["16:00", "skytower", "Sky Tower'da gün batımı"],
        ["19:30", "oda", "Veda yemeği"]
      ]}
    ]
  }
];

// Ortak bloklar (her planda aynı)
window.FIXED = {
  arrival: [
    ["22:40", "airport", "Uçak iniyor (yerel saat, TR'den 2 saat geri)"],
    ["23:15", "airport", "Resmi taksi ≈2.000–2.500 L, 25–45 dk"],
    ["23:50", "home", "Konaklamaya giriş"],
    ["00:15", "pazar", "Acıktıysanız yakında byrek/gece büfesi"]
  ],
  departure: [
    ["11:00", "home", "Konaklamadan çıkış (ilan: 20–22 Kas). Bagajlar için aşağıdaki nota bakın"],
    ["22:30", "home", "Bagajları alın, son kontrol"],
    ["23:30", "airport", "Taksi ile havalimanına (önceden ayarlayın)"],
    ["00:15", "airport", "Havalimanında olun"],
    ["02:35", "airport", "PC284 kalkış · İstanbul'a ≈06:15 (TR)"]
  ]
};

// Tarih zaman çizelgesi
window.TIMELINE = [
  ["MÖ 4.–1. yy", "İlirya kabileleri bölgede yaşıyor. Durrës (Epidamnos/Dyrrachium) önemli bir liman."],
  ["2. yy", "Roma döneminde Via Egnatia, Durrës'ü Selanik üzerinden İstanbul'a bağlıyor. Durrës amfitiyatrosu yapılıyor."],
  ["3.–6. yy", "Tiran bölgesinde Roma villası ve bazilika (Tiran Mozaiği). Bizans kalesi (Justinianus)."],
  ["1443–1468", "İskender Bey Krujë'de Osmanlı'ya karşı direniyor. 1478'de Krujë Fatih'e geçiyor."],
  ["1614", "Süleyman Paşa Bargjini cami, fırın ve hamam yaptırıyor: Tiran şehri kuruluyor."],
  ["1789–1823", "Ethem Bey Camii ve Saat Kulesi yapılıyor. Toptani ailesi şehre hâkim."],
  ["1912", "Arnavutluk Avlonya'da bağımsızlığını ilan ediyor."],
  ["1920", "Lushnjë Kongresi Tiran'ı başkent seçiyor."],
  ["1925", "Türkiye'de tekkeler kapatılıyor, Bektaşi merkezi Tiran'a taşınıyor. Ahmet Zogu iktidarda (1928'de kral)."],
  ["1928–1941", "İtalyan mimarlar bulvarı, bakanlıkları ve Ana Tereza Meydanı'nı tasarlıyor. 1939'da İtalya işgali."],
  ["1944", "Enver Hoca liderliğindeki komünist partizanlar iktidarda (17 Kasım Tiran'ın kurtuluşu)."],
  ["1948 / 1961 / 1978", "Sırasıyla Yugoslavya, SSCB ve Çin'le bağlar kopuyor. Ülke tamamen yalnızlaşıyor."],
  ["1967", "Tüm dinler yasaklanıyor, 'dünyanın ilk ateist devleti' ilanı. Cami, kilise ve tekkeler kapatılıyor."],
  ["1970'ler–80'ler", "On binlerce bunker inşa ediliyor. Bunk'Art 1 (1972–78) ve 2 (1981–86) yapılıyor."],
  ["1985", "Enver Hoca ölüyor. 1988'de Piramit onun anıt-müzesi olarak açılıyor."],
  ["1991", "Öğrenci eylemleri. 20 Şubat'ta Hoca heykeli devriliyor. Din serbest, Blloku halka açılıyor."],
  ["1997", "Saadet zinciri (piramit) şirketlerinin çöküşü, kısa süreli kaos."],
  ["2000–2011", "Belediye Başkanı Edi Rama gri blokları rengârenk boyatıyor."],
  ["2014–2017", "Bunk'Art 1–2 ve Yapraklar Evi müze oluyor. Meydan yayalaştırılıyor."],
  ["2023–2026", "Piramit TUMO olarak açılıyor (2023), Namazgah Camii açılıyor (2024), Durrës Arkeoloji Müzesi yeniden açılıyor (2026)."]
];
