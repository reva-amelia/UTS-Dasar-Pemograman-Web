document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('loginModal');
    const openBtn = document.getElementById('openLogin');
    const closeBtn = document.getElementById('closeLogin');
    const loginForm = document.getElementById('adminLoginForm');

    // 1. Logika Buka/Tutup Modal
    openBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Menutup modal jika user klik area luar kotak login
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // 2. Logika Validasi Login (Poin Utama UTS)
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah reload halaman

        const user = document.getElementById('adminUser').value.trim();
        const pass = document.getElementById('adminPass').value.trim();

        // Pengecekan kondisi sesuai instruksi PDF
        if (user === "" && pass === "") {
            alert("Username dan password masih kosong");
        } else if (user === "") {
            alert("Username masih kosong");
        } else if (pass === "") {
            alert("Password masih kosong");
        } else {
            alert("Berhasil Login! Selamat Datang Admin.");
            modal.style.display = 'none'; // Tutup modal setelah sukses
            loginForm.reset(); // Kosongkan input
        }
    });
});