
# 🚀 MZKYZAK-MD (Version 10.0)
### whatsaap Bot mzkyzak

<p align="center">
  <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-%3E%3D22.0.0-brightgreen.svg?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js"></a>
  <a href="https://github.com/adiwajshing/Baileys"><img src="https://img.shields.io/badge/Engine-Ourin--Baileys-blue.svg?style=for-the-badge&logo=whatsapp&logoColor=white" alt="Baileys"></a>
  <a href="#"><img src="https://img.shields.io/badge/Version-10.0.0--ULTRA-orange.svg?style=for-the-badge" alt="Version"></a>
  <a href="https://whatsapp.com/channel/0029VbB37bgBfxoAmAlsgE0t"><img src="https://img.shields.io/badge/WhatsApp-Channel%20Resmi-25D366.svg?style=for-the-badge&logo=whatsapp&logoColor=white" alt="WhatsApp Channel"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-ISC-red.svg?style=for-the-badge" alt="License"></a>
</p>

<p align="center">
  <b>MZKYZAK-MD Version 10.0</b> adalah script numpang, mainan/fitur tercanggih yang belum lu tahu dan di WhatsApp Bot Multi-Device paling modern, super lengkap, dan stabil dengan arsitektur <b>Plugin Modular</b> & <b>Dynamic Case Handler System</b>. Dirancang khusus untuk <b>Kecepatan Respon Tinggi</b>, <b>Kemudahan Penggunaan</b>, serta daya tarik visual <b>UI Interaktif (Buttons, Carousel, Native Flow, Voice Note Allmenu & Live Weather)</b>.
</p>

---

## 🌟 Mengapa Harus Memilih MZKYZAK-MD Version 10?

| Fitur / Keunggulan | Deskripsi & Nilai Tambah |
| :--- | :--- |
| ⚡ **Fast & Ultra Stable** | Respon super cepat bebas delay dengan manajemen queue memori efisien (`p-queue` & `lru-cache`). |
| 🧩 **Modular Plugin & Hot Reload** | Fitur bertambah tanpa ribet! Edit atau tambah file plugin di `./plugins/`, bot akan me-reload otomatis tanpa restart. |
| 🤖 **AI Persona & Groq Whisper** | Didukung Google Gemini AI & Persona **Bella Clarissa** (chat seperti manusia), plus Voice Transcribe via Groq. |
| 🎨 **Tampilan UI Menawan** | Tampilan menu dengan Live Weather Header (API Open-Meteo), Native Flow Buttons, Gambar/Video GIF, & Audio PTT. |
| ☁️ **Automated VPS & Panel** | Buat server Pterodactyl, Admin Panel, dan atur Cloud VPS (Linode & DigitalOcean) hanya via chat WA. |
| 🛍️ **Bot Toko & QRIS Dynamic** | Lengkap dengan sistem toko otomatis, daftar produk, order system, payment QRIS, dan pembuatan invoice image. |
| 🛡️ **12+ Layer Group Defense** | AntiLink, AntiLinkGc, AntiTagSW, AntiViewOnce, AntiDelete, AntiToxic (Auto Warn/Kick), AntiBot, AntiCall. |
| ⚔️ **Full RPG Game & Clan War** | Petualangan RPG (Mining, Fishing, Dungeon, Crafting) & Sistem Perang Antar Clan berbasis Database. |
| 📱 **Lintas Platform (Termux & VPS)** | Support 100% di Ubuntu/Debian Linux, Windows PowerShell, Termux Android, & Pterodactyl Panel. |

---

## 📂 Struktur Direktori Proyek

