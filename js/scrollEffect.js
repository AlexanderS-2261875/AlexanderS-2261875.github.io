// scrollEffect.js

function extendBarsOnScroll() {
    const barDevs = document.querySelectorAll(".barDev");
    const barWebs = document.querySelectorAll(".barWeb");
    const portfolioContent = document.getElementById("portfolio__content");

    // Define individual widths for each "barDev" and "barWeb"
    const barDevWidths = ["900px", "900px", "650px", "700px"]; // Example widths for "barDev"
    const barWebWidths = ["800px", "800px", "800px"]; // Example widths for "barWeb"

    // Function to set the width of "barDev" and "barWeb" spans with a smooth transition
    function setWidths() {
        barDevs.forEach((barDev, index) => {
            barDev.style.width = barDevWidths[index] || "auto";
        });

        barWebs.forEach((barWeb, index) => {
            barWeb.style.width = barWebWidths[index] || "auto";
        });
    }

    // Function to check the scroll position and set the widths when the "portfolio__content" is in view
    function checkScrollPosition() {
        const contentBounding = portfolioContent.getBoundingClientRect();
        if (contentBounding.top < window.innerHeight && contentBounding.bottom > 0) {
            setWidths();
            window.removeEventListener("scroll", checkScrollPosition);
        }
    }

    // Attach the function to the scroll event
    window.addEventListener("scroll", checkScrollPosition);

    // Initially set the widths if the "portfolio__content" is already in view
    checkScrollPosition();
}

extendBarsOnScroll();
