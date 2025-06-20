document.addEventListener('DOMContentLoaded', function () {

    let currentRetries = 0;
    const maxRetries = 10;

    function startTransitions() {

        const elements = [
            { selector: '.my-name', delay: 300 },
            { selector: '.my-title', delay: 600 },
            { selector: '.profile-pic', delay: 900 },
            { selector: '.button-projects', delay: 1200 },
            { selector: '.social-links', delay: 1500 },
            { selector: '.middle-content', delay: 1800 }
        ];

        const foundElements = elements.filter(({ selector }) => document.querySelector(selector));

        if (foundElements.length === 0 && currentRetries < maxRetries) {
            currentRetries++;
            setTimeout(startTransitions, 300);
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