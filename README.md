# 🏠 FamilyWeek Ultimate 2026

**Inteligentná rodinná PWA aplikácia** pre plánovanie jedál, správu nákupov, rozpočtu a úloh.

---

## 🚀 Rýchly štart

### Možnosť 1 — Priamo v prehliadači
Otvor `index.html` v akomkoľvek modernom prehliadači (Chrome, Firefox, Safari, Edge).

### Možnosť 2 — Lokálny server (odporúčané pre PWA funkcie)
```bash
# Python 3
python3 -m http.server 8080

# Node.js
npx serve .

# PHP
php -S localhost:8080
```
Potom otvor `http://localhost:8080` v prehliadači.

### Možnosť 3 — Deploy na web
Nahraj všetky súbory na akýkoľvek statický hosting:
- **Netlify** — pretiahnite priečinok na netlify.com/drop
- **Vercel** — `vercel deploy`
- **GitHub Pages** — nahraj do repozitára
- **Vlastný server** — nakopíruj do `/var/www/html`

---

## 📁 Štruktúra projektu

```
FamilyWeek-Ultimate-2026/
├── index.html          ← Celá aplikácia (single-file)
├── manifest.json       ← PWA manifest
├── sw.js               ← Service Worker (offline podpora)
├── icons/
│   ├── icon-192.png    ← PWA ikona (192×192)
│   ├── icon-512.png    ← PWA ikona (512×512)
│   ├── icon-192.svg    ← SVG ikona (zdrojová)
│   └── icon-512.svg    ← SVG ikona (zdrojová)
└── README.md           ← Tento súbor
```

---

## ✨ Funkcie

### Základné moduly
| Modul | Popis |
|-------|-------|
| 🏠 **Dashboard** | Privítanie, hero karta s aktuálnym jedlom, mini kalendár, budget tracker |
| 🗓 **Plánovač** | 7 dní × 5 jedál, Rodina/Bábätko režim, Swap dní, 2-day logika |
| 🛒 **Nákup** | Auto-generovanie zo plánu, odčítanie špajze, WhatsApp export |
| 👨‍👩‍👧 **Rodina** | Členovia, prideľovanie úloh, body, leaderboard |
| ⚙️ **Nastavenia** | Témy, farby, font, rozpočet, export JSON |

### 🆕 Game-changer funkcie (v2.0)
| Funkcia | Popis |
|---------|-------|
| 🔥 **Streak systém** | Denné plánkovanie buduje streak, odomykáš odznaky (3d → 7d → 30d → 100d) |
| ⚡ **Quick Log** | Kontextový rýchly zápis – jedlo/výdavok/úloha/rozmrazenie v 3 sekundách |
| 📊 **Budget Insights** | Graf 7 dní, rozdelenie podľa kategórie (potraviny/reštaurácia/drogéria...) |
| 🥗 **Výživa** | SVG kruhy s týždenným kcal/bielkoviny/sacharidy/tuky, nastaviteľné ciele |
| 👥 **Rodinný modul** | Prideľovanie úloh členom, bodový systém, leaderboard |
| 📅 **Mini kalendár** | Vizuálne pokrytie týždňa s percentuálnym badge |

---

## 💾 Dáta & Súkromie

- Všetky dáta sú uložené **lokálne** v `localStorage` vášho prehliadača
- Žiadne dáta sa neposielajú na žiadne servery (pokiaľ nezapnete Cloud Sync)
- Export dát: Nastavenia → Export dát (JSON záloha)
- Cloud Sync (Supabase): voliteľné, vypnuté štandardne

---

## 🔧 Technické detaily

- **Technológia:** Vanilla HTML/CSS/JS (ES6+), žiadne frameworky
- **Závislosti:** Google Fonts (Nunito + Syne) — len pre písmo
- **Veľkosť:** ~76 KB (celá appka v jednom súbore)
- **PWA:** Service Worker, Web App Manifest, offline podpora
- **Kompatibilita:** Chrome 80+, Firefox 75+, Safari 14+, Edge 80+
- **Mobilné:** Optimalizované pre iOS a Android

---

## 🎨 Témy

| Téma | Popis |
|------|-------|
| 🌙 Tmavá | Predvolená, glassmorphism |
| ☀️ Svetlá | Svetlé pozadie |
| 🌿 Príroda | Zelený akcent, tmavé pozadie |
| ⚫ OLED | Čisto čierne pozadie, šetrí batériu |

Akcentová farba: 8 možností (fialová, zlatá, červená, zelená, modrá, ružová, tyrkysová, oranžová)

---

## 📲 Inštalácia ako PWA

1. Otvor appku v Chrome/Edge na mobile alebo PC
2. Klikni na banner „Nainštaluj appku" v aplikácii, alebo
3. V Chrome: tri bodky → „Pridať na plochu" / „Nainštalovať aplikáciu"
4. Na iOS Safari: Zdieľať → „Pridať na plochu domovskú obrazovku"

---

## 🔄 Aktualizácia

Nahrad `index.html` novou verziou. Service Worker automaticky aktualizuje cache pri ďalšej návšteve.

---

## 📝 Changelog

### v3.0.0
- 🔥 Streak systém s odznakmi
- ⚡ Quick Log (floating kontextový zápis)
- 📊 Budget Insights s grafom výdavkov
- 🥗 Sledovanie výživy (kcal, bielkoviny, sacharidy, tuky)
- 👥 Rodinný modul s leaderboardom a bodovým systémom
- 📅 Mini kalendár s pokrytím týždňa
- 🔴 Badge na nákupnej záložke
- ➕ Kategórie výdavkov

### v1.0.0
- Počiatočné vydanie
- Onboarding, Dashboard, Plánovač, Nákup, Nastavenia

---

*Made with ❤️ for families · FamilyWeek Ultimate 2026*