```text
mzkyzakk/
├── 📁 assets/                 # Asset Media (Gambar, Video GIF, Audio MP3, Font TTF)
│   ├── 📁 audio/              # Sound effect & voice note allmenu (.mp3)
│   ├── 📁 image/              # Banner menu, levelup, rules, rpg, store, win
│   └── 📁 video/              # Video gif playback interaktif (.mp4)
├── 📁 case/                   # Dynamic Case Command Handler System
│   └── mzkyzak.js          # Case command handler (cping, lcase, lplugin)
├── 📄 config.js               # Pusat Konfigurasi Utama (Owner, Bot, API Keys, Prompts)
├── 📁 data/                   # Data JSON statis & sistem tambahan
├── 📁 database/               # Storage Database Utama (Main DB, User Profiles, Settings)
├── 📄 index.js                # Core Entry Point & Inisialisasi Baileys Engine
├── 📄 package.json            # Daftar Dependensi & Script Manajemen
├── 📁 plugins/                # Modular Plugin System (34+ Kategori Fitur)
│   ├── 📁 ai/                 # Gemini, AutoAI, DeepSeek, Image Generator
│   ├── 📁 anime/              # Anime Search, Waifu, Otakudesu, Manga
│   ├── 📁 asupan/             # Video & Media Hiburan Asupan
│   ├── 📁 canvas/             # Canvas Editor, Brat Canvas, Rank Cards
│   ├── 📁 cek/                # Cek sifat, khodam, ganteng, cantik, hoki
│   ├── 📁 clan/               # Sistem Clan RPG & Clan War
│   ├── 📁 convert/            # Converter Media (Sticker, MP3, VN, Image, GIF)
│   ├── 📁 download/           # TikTok, YouTube, IG, FB, Spotify, CapCut, dll
│   ├── 📁 ephoto/             # Ephoto360 & TextPro Logo Generator
│   ├── 📁 fun/                # Hiburan, Simi Chat, Truth or Dare, Flirt
│   ├── 📁 game/               # Tebak Gambar, Catur, TicTacToe, Werewolf, Slot
│   ├── 📁 group/              # Manajemen & Sistem Keamanan Grup WA
│   ├── 📁 info/               # Bot Info, Speedtest, Latency, Ping, Runtime
│   ├── 📁 islamic/ & religi/  # Al-Quran, Audio Murattal, Jadwal Sholat
│   ├── 📁 jpm/                # Jasa Promosi / Broadcast Massal
│   ├── 📁 main/               # Menu Utama, Allmenu, Help, Rules, Donate
│   ├── 📁 media/              # Audio Effects (Bass, Slow, Nightcore, Reverse)
│   ├── 📁 nsfw/               # Content Restricted (Toggleable)
│   ├── 📁 owner/              # Command Khusus Owner (Eval, Exec, BC, Deploy)
│   ├── 📁 panel/              # Pterodactyl Panel Server Manager
│   ├── 📁 primbon/            # Ramalan Primbon Jawa, Zodiak, Arti Nama
│   ├── 📁 pushkontak/         # Push Kontak Grup & VCF Exporter
│   ├── 📁 random/             # Random Meme, Quotes, Facts, Cosplay
│   ├── 📁 rpg/                # Mining, Fishing, Adventure, Dungeon, Shop
│   ├── 📁 search/             # Google, Wikipedia, Pinterest, Lyrics, BMKG
│   ├── 📁 stalker/            # IG Stalk, TikTok Stalk, MLBB Stalk, FF Stalk
│   ├── 📁 sticker/            # Sticker Maker, SWM, Telegram Sticker Importer
│   ├── 📁 store/              # Sistem Bot Toko (Products, QRIS, Invoice)
│   ├── 📁 tools/              # Tourl (15+ Host), OCR, SSWeb, TempMail, Transcribe
│   ├── 📁 tts/                # Text-To-Speech (Elon Musk, Anime, Gtts)
│   ├── 📁 user/               # User Profile, Level, XP, Limit, Registration
│   ├── 📁 utility/            # Kalkulator, Translator, Timezone
│   └── 📁 vps/                # Linode & DigitalOcean VPS Management
├── 📁 session/                # Sesi Autentikasi WhatsApp (Baileys Session)
├── 📁 src/                    # Library Internal Core & Helper Functions
└── 📁 temp/                   # Direktori Temporary Pemrosesan File
```

---

## 📋 Daftar Fitur Lengkap (Features List v10.0)

Bot ini dilengkapi dengan **300+ Command** yang terbagi ke dalam 34+ Kategori Plugin & Case Handler. Berikut adalah rincian lengkapnya:

