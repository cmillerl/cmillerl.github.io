document.addEventListener("DOMContentLoaded", function () {

    const elementOne = document.querySelector('.bottom-content-right');
    const maxRetries = 10;
    let currentRetries = 0;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('not-visible');
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    function observeElements() {
        if (!elementOne && currentRetries < maxRetries) {
            setTimeout(() => {
                currentRetries++;
                observeElements();
            }, 300);
        } else {
            observer.observe(elementOne);
        }
    }

    observeElements();

});