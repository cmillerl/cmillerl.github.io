document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger-menu');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-list a');
    const headerHeight = document.querySelector('header').offsetHeight;

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
});