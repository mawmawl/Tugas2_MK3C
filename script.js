/* =========================================
   VALIDASI FORM LOGIN
   ========================================= */

function cekLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Username dan password wajib diisi!");
    } else {
        alert("Data login sudah lengkap!");
    }
}


/* =========================================
   VALIDASI FORM REGISTER
   ========================================= */

function cekRegister() {
    let nama = document.getElementById("nama").value;
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let konfirmasiPassword = document.getElementById("konfirmasi-password").value;
    let kelas = document.getElementById("kelas").value;

    /* Memeriksa data penting */
    if (nama === "" || username === "" || email === "" || password === "") {
        alert("Data penting harus diisi!");
    }

    /* Memeriksa panjang password */
    else if (password.length < 8) {
        alert("Password minimal 8 karakter!");
    }

    /* Memeriksa kesamaan password */
    else if (password !== konfirmasiPassword) {
        alert("Password dan konfirmasi password tidak sama!");
    }

    /* Memeriksa pilihan kelas */
    else if (kelas === "") {
        alert("Silakan pilih kelas!");
    }

    /* Jika semua valid */
    else {
        alert("Data registrasi valid!");
    }
}


/* =========================================
   FUNCTION BARU
   ========================================= */

function tampilkanPesan() {
    alert("Selamat belajar JavaScript!");
}


/* =========================================
   TANTANGAN LOGIKA NILAI
   ========================================= */

function cekKelulusan(nilai) {
    if (nilai >= 75) {
        console.log("Lulus");
        return "Lulus";
    } else {
        console.log("Belum Lulus");
        return "Belum Lulus";
    }
}