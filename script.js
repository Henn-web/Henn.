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

// Functions for Tabs (Assuming the active class is set properly in your HTML)
function showTechStack() {
    document.querySelector('.tab.active').classList.remove('active');
    document.querySelector('.tabs button:first-child').classList.add('active');
}

function showTools() {
    document.querySelector('.tab.active').classList.remove('active');
    document.querySelector('.tabs button:last-child').classList.add('active');
}