### 🏠 1. MAIN & INFO MENU
- `.menu` / `.help` — Menampilkan menu utama dengan pilihan tampilan interaktif.
- `.allmenu` / `.fullmenu` — Menampilkan seluruh command bot per kategori lengkap dengan simbol akses.
- `.botstatus` — Menampilkan penggunaan RAM, CPU, Uptime, dan total pengguna terdaftar.
- `.ping` / `.speed` — Mengukur kecepatan respon bot dalam milidetik (ms).
- `.cping` — Cek latency & performa sistem case internal.
- `.runtime` — Menampilkan durasi bot telah beroperasi tanpa henti.
- `.owner` / `.developer` — Menampilkan kartu kontak resmi owner bot.
- `.rules` — Menampilkan aturan main dan ketentuan penggunaan bot.
- `.donasi` — Informasi metode donasi dukungan pengembangan bot.
- `.listallplugin` — Menampilkan daftar seluruh file plugin yang aktif.
- `.listallcase` — Menampilkan daftar seluruh case command internal.

### 🤖 2. ARTIFICIAL INTELLIGENCE (AI)
- `.ai <pertanyaan>` — Tanya jawab cerdas berbasis Google Gemini AI.
- `.autoai <on/off>` — Mengaktifkan mode AI otomatis **Bella Clarissa** (Respon alami feminin).
- `.gpt4` / `.deepseek` — Model AI generatif tambahan untuk koding & analisis kompleks.
- `.remini` / `.hd` — Meningkatkan ketajaman & resolusi foto buram menjadi HD.
- `.removebg` — Hapus background foto secara otomatis dengan hasil rapi.
- `.promptgen` — Membuat deskripsi prompt gambar secara otomatis.
- `.videotranscribe` — Transkripsi audio/video menjadi teks menggunakan Groq Whisper.
- `.bratai` — Teks ke stiker bertema tulisan canvas Brat.

### 📥 3. DOWNLOADER SYSTEM
- `.tiktok <url>` / `.tt` — Download video TikTok tanpa watermark / MP3 audio.
- `.play <judul>` — Cari dan download lagu MP3 dari YouTube dengan thumbnail.
- `.ytmp3 <url>` — Convert dan download video YouTube menjadi audio MP3.
- `.ytmp4 <url>` — Download video YouTube kualitas HD.
- `.instagram <url>` / `.ig` — Download foto, video Reels, & IGTV Instagram.
- `.facebook <url>` / `.fb` — Download video Facebook kualitas HD/SD.
- `.spotify <url>` — Download lagu dari link album/track Spotify.
- `.soundcloud <url>` — Download musik dari SoundCloud.
- `.mediafire <url>` — Download file langsung dari link MediaFire.
- `.gdrive <url>` — Download file publik dari Google Drive.
- `.capcut <url>` — Download video template CapCut tanpa watermark.
- `.pinterest <url>` — Download gambar atau video dari Pinterest.
- `.douyin` / `.rednote` — Downloader media sosial Asia (Douyin & Xiaohongshu).

### 👥 4. GROUP MANAGEMENT & PROTECTION
- `.hidetag <teks>` — Sebutan tersembunyi ke seluruh anggota grup.
- `.tagall` — Tag seluruh anggota grup satu per satu.
- `.linkgroup` / `.linkgc` — Ambil link undangan grup WhatsApp.
- `.revoke` — Tarik dan perbarui link undangan grup.
- `.kick @user` — Mengeluarkan anggota dari grup.
- `.add <nomor>` — Memasukkan anggota baru ke grup.
- `.promote @user` / `.demote @user` — Naik/turunkan jabatan Admin grup.
- `.setname` / `.setdesc` — Ganti nama atau deskripsi grup.
- `.setppgc` — Ganti foto profil grup.
- `.botmode <md/cpanel/store/pushkontak>` — Ubah mode batasan kategori bot di grup.
- `.antilink <on/off>` — Hapus pesan & kick anggota yang kirim link biasa/WA.
- `.antiviewonce` — Otomatis tampilkan ulang media Sekali Lihat (View Once).
- `.antidelete` — Otomatis deteksi & tampilkan kembali pesan yang dihapus.
- `.antitoxic` — Peringatan bertahap bagi anggota yang berkata kasar (Auto Kick/Warn).
- `.antibot` — Deteksi & kick bot WhatsApp lain yang masuk grup.
- `.antitagsw` — Proteksi tag status WhatsApp anggota grup.

