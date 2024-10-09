// Toggle Class Active
const navbarNav = document.querySelector('.navbar-nav');
const searchForm = document.getElementById('search-form');
const searchButton = document.getElementById('search-button');

// When Menu is Clicked
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Close Navbar when clicked outside
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

// Toggle search form visibility
document.getElementById('search').onclick = () => {
    searchForm.classList.toggle('visible');  // Single class for visibility
};

// Handle Search
if (searchButton) {
    searchButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent page reload

        const query = document.getElementById('search-input').value.trim().toLowerCase();
        
        if (!query) {
            alert('Silakan masukkan kata kunci untuk pencarian.');
            return;
        }

        const sections = document.querySelectorAll('section'); // Get all sections
        let found = false;

        sections.forEach(section => {
            const text = section.innerText.toLowerCase();
            if (text.includes(query)) {
                section.scrollIntoView({
                    behavior: 'smooth',   // Smooth scrolling
                    block: 'start'        // Scroll to the top of the section
                });
                found = true;
            }
        });

        if (!found) {
            alert('Tidak ada hasil ditemukan untuk: ' + query);
        }

        document.getElementById('search-input').value = ''; // Clear input after search
    });
}

function showTechStack() {
    // Hapus class 'active' dari tab yang aktif sebelumnya
    document.querySelector('.tab.active').classList.remove('active');
    // Tambahkan class 'active' ke tombol pertama (Tech Stack)
    document.querySelector('.tabs button:first-child').classList.add('active');

    // Tampilkan Tech Stack, sembunyikan Tools
    document.getElementById('techStack').style.display = 'grid';
    document.getElementById('tools').style.display = 'none';
}

function showTools() {
    // Hapus class 'active' dari tab yang aktif sebelumnya
    document.querySelector('.tab.active').classList.remove('active');
    // Tambahkan class 'active' ke tombol kedua (Tools)
    document.querySelector('.tabs button:last-child').classList.add('active');

    // Tampilkan Tools, sembunyikan Tech Stack
    document.getElementById('techStack').style.display = 'none';
    document.getElementById('tools').style.display = 'grid';
}
