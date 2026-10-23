/**
 * Kakadiya Chiranj — Personal Portfolio
 * 100% Pure Vanilla JavaScript (Self-contained, zero dependencies)
 */

(function () {
  "use strict";

  // 1. Header Scroll Effect
  const header = document.querySelector(".site-header");
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
  }

  // 2. Mobile Menu Drawer Toggle
  const toggleBtn = document.querySelector(".nav-toggle-btn");
  const drawer = document.querySelector(".mobile-menu-drawer");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener("click", () => {
      const isOpen = drawer.classList.toggle("open");
      toggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        drawer.classList.remove("open");
        toggleBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  // 3. Project Filter Tabs
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");

      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      projectCards.forEach((card) => {
        const category = card.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // 4. Copy Email to Clipboard Utility
  const copyEmailBtns = document.querySelectorAll(".copy-email-btn");
  copyEmailBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const email = "kakadiyachiranj044@gmail.com";
      navigator.clipboard.writeText(email).then(() => {
        const originalText = btn.innerHTML;
        btn.innerHTML = `<span>Copied to Clipboard!</span>`;
        setTimeout(() => {
          btn.innerHTML = originalText;
        }, 2500);
      });
    });
  });

  // 5. Contact Form Submission
  const contactForm = document.getElementById("contact-form");
  const formSuccess = document.getElementById("form-success-message");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const nameInput = document.getElementById("contact-name");
      const emailInput = document.getElementById("contact-email");
      const messageInput = document.getElementById("contact-message");

      const name = nameInput ? nameInput.value.trim() : "";
      const email = emailInput ? emailInput.value.trim() : "";
      const message = messageInput ? messageInput.value.trim() : "";

      const mailtoUrl = `mailto:kakadiyachiranj044@gmail.com?subject=${encodeURIComponent(
        `Portfolio Inquiry from ${name}`
      )}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      )}`;

      window.location.href = mailtoUrl;

      if (formSuccess) {
        formSuccess.style.display = "block";
        contactForm.reset();
        setTimeout(() => {
          formSuccess.style.display = "none";
        }, 5000);
      }
    });
  }
})();
