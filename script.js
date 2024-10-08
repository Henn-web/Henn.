// Toggle Class Active
const navbarNav = document.querySelector('.navbar-nav');
const searchForm = document.getElementById('search-form');
const searchButton = document.getElementById('search-button');

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

// Toggle search form
document.getElementById('search').onclick = () => {
    searchForm.classList.toggle('hidden');
    searchForm.classList.toggle('visible');
};

// Menangani Pencarian
searchButton.addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah reload halaman

    const query = document.getElementById('search-input').value.toLowerCase();
    const sections = document.querySelectorAll('section'); // Mendapatkan semua section

    let found = false; // Flag untuk mengecek apakah ditemukan

    sections.forEach(section => {
        const text = section.innerText.toLowerCase(); // Mengambil teks section
        if (text.includes(query)) {
            section.scrollIntoView(); // Menggulir ke section yang ditemukan
            found = true;
        }
    });

    if (!found) {
        alert('Tidak ada hasil ditemukan untuk: ' + query);
    }

    searchInput.value = ''; // Mengosongkan input setelah pencarian
});

function showTechStack() {
    document.querySelector('.tab.active').classList.remove('active');
    document.querySelector('.tabs button:first-child').classList.add('active');
}

function showTools() {
    document.querySelector('.tab.active').classList.remove('active');
    document.querySelector('.tabs button:last-child').classList.add('active');
}];