### 🖼️ 5. STICKER & CANVAS
- `.sticker` / `.s` — Ubah gambar/video pendek menjadi stiker WhatsApp.
- `.swm <pack\|author>` — Buat stiker dengan watermark custom.
- `.toimg` — Convert stiker statis menjadi foto JPEG.
- `.tovideo` — Convert stiker bergerak (GIF) menjadi video MP4.
- `.brat <teks>` — Generator stiker tulisan gaya Brat Canvas.
- `.qc <teks>` — Buat stiker Quote Chat ala tampilan Telegram.
- `.smeme <teks atas\|teks bawah>` — Buat stiker meme kustom.
- `.welcomecard` — Kartu ucapan selamat datang untuk anggota baru.

### 🛠️ 6. TOOLS & UTILITIES
- `.tourl` — Upload gambar/file ke **15+ Cloud Hosting** (ImgDrop, Catbox, Litterbox, Qu.ax, Uguu, Top4top, Pone, Kappa, TmpFiles, Upload.ee, 8upload, Leopard, Termai, Nekohime, Faddlaninco).
- `.ocr` — Ekstraksi teks dari gambar (Gambar ke Teks).
- `.ssweb <url>` — Screenshot tampilan penuh halaman web.
- `.tempmail` — Buat inbox email sementara untuk pendaftaran/verifikasi.
- `.sendngl <username\|pesan>` — Kirim pesan anonim ke link NGL.
- `.nulis <teks>` — Ubah teks menjadi tulisan tangan di lembar kertas buku.
- `.nikparser <nik>` — Analisis data tanggal lahir, gender, & asal daerah dari NIK KTP.
- `.hdvid` — Tingkatkan kualitas & ketajaman file video.
- `.invoicemaker` — Buat invoice tagihan transaksi otomatis format gambar.

### 🎮 7. GAMES & INTERACTIVE
- **Tebak-Tebakan**: Tebak Gambar, Tebak Kata, Tebak Kalimat, Tebak Lagu, Tebak Kimia, Tebak Bangunan, Asah Otak.
- **Game Multiplayer**: Catur (Chess WA), TicTacToe, Werewolf Game.
- **Hiburan & Kasino**: Quiz Slot, Casino, Math Quiz, Uno Game, Sudoku.

### ⚔️ 8. FULL RPG SYSTEM & CLAN WAR
- **RPG System**: `.adventure`, `.mining`, `.fishing`, `.hunt`, `.dungeon`, `.inventory`, `.bank`, `.shop`, `.heal`, `.feed`, `.crafting`, `.daily`.
- **Clan System**: `.createclan`, `.joinclan`, `.clanwar`, `.claninfo`, `.clanlevel`, `.clanshop`.

### 📊 9. USER, PROFILE & ECONOMY
- `.profile` — Kartu identitas pengguna (Level, XP, Koin, Limit, Status Role).
- `.level` / `.rank` — Papan peringkat pengguna terkaya & level tertinggi.
- `.daftar <nama.umur>` — Sistem registrasi anggota bot.
- `.unreg` — Batal pendaftaran akun bot.
- `.daily` — Klaim koin, energi, & XP harian.
- `.transfer` — Transfer koin/limit ke sesama pengguna.

### 🏪 10. STORE BOT SYSTEM
- `.listproduk` — Katalog daftar barang/jasa toko.
- `.addproduk` / `.delproduk` — Tambah & hapus produk dagangan.
- `.qris` — Generator pembayaran QRIS otomatis.
- `.order` / `.testi` — Sistem pemesanan dan bukti testimoni.

### 🖥️ 11. PANEL PTERODACTYL & VPS CLOUD
- `.addpanel` / `.createadmin` — Buat akun & server Pterodactyl otomatis.
- `.listsrv` / `.delsrv` — Manajemen server di Pterodactyl Panel.
- `.linode` / `.digitalocean` — Deployment VPS Cloud via API key.

### 📢 12. JPM & PUSH KONTAK
- `.jpm <pesan>` — Jasa Promosi Massal ke seluruh grup terdaftar.
- `.jpmhidetag` — JPM disertai fitur sebutan hidetag.
- `.pushkontak <pesan>` — Push pesan promosi ke inbox anggota grup.
- `.savekontak` — Export kontak grup ke dalam file VCF.

### ☪️ 13. ISLAMIC & RELIGI
- `.alquran <surah>` — Teks surah Al-Quran lengkap dengan terjemahan Indonesia.
- `.audioalquran` — Streaming audio murattal Al-Quran per surah.
- `.jadwalsholat <kota>` — Jadwal sholat akurat untuk seluruh kota di Indonesia.
- `.doaharian` & `.kisahnabi` — Koleksi doa sehari-hari & kisah 25 Nabi.

