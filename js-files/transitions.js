document.addEventListener('DOMContentLoaded', function () {

    const elements = [
        { selector: '.my-name', delay: 300 },
        { selector: '.my-title', delay: 600 },
        { selector: '.profile-pic', delay: 900 },
        { selector: '.social-links', delay: 1200 },
        { selector: '.right-content', delay: 1500 }
    ];

    let currentRetries = 0;
    const maxRetries = 10;

    function startTransitions() {
        if (elements.length === 0 || currentRetries >= maxRetries) {
            setTimeout(() => {
                currentRetries++;
                startTransitions();
            }, 300);
        } else {
            elements.forEach(({ selector, delay }) => {
                const element = document.querySelector(selector);
                if (element && element.classList.contains('not-visible')) {
                    setTimeout(() => {
                        element.classList.remove('not-visible');
                        element.classList.add('visible');
                    }, delay);
                }
            });
        }
    }

    startTransitions();
});