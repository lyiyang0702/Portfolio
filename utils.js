// utils.js
async function loadComponent(id, url) {
    try {
        const response = await fetch(url);
        document.getElementById(id).innerHTML = await response.text();
    } catch (error) {
        console.error(`Failed to load ${url}: ${error}`);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    loadComponent("header", "header.html");
    loadComponent("footer", "footer.html");
});


document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.getElementById("navLinks");

    function showMenu() {
        if (!navLinks) {
            console.error("navLinks element not found");
            return;
        }
        console.log("Menu icon clicked");
        navLinks.style.right = "0";
        navLinks.style.display = "flex";
    }

    function hideMenu() {
        if (!navLinks) {
            console.error("navLinks element not found");
            return;
        }
        console.log("Close icon clicked");
        navLinks.style.right = "-200px";
    }

    // Export functions to global scope if necessary
    window.showMenu = showMenu;
    window.hideMenu = hideMenu;
});