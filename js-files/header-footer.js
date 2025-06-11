document.addEventListener("DOMContentLoaded", function () {

    const maxRetries = 10;
    let currentRetries = 0;

    function initHeaderFooter() {
        const headerPlaceholder = document.getElementById('header-placeholder');
        const footerPlaceholder = document.getElementById('footer-placeholder');

        if ((!headerPlaceholder || !footerPlaceholder) && currentRetries < maxRetries) {
            currentRetries++;
            setTimeout(initHeaderFooter, 300);
        } else if (headerPlaceholder && footerPlaceholder) {
            fetch('header.html')
                .then(response => response.text())
                .then(data => {
                    headerPlaceholder.innerHTML = data;
                })
                .catch(error => {
                    console.error('Error loading the header:', error);
                })
            fetch('footer.html')
                .then(response => response.text())
                .then(data => {
                    footerPlaceholder.innerHTML = data;
                })
                .catch(error => {
                    console.error('Error loading the footer:', error);
                })
        }
    }

    initHeaderFooter();

});