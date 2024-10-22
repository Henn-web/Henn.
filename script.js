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

// Typewriter//
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.txtElement.innerHTML = `<span class="wrap">${this.txt}</span>`;

        let typeSpeed = 200;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

document.addEventListener('DOMContentLoaded', init);

function init() {
    const txtElement = document.querySelector('.typewrite');
    const words = JSON.parse(txtElement.getAttribute('data-type'));
    const wait = txtElement.getAttribute('data-wait') || 3000;
    new TypeWriter(txtElement, words, wait);
}

