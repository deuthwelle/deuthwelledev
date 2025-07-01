document.addEventListener('DOMContentLoaded', () => {

    // --- Theme Toggling Logic ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    function applySavedTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            body.classList.toggle('light-mode', savedTheme === 'light');
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            body.classList.add('light-mode');
        }
    }

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        localStorage.setItem('theme', body.classList.contains('light-mode') ? 'light' : 'dark');
    });

    applySavedTheme();

    // --- Active Nav Link on Scroll (Scroll Spy) ---
    const navLinks = document.querySelectorAll('.main-nav a');
    const sections = document.querySelectorAll('main section, footer');

    function changeNavOnScroll() {
        let currentSectionId = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - (section.clientHeight / 2)) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', changeNavOnScroll);
});