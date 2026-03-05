# 🏗️ Yıldırım İnşaat Hafriyat — Kurumsal Web Sitesi

> **Kayseri'nin güvenilir kepçe kiralama, hafriyat, demir & kalıp hizmetleri firması için geliştirilen modern, tek sayfalık (SPA) kurumsal web sitesi.**

🔗 **Canlı Site:** [yildiriminsaathafriyat.com](https://yildiriminsaathafriyat.com)

---

## 📸 Önizleme

| Masaüstü | Mobil |
|----------|-------|
| ![Desktop](https://yildiriminsaathafriyat.com/og-image.jpg) | Responsive tasarım — tüm cihazlarda sorunsuz çalışır |

---

## ✨ Özellikler

- **Tek Sayfa Uygulama (SPA)** — Tüm bölümler tek sayfada, akıcı scroll deneyimi
- **Tam Responsive** — Mobil, tablet ve masaüstünde mükemmel görünüm
- **AOS Animasyonları** — Scroll ile tetiklenen modern giriş animasyonları
- **Swiper Slider** — Hero bölümünde otomatik geçişli slider
- **Firebase Entegrasyonu** — Müşteri yorumları Firestore veritabanından dinamik olarak çekilir
- **WhatsApp Entegrasyonu** — Tek tıkla WhatsApp üzerinden iletişim
- **SEO Optimizasyonu** — Open Graph, meta etiketleri, sitemap, robots.txt
- **Yerel SEO** — Kayseri odaklı geo meta etiketleri

---

## 🛠️ Teknoloji Yığını

| Kategori | Teknoloji |
|----------|-----------|
| **Framework** | React 19 |
| **Build Tool** | Vite 7 |
| **Styling** | Tailwind CSS 4 |
| **Animasyon** | AOS (Animate on Scroll) |
| **Slider** | Swiper.js |
| **Backend/DB** | Firebase Firestore |
| **İkonlar** | React Icons |
| **Deployment** | Canlı sunucu |

---

## 📁 Proje Yapısı

```
yildirim-insaat/
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   └── web.config
├── src/
│   ├── App.jsx              # Ana uygulama bileşeni
│   ├── main.jsx             # Giriş noktası
│   ├── index.css            # Global stiller
│   ├── assets/images/       # Görseller (kepçe, demir, logo, slogan)
│   ├── components/
│   │   ├── Navbar.jsx       # Navigasyon çubuğu
│   │   ├── Hero.jsx         # Ana slider bölümü
│   │   ├── About.jsx        # Hakkımızda & istatistikler
│   │   ├── OurMachine.jsx   # Makine tanıtımı (Hidromek HMK 102B)
│   │   ├── DemirKalip.jsx   # Demir & kalıp hizmetleri
│   │   ├── Services.jsx     # Tüm hizmetler
│   │   ├── WhyUs.jsx        # Neden biz?
│   │   ├── Reviews.jsx      # Müşteri yorumları (Firebase)
│   │   ├── Contact.jsx      # İletişim bilgileri
│   │   ├── Footer.jsx       # Alt bilgi
│   │   └── WhatsAppButton.jsx # Sabit WhatsApp butonu
│   ├── firebase/
│   │   └── firebaseConfig.js # Firebase yapılandırması
│   └── hooks/
│       └── useReviews.js    # Yorumları çeken custom hook
├── index.html               # HTML şablonu (SEO meta etiketleri)
├── vite.config.js           # Vite yapılandırması
├── package.json
├── .env.example             # Ortam değişkenleri şablonu
└── .gitignore
```

---

## 🚀 Kurulum & Çalıştırma

### Gereksinimler
- **Node.js** 18+
- **npm** veya **yarn**

### 1. Repoyu klonla
```bash
git clone https://github.com/esmasila/yildirim-insaat.git
cd yildirim-insaat
```

### 2. Bağımlılıkları yükle
```bash
npm install
```

### 3. Ortam değişkenlerini ayarla
```bash
cp .env.example .env
```
`.env` dosyasını kendi Firebase ve WhatsApp bilgilerinle doldur.

### 4. Geliştirme sunucusunu başlat
```bash
npm run dev
```
Tarayıcıda `http://localhost:5173` adresinde açılacaktır.

### 5. Production build
```bash
npm run build
```
Build çıktısı `dist/` klasörüne oluşturulur.

---

## 🔒 Ortam Değişkenleri

Proje, Firebase ve WhatsApp entegrasyonu için ortam değişkenleri kullanır. **Asla `.env` dosyasını repoya commit etmeyin.** Şablon için `.env.example` dosyasına bakın:

| Değişken | Açıklama |
|----------|----------|
| `VITE_FIREBASE_API_KEY` | Firebase API anahtarı |
| `VITE_FIREBASE_AUTH_DOMAIN` | Firebase auth domain |
| `VITE_FIREBASE_PROJECT_ID` | Firebase proje ID |
| `VITE_FIREBASE_STORAGE_BUCKET` | Firebase storage bucket |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Firebase messaging sender ID |
| `VITE_FIREBASE_APP_ID` | Firebase app ID |
| `VITE_WHATSAPP_NUMBER` | WhatsApp telefon numarası |

---

## 📄 Lisans

Bu proje **Yıldırım İnşaat Hafriyat** firması için özel olarak geliştirilmiştir.

---

<p align="center">
  <strong>Yıldırım İnşaat Hafriyat</strong><br>
  📍 Kayseri, Türkiye<br>
  📞 0537 729 06 51<br>
  🌐 <a href="https://yildiriminsaathafriyat.com">yildiriminsaathafriyat.com</a>
</p>
