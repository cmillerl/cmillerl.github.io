document.addEventListener("DOMContentLoaded", function () {

    let header = null;
    let currentRetries = 0;
    const maxRetries = 10;
    let currentPosition = window.pageYOffset;


    function hideHeader() {
        if (!header && currentRetries < maxRetries) {
            header = document.querySelector("header");
            currentRetries++;
            setTimeout(hideHeader, 100);
        } else if (header) {
            window.addEventListener("scroll", function () {
                let newPosition = window.pageYOffset;

                if (currentPosition < newPosition) {
                    this.setTimeout(() => { 
                        header.style.transition = "all 0.6s ease-in-out";
                        header.style.top = "-100px";
                    }, 300);
                } else {
                    this.setTimeout(() => { 
                        header.style.transition = "all 0.6s ease-in-out";
                        header.style.top = "0px";
                    }, 300);
                }
                currentPosition = newPosition;
            })
        }
    }

hideHeader();

});