### 🔮 14. PRIMBON & FUN CEK
- `.ceksifat` / `.cekkhodam` / `.cekjodoh` / `.zodiak` / `.artinama` / `.fengshui`.

### 🗣️ 15. TEXT-TO-SPEECH (TTS)
- `.tts <teks>` — Mengubah teks menjadi suara Google TTS berbagai bahasa.
- `.ttselon <teks>` — Mengubah teks menjadi suara khas Elon Musk.
- `.ttsanime <teks>` — Mengubah teks menjadi suara karakter anime Jepang.

### 👑 16. OWNER & ADMIN COMMANDS
- `.addprem` / `.delprem` — Tambah & hapus status pengguna Premium.
- `.addowner` / `.delowner` — Manajemen daftar nomor Owner bot.
- `>` (Eval JS) / `$` (Exec Terminal) — Eksekusi kode JS & command terminal server.
- `.broadcast` (`.bc`) — Kirim pesan siaran ke seluruh pengguna/grup.
- `.clearsession` — Bersihkan file temporary & sesi terabaikan.
- `.deploy` — Otomatisasi deploy bot ke Vercel.

---

## ⚙️ Persyaratan Sistem (System Requirements)

- **Node.js**: Versi **`>= 22.0.0`** (Rekomendasi Node.js LTS terbaru).
- **FFmpeg**: Wajib terpasang di sistem server untuk pemrosesan stiker, audio, & video.
- **Git**: Untuk proses cloning repository.
- **Sistem Operasi**: Linux (Ubuntu/Debian), Windows 10/11, macOS, Android (Termux).

---

## 🚀 Panduan Instalasi & Deployment Lengkap

Pilih salah satu metode instalasi yang sesuai dengan server/perangkat Anda di bawah ini:

### 📱 1. Deployment di Termux (Android)

Buka aplikasi Termux dan jalankan perintah baris demi baris:

```bash
# Update & Install Package Dasar
pkg update && pkg upgrade -y
pkg install git nodejs-lts ffmpeg libwebp -y

# Clone Repository & Masuk Folder
git clone https://github.com/username/mzkyzakk.git
cd mzkyzakk

# Install Dependensi Project
npm install

# Edit Konfigurasi config.js
nano config.js

# Jalankan Bot
npm start
```

---

### 🐧 2. Deployment di Linux VPS (Ubuntu / Debian) dengan PM2

```bash
# Update System & Install FFmpeg + Node.js 22
sudo apt update && sudo apt upgrade -y
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs ffmpeg git build-essential

# Clone Repository
git clone https://github.com/username/mzkyzakk.git
cd mzkyzakk

# Install Dependensi Project
npm install

# Install PM2 (Process Manager)
sudo npm install -y -g pm2

# Jalankan Bot Menggunakan PM2 (Auto Restart)
pm2 start index.js --name "mzkyzak-bot"
pm2 save
pm2 startup
```

---

### 💻 3. Deployment di Windows (PowerShell / CMD)

