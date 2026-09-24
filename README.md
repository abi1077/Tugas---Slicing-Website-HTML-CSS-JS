# Tugas Pemrograman Web - Slicing Website Portfolio

Halo semuanya! Repository ini dibuat untuk memenuhi tugas mata kuliah Pemrograman Web, yaitu melakukan *slicing* website sederhana secara mandiri tanpa menggunakan framework CSS.

Di sini saya memilih tema **Website Portfolio Pribadi** yang memuat profil singkat, riwayat pendidikan, catatan prestasi di bidang olahraga karate, serta kontak sosial media.

---

## 📌 Identitas Mahasiswa
- **Nama** : Abimanyu Bumi Langgeng
- **NIM** : *(Isi NIM Anda di sini)*
- **Program Studi** : Teknologi Informasi
- **Fakultas** : Fakultas Ilmu Komputer
- **Universitas** : Universitas Jember

---

## 🔗 Tautan Penting
- **Live Demo / Deployment** : [Kunjungi Website di Sini](https://abi1077.github.io/tgs1/) *(sesuaikan dengan link Netlify/Vercel/GitHub Pages Anda)*
- **Repository GitHub** : [github.com/abi1077/tgs1](https://github.com/abi1077)

---

## 📸 Tampilan Website
> *Tangkapan layar tampilan website saat dibuka di browser:*

![Tampilan Portfolio](screenshot.png)

---

## 🧭 Struktur Konten
1. **Navigasi (Navbar)**: Berisi pintasan cepat menuju section *About*, *Prestasi*, dan *Contact*.
2. **About Me**: Berisi foto profil, perkenalan diri singkat, sapaan dinamis waktu, dan daftar riwayat sekolah yang telah ditempuh.
3. **Prestasi**: Rangkuman kejuaraan karate (kumite) yang pernah saya ikuti, disusun rapi dalam bentuk daftar berurutan.
4. **Contact**: Informasi alamat, email, nomor WhatsApp, serta tautan ke akun media sosial (Instagram & GitHub).

---

## ⚙️ Penerapan Ketentuan Tugas
- **Responsif (Mobile, Tablet, Desktop)**:
  Layout halaman dibangun agar fleksibel dan nyaman dibaca di berbagai resolusi layar. Pada layar ponsel atau tablet, ukuran kotak dan jarak otomatis menyesuaikan lebar layar, sementara menu navigasi tetap tampil rapi horizontal.
- **Plain CSS (Tanpa Framework)**:
  Seluruh tampilan diatur murni lewat file `style.css` bawaan tanpa bantuan Bootstrap maupun Tailwind CSS, mulai dari pengaturan box model, tipografi, warna netral hitam-putih, hingga perataan layout.
- **JavaScript & Manipulasi DOM**:
  File `script.js` digunakan untuk memberikan interaktivitas dinamis pada elemen HTML:
  - Mengubah teks sapaan secara dinamis sesuai waktu pengguna membuka web, seperti *"Selamat Pagi/Siang/Sore/Malam"* (`document.getElementById` dan manipulasi teks `innerText`).

---

## 🚀 Cara Menjalankan Project
Project ini bersifat statis, jadi sangat mudah dijalankan:
1. Unduh (*clone*) repository ini ke komputer Anda.
2. Buka folder project.
3. Klik dua kali pada file `index.html`, halaman akan langsung terbuka di browser Anda tanpa perlu instalasi tambahan.
