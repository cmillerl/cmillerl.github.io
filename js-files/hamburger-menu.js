document.addEventListener('DOMContentLoaded', function () {
    function initHamburgerMenu() {
        const hamburger = document.querySelector('.hamburger-menu');
        const navList = document.querySelector('.nav-list');

        if (hamburger && navList) {
            const navLinks = document.querySelectorAll('.nav-list a');

            hamburger.addEventListener('click', function () {
                this.classList.toggle('active');
                navList.classList.toggle('active');
            });

            navLinks.forEach(link => {
                link.addEventListener('click', function () {
                    hamburger.classList.remove('active');
                    navList.classList.remove('active');
                });
            });

            document.addEventListener('click', function (e) {
                if (!e.target.closest('.nav-list') && !e.target.closest('.hamburger-menu')) {
                    hamburger.classList.remove('active');
                    navList.classList.remove('active');
                }
            });
        } else {
            setTimeout(initHamburgerMenu, 100);
        }
    }

    initHamburgerMenu();
});