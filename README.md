# Portofolio Felicia Natania Rahardjo

## Identitas Calon Aktivis

- **Nama lengkap:** Felicia Natania Rahardjo
- **NIM:** 2902571742

## Tema dan Konsep Website

Website ini merupakan portofolio pribadi untuk memperkenalkan Felicia sebagai mahasiswa Ilmu Komputer yang sedang belajar dan bercita-cita berkarier di bidang AI dan Software Engineering. Isinya mencakup perkenalan, bidang yang sedang dipelajari, sertifikat, serta formulir kontak.

Konsep visualnya minimalis, elegan, dan editorial: menggunakan warna ivory dan beige yang hangat, teks gelap, tipografi berukuran besar, serta ruang kosong yang lega. Sudut elemen dibuat membulat dengan aksen garis cokelat tipis agar tampilannya tetap lembut dan rapi. Website dirancang responsif agar nyaman digunakan di layar desktop maupun ponsel.

## Teknologi yang Digunakan

- **HTML** melalui JSX untuk menyusun struktur dan konten halaman.
- **CSS** untuk mengatur tata letak, warna, tipografi, border, dan tampilan responsif.
- **Tailwind CSS 4** sebagai bagian dari pipeline styling proyek.
- **JavaScript dan TypeScript** untuk logika interaktif serta tipe data.
- **React 19** untuk membangun antarmuka berbasis komponen.
- **Next.js 16 (App Router)** sebagai framework untuk halaman dan endpoint backend formulir kontak.
- **Resend API** untuk mengirim pesan dari formulir kontak melalui server.

## Instalasi dan Menjalankan Proyek

Pastikan **Node.js** dan **npm** sudah terpasang. Dari direktori utama repository, jalankan:

```bash
npm install
```

Perintah ini memasang paket yang dibutuhkan proyek berdasarkan `package.json`.

### Menyiapkan formulir kontak (opsional)

Formulir kontak menggunakan Resend. Agar pesan dapat dikirim, buat API key di Resend, lalu salin `.env.example` menjadi `.env.local` dan isi nilainya:

```env
RESEND_API_KEY=re_ganti_dengan_api_key_milikmu
CONTACT_EMAIL=felicianatania.r@gmail.com
```

Simpan API key hanya di `.env.local` atau pengaturan environment saat deploy. Jangan commit atau membagikan API key. Jika pengaturan email belum tersedia, bagian lain dari website tetap dapat dijalankan, tetapi formulir kontak belum dapat mengirim pesan.

### Menjalankan server pengembangan

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser untuk melihat website. Tekan `Ctrl + C` di terminal untuk menghentikan server.

## Struktur Konten

- `app/page.tsx` berisi halaman utama portofolio.
- `app/certificates/page.tsx` berisi halaman sertifikat.
- `app/api/contact/route.ts` menangani pengiriman formulir kontak di sisi server.
- `components/` berisi komponen navigasi, hero, footer, dan formulir kontak.
- `app/globals.css` berisi gaya visual dan aturan responsif.
- `public/certificates/` berisi berkas PDF sertifikat beserta gambar preview.
- `public/felicia-portrait.jpeg` adalah foto yang digunakan di halaman utama.
