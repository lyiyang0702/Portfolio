// utils.js
async function loadComponent(id, url) {
    try {
        const response = await fetch(url);
        document.getElementById(id).innerHTML = await response.text();

        // ✅ Initialize menu functions only after the header loads
        if (id === "header") {
            initMenu();
        }
    } catch (error) {
        console.error(`Failed to load ${url}: ${error}`);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    loadComponent("header", "header.html");
    loadComponent("footer", "footer.html");
});


// ✅ Define menu functions inside a separate function
function initMenu() {
    const navLinks = document.getElementById("navLinks");
    if (!navLinks) {
        console.error("navLinks element not found after loading header");
        return;
    }

    function showMenu() {
        const navLinks = document.getElementById("navLinks");
        if (!navLinks) {
            console.error("navLinks element not found");
            return;
        }
        console.log("Menu icon clicked");
        navLinks.classList.add("active");
    }
    
    function hideMenu() {
        const navLinks = document.getElementById("navLinks");
        if (!navLinks) {
            console.error("navLinks element not found");
            return;
        }
        console.log("Close icon clicked");
        navLinks.classList.remove("active");
    }

    // Export functions globally so they can be used in HTML onclick events
    window.showMenu = showMenu;
    window.hideMenu = hideMenu;
}

window.onscroll = function() {
    let button = document.getElementById("backToTop");
    if (document.documentElement.scrollTop > 100) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  };
  
  // Scroll to the top when clicked
  document.getElementById("backToTop").onclick = function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
