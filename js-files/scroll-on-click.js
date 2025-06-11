document.addEventListener('DOMContentLoaded', function () {

    const maxRetries = 10;
    let currentRetries = 0;

    function scrollToElement() {

        const navLinks = document.querySelectorAll('.nav-list a');
        const header = document.querySelector('header');

        if ((navLinks.length === 0 || !header) && currentRetries < maxRetries) {
            currentRetries++;
            setTimeout(scrollToElement, 300);
        } else if (header && navLinks.length > 0) {
            const headerHeight = header.offsetHeight;
            navLinks.forEach(link => {
                link.addEventListener('click', function (e) {
                    const targetId = this.getAttribute('href');
                    if (targetId.startsWith('#')) {
                        e.preventDefault();
                        if (targetId === "#home") {
                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth'
                            });
                        } else {
                            const targetElement = document.querySelector(targetId);

                            if (targetElement) {
                                const targetPosition = targetElement.getBoundingClientRect().top;
                                const offsetPosition = targetPosition + window.pageYOffset - headerHeight - 10;

                                window.scrollTo({
                                    top: offsetPosition,
                                    behavior: 'smooth'
                                });
                            }
                        }
                    }
                });
            });
        }
    }

    scrollToElement();
});