1. Unduh dan install **Node.js v22+** dari [nodejs.org](https://nodejs.org/).
2. Unduh dan install **FFmpeg**, lalu masukkan folder `bin` FFmpeg ke **System PATH Environment Variables**.
3. Buka PowerShell di folder project:
```powershell
# Install Dependensi
npm install

# Jalankan dalam Mode Development
npm run dev

# Jalankan dalam Mode Production
npm start
```

---

### 🖥️ 4. Deployment di Panel Pterodactyl

1. Upload seluruh file project (atau file ZIP) ke Panel Pterodactyl.
2. Pada bagian **Startup Command**, atur ke: `npm start` atau `node index.js`.
3. Pastikan **Egg / Environment** yang digunakan mendukung Node.js 22+ & FFmpeg.
4. Klik **Start Server**, buka **Console Panel**, dan tunggu hingga kode pairing muncul.

---

## 📲 Cara Menghubungkan Bot ke WhatsApp (Pairing Code)

1. Setelah bot dijalankan (`npm start` atau `npm run dev`), perhatikan layar Console Terminal Anda.
2. Terminal akan menampilkan **8-Digit Kode Pairing** (Contoh: `MZKY-1024`).
3. Buka aplikasi WhatsApp di HP Anda.
4. Masuk ke **Setelan / Menu (Titik 3 di kanan atas)** -> **Perangkat Tertaut (Linked Devices)**.
5. Tekan tombol **Tautkan Perangkat (Link a Device)**.
6. Pilih menu di bagian bawah: **"Tautkan dengan nomor telepon saja" (Link with phone number instead)**.
7. Masukkan kode 8 digit yang tertera di terminal console bot.
8. Selesai! Bot WhatsApp **MZKYZAK-MD v10** akan langsung aktif dan siap digunakan. Sesi autentikasi tersimpan otomatis di `./session/`.

---

## ⚙️ Panduan Konfigurasi (`config.js`)

Edit file [config.js](file:///c:/Users/USER/Downloads/MZKYZAK/mzkyzakk/config.js) sesuai kebutuhan Anda:

```javascript
const config = {
  // Informasi Owner Bot
  owner: {
    name: "mzkyzak",              // Nama Owner
    number: ["6285810192529"],   // Nomor HP Owner (Format 628xxx)
  },

  // Konfigurasi Sesi & Pairing
  session: {
    pairingNumber: "6285810192529", // Nomor WhatsApp Bot
    usePairingCode: true,         // true = Kode Pairing 8-Digit, false = QR Code
  },

  // Metadata Bot
  bot: {
    name: "mzkyzak BOT",         // Nama Tampilan Bot
    version: "10.0",              // Versi Bot
    developer: "mzkyzak",         // Nama Pengembang
  },

  // Prefix Command Bot
  command: {
    prefix: ".",                  // Simbol Prefix (Contoh: .)
  },

  // Pengaturan Limit & Energi User
  energi: {
    enabled: true,                // true = Sistem limit/energi aktif
    default: 99999,               // Limit User Gratisan
    premium: 99999999,            // Limit User Premium
    owner: -1,                   // Unlimited (-1)
  },

  // Saluran WhatsApp Resmi
  saluran: {
    id: "120363400911374213@newsletter",
    name: "Join Saluran Resmi mzkyzak",
    link: "https://whatsapp.com/channel/0029VbB37bgBfxoAmAlsgE0t",
  },

  // API Key Pihak Ketiga
  APIkey: {
    lolhuman: "YOUR_LOLHUMAN_KEY",
    groq: "gsk_...",              // Groq Key untuk Transkripsi Whisper (gratis di console.groq.com)
    google: "AIzaSy...",          // Google Gemini API Key (gratis di aistudio.google.com)
  }
};
```

---

## ❓ FAQ & Troubleshooting (Pertanyaan Umum)

#### Q: Mengapa bot mengalami *Connection Closed (Error 440 / 401)*?
> **Jawab:** Terjadi bentrokan sesi atau file watcher aktif pada folder core. Buka `config.js` dan pastikan `dev.watchSrc` disetel ke `false`.

#### Q: Mengapa pembuatan stiker/audio/video gagal?
> **Jawab:** Pastikan **FFmpeg** sudah terinstall dengan benar di server/laptop Anda. Cek dengan mengetik `ffmpeg -version` di terminal.

#### Q: Bagaimana cara mereset atau mengganti akun WhatsApp bot?
> **Jawab:** Hapus folder `./session/` di dalam direktori proyek, lalu jalankan kembali `npm start` untuk memasukkan nomor & kode pairing baru.

---

## 📞 Saluran & Komunitas Resmi

Tetap terhubung dengan pembaruan fitur terbaru dan dukungan teknis:

- 📢 **Saluran WhatsApp Resmi**: [Join Saluran MZKYZAK-MD](https://whatsapp.com/channel/0029VbB37bgBfxoAmAlsgE0t)
- 👨‍💻 **Developer Contact**: `6285810192529`

---

## 📜 Lisensi & Credits

- **Developer Utama**: Zann & mzkyzak
- **Engine Library**: [@adiwajshing/baileys](https://github.com/adiwajshing/Baileys) / Ourin Baileys Engine
- **Lisensi Open Source**: ISC License

<p align="center">
  <b>⭐ Jangan lupa berikan Star pada repository ini jika MZKYZAK-MD v10 bermanfaat untuk Anda! ⭐</b>
</p>
