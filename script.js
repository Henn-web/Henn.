// Toggle Class Active
const navbarNav = document.querySelector('.navbar-nav');

// Ketika Menu Di Click
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

// Fungsi Pencarian
document.getElementById('search').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    const searchForm = document.getElementById('search-form');
    if (searchForm.classList.contains('hidden')) {
        searchForm.classList.remove('hidden'); // Tampilkan form
        document.getElementById('search-input').focus(); // Fokus pada input
    } else {
        searchForm.classList.add('hidden'); // Sembunyikan form
    }
});

document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value;
    if (query) {
        // Ganti URL berikut dengan URL pencarian yang sesuai
        window.location.href = `search.html?q=${encodeURIComponent(query)}`;
    }
});
