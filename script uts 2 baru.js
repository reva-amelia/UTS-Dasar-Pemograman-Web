document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('loginModal');
    const openBtn = document.getElementById('openLogin');
    const logoutBtn = document.getElementById('logoutBtn'); // Variabel baru
    const closeBtn = document.getElementById('closeLogin');
    const loginForm = document.getElementById('adminLoginForm');

    // 1. Logika Buka/Tutup Modal
    openBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // 2. Logika Validasi Login
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const user = document.getElementById('adminUser').value.trim();
        const pass = document.getElementById('adminPass').value.trim();

        if (user === "" && pass === "") {
            alert("Username dan password masih kosong");
        } else if (user === "") {
            alert("Username masih kosong");
        } else if (pass === "") {
            alert("Password masih kosong");
        } else {
            alert("Berhasil Login! Selamat Datang Admin.");
            
            // --- BAGIAN LOGOUT START ---
            modal.style.display = 'none'; // Tutup modal
            openBtn.style.display = 'none'; // Sembunyikan tombol Login
            logoutBtn.style.display = 'block'; // Munculkan tombol Logout
            loginForm.reset(); 
            // --- BAGIAN LOGOUT END ---
        }
    });

    // 3. Logika Logout (Balikin Kondisi)
    logoutBtn.addEventListener('click', () => {
        const konfirmasi = confirm("Apakah anda yakin ingin logout?");
        if (konfirmasi) {
            alert("Anda telah logout.");
            logoutBtn.style.display = 'none'; // Sembunyikan tombol Logout
            openBtn.style.display = 'block'; // Munculkan lagi tombol Login
        }
    });
});