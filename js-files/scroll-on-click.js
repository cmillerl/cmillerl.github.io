document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-list a');
    const headerHeight = document.querySelector('header').offsetHeight;

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetId === "#home") {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }

            if (targetElement) {
                const targetPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = targetPosition + window.pageYOffset - headerHeight - 10;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});