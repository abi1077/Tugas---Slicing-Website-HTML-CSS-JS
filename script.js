// Sapaan waktu dinamis otomatis berdasarkan jam pengguna
const teksSapaan = document.getElementById('greeting');
const jamSekarang = new Date().getHours();

if (teksSapaan) {
    if (jamSekarang >= 5 && jamSekarang < 11) {
        teksSapaan.innerText = "Selamat Pagi, Saya Abimanyu!";
    } else if (jamSekarang >= 11 && jamSekarang < 15) {
        teksSapaan.innerText = "Selamat Siang, Saya Abimanyu!";
    } else if (jamSekarang >= 15 && jamSekarang < 18) {
        teksSapaan.innerText = "Selamat Sore, Saya Abimanyu!";
    } else {
        teksSapaan.innerText = "Selamat Malam, Saya Abimanyu!";
    }
}