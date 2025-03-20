// Seleksi elemen DOM
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobileMenu = document.querySelector('.header .nav-bar .nav-list ul');
const menuItems = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

// Fungsi untuk toggle menu mobile
const toggleMenu = () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
};

// Event listener untuk hamburger menu
hamburger.addEventListener('click', toggleMenu);

// Event listener untuk setiap item menu
menuItems.forEach((item) => {
    item.addEventListener('click', toggleMenu);
});

// Fungsi untuk mengubah warna header saat scroll
const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 250) {
        header.style.backgroundColor = '#29323c'; // Warna saat scroll
    } else {
        header.style.backgroundColor = 'transparent'; // Warna default
    }
};

// Event listener untuk scroll
document.addEventListener('scroll', handleScroll);

// Smooth scroll untuk navigasi internal
menuItems.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault(); // Mencegah perilaku default
        const targetId = item.getAttribute('href'); // Ambil target ID
        const targetSection = document.querySelector(targetId); // Seleksi target section

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth', // Animasi smooth scroll
                block: 'start', // Posisi scroll ke atas section
            });
        }
    });
});

// Penanganan error jika elemen tidak ditemukan
if (!hamburger || !mobileMenu || !header) {
    console.error('Salah satu elemen tidak ditemukan. Pastikan struktur HTML sesuai.');
}