document.addEventListener("DOMContentLoaded", function () {

    let currentRetries = 0;
    const maxRetries = 10;
    let currentPosition = window.pageYOffset;
    let scrollTimeout;

    function hideHeader() {
        const header = document.querySelector("header");

        if (!header && currentRetries < maxRetries) {
            currentRetries++;
            setTimeout(hideHeader, 100);
        } else if (header) {
            window.addEventListener("scroll", function () {
                clearTimeout(scrollTimeout);

                scrollTimeout = setTimeout(() => {
                    let newPosition = window.pageYOffset;

                    if (currentPosition < newPosition && newPosition > 100) {
                        header.style.transition = "all 0.3s ease-in-out";
                        header.style.transform = "translateY(-100%)";
                    } else if (currentPosition > newPosition) {
                        header.style.transition = "all 0.3s ease-in-out";
                        header.style.transform = "translateY(0)";
                    }

                    currentPosition = newPosition;
                }, 100);
            });
        }
    }

    hideHeader();

});