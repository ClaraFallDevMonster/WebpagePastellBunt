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


// Wireframe-Slider
const container = document.querySelector('.image-compare-container');
const leftImage = container.querySelector('.compare-image-left');
const rightImage = container.querySelector('.compare-image-right');
const handle = container.querySelector('.slider-handle');

function updateSlider(x) {
  const bounds = container.getBoundingClientRect();
  const percent = ((x - bounds.left) / bounds.width) * 100;
  const clampedPercent = Math.max(0, Math.min(100, percent));

  leftImage.style.clipPath = `inset(0 ${100 - clampedPercent}% 0 0)`;
  rightImage.style.clipPath = `inset(0 0 0 ${clampedPercent}%)`;
  handle.style.left = `${clampedPercent}%`;
}

let isDragging = false;

function startDrag(x) {
  isDragging = true;
  container.classList.add('no-select'); // Prevent text/image selection
  updateSlider(x);
}

function dragMove(x) {
  if (isDragging) {
    updateSlider(x);
  }
}

function endDrag() {
  isDragging = false;
  container.classList.remove('no-select');
}

// Mouse support
container.addEventListener('mousedown', (e) => startDrag(e.clientX));
document.addEventListener('mousemove', (e) => dragMove(e.clientX));
document.addEventListener('mouseup', endDrag);

// Touch support
container.addEventListener('touchstart', (e) => startDrag(e.touches[0].clientX), { passive: true });
document.addEventListener('touchmove', (e) => dragMove(e.touches[0].clientX), { passive: true });
document.addEventListener('touchend', endDrag);


// Funktion fullscreen-modal
let zoomLevel = 1;

function openFullscreen(src) {
  const modal = document.getElementById("fullscreenModal");
  const img = document.getElementById("fullscreenImage");

  zoomLevel = 1;
  img.src = src;

  img.onload = () => {
    img.style.transform = `scale(${zoomLevel})`;
    modal.scrollTop = 0;
  };

  modal.style.display = "flex";
}

function closeFullscreen() {
  const modal = document.getElementById("fullscreenModal");
  modal.style.display = "none";
}

function zoomIn() {
  const img = document.getElementById("fullscreenImage");
  zoomLevel += 0.1;
  img.style.transform = `scale(${zoomLevel})`;
}

function zoomOut() {
  const img = document.getElementById("fullscreenImage");
  zoomLevel = Math.max(1, zoomLevel - 0.1);
  img.style.transform = `scale(${zoomLevel})`;
}


