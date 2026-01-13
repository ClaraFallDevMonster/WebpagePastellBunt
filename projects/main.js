  // NAVIGATION
  const menuButton = document.getElementById("menuButton");
  const menu = document.getElementById("menu");
  const closeButton = document.getElementById("closeButton");
  const scrollDownButton = document.getElementById("scrollDownButton");

  menuButton.addEventListener("click", () => {
    menu.classList.toggle("open");
  
    // Button ausblenden wenn Menü offen ist
    if (menu.classList.contains("open")) {
      scrollDownButton.classList.add("hidden");
    } else {
      scrollDownButton.classList.remove("hidden");
    }
  });
  
  closeButton.addEventListener("click", () => {
    menu.classList.remove("open");
    scrollDownButton.classList.remove("hidden");
  });

//Scroll down bubtton
document.getElementById('scrollDownButton').addEventListener('click', function () {
    // Find the next section
    const nextSection = document.querySelector('.hero-section').nextElementSibling;

    if (nextSection) {
        // Smoothly scroll to the next section
        nextSection.scrollIntoView({ behavior: 'smooth' });
    }
});

// SCROLL UP BUTTON
document.addEventListener("DOMContentLoaded", function () {
    const scrollUpButton = document.getElementById("scrollUpButton");
    const heroSection = document.querySelector(".hero-section");

    window.addEventListener("scroll", function () {
        const heroSectionHeight = heroSection.offsetHeight;
        if (window.scrollY > heroSectionHeight) {
            scrollUpButton.classList.add("show");
        } else {
            scrollUpButton.classList.remove("show");
        }
    });

    scrollUpButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
