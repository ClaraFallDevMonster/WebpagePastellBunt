document.addEventListener("DOMContentLoaded", function () {
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

  // DOWNLOAD BUTTON
  const downloadBtn = document.getElementById("download-cv");
  if (downloadBtn) {
    downloadBtn.addEventListener("click", function () {
      window.open("cv/Clarissa_Bilke_CV_web.pdf", "_blank");
    });
  }

  // SKILLS SECTION - SCROLL ANIMATION
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1
    }
  );

  document.querySelectorAll(".skill-item").forEach((item) => {
    observer.observe(item);
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

  // SMOOTH SCROLL
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
});

// Menü automatisch schließen beim Klick auf Menü-Link
document.querySelectorAll('.menu-link').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    scrollDownButton.classList.remove('hidden');
  });
});

