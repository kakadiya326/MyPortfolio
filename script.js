document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  /* ==========================================================================
     Header Scroll Effect & Active Section Tracker (Scrollspy)
     ========================================================================== */
  const header = document.getElementById('header');
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    // Header background addition
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Scrollspy logic
    let currentSection = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= (sectionTop - 250)) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });

  /* ==========================================================================
     Mobile Navigation Toggle
     ========================================================================== */
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const mobileOverlay = document.querySelector('.mobile-nav-overlay');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  function toggleMenu() {
    mobileToggle.classList.toggle('open');
    mobileOverlay.classList.toggle('open');
    // Prevent body scroll when menu open
    document.body.style.overflow = mobileOverlay.classList.contains('open') ? 'hidden' : 'auto';
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', toggleMenu);
  }

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileOverlay.classList.contains('open')) {
        toggleMenu();
      }
    });
  });

  /* ==========================================================================
     Typewriter Effect (Hero Tagline)
     ========================================================================== */
  const typewriterElement = document.getElementById('typewriter');
  const phrases = [
    'Backend Developer.',
    'MERN Stack Engineer.',
    'REST API Architect.',
    'Problem Solver.'
  ];
  
  let phraseIndex = 0;
  let characterIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
      // Deleting characters
      typewriterElement.textContent = currentPhrase.substring(0, characterIndex - 1);
      characterIndex--;
      typingSpeed = 50; // Speed up when deleting
    } else {
      // Typing characters
      typewriterElement.textContent = currentPhrase.substring(0, characterIndex + 1);
      characterIndex++;
      typingSpeed = 100;
    }

    // Checking phase switches
    if (!isDeleting && characterIndex === currentPhrase.length) {
      // Pause at full word
      typingSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && characterIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 500; // Pause before typing next word
    }

    setTimeout(type, typingSpeed);
  }

  if (typewriterElement) {
    setTimeout(type, 1000);
  }

  /* ==========================================================================
     Skills Category Tab Switcher
     ========================================================================== */
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Deactivate all buttons & contents
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      // Activate current button
      button.classList.add('active');
      const targetTab = button.getAttribute('data-tab');
      const targetContent = document.getElementById(`${targetTab}-tab`);
      
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });

  /* ==========================================================================
     Projects Gallery Filters
     ========================================================================== */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Deactivate all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          // Smooth animate in
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* ==========================================================================
     Contact Form Validation & Submission Handling
     ========================================================================== */
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');
  const submitBtn = document.getElementById('submit-btn');
  const resetBtn = document.getElementById('reset-form-btn');
  const spinner = submitBtn ? submitBtn.querySelector('.spinner') : null;
  const btnText = submitBtn ? submitBtn.querySelector('.btn-text') : null;

  // Validator Helpers
  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  }

  function setInvalid(inputGroup) {
    inputGroup.classList.add('invalid');
  }

  function setValid(inputGroup) {
    inputGroup.classList.remove('invalid');
  }

  if (contactForm) {
    // Inputs Event Listeners to clear errors on typing
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        setValid(input.parentElement);
      });
    });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      let isValid = true;
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const subject = document.getElementById('subject');
      const message = document.getElementById('message');

      // Check Name
      if (!name.value.trim()) {
        setInvalid(name.parentElement);
        isValid = false;
      } else {
        setValid(name.parentElement);
      }

      // Check Email
      if (!email.value.trim() || !validateEmail(email.value)) {
        setInvalid(email.parentElement);
        isValid = false;
      } else {
        setValid(email.parentElement);
      }

      // Check Subject
      if (!subject.value.trim()) {
        setInvalid(subject.parentElement);
        isValid = false;
      } else {
        setValid(subject.parentElement);
      }

      // Check Message
      if (!message.value.trim()) {
        setInvalid(message.parentElement);
        isValid = false;
      } else {
        setValid(message.parentElement);
      }

      if (!isValid) return;

      // Disable button, show loading spinner
      submitBtn.disabled = true;
      btnText.classList.add('hidden');
      spinner.classList.remove('hidden');

      // Simulate sending data (1.5 seconds)
      setTimeout(() => {
        // Reset button state
        submitBtn.disabled = false;
        btnText.classList.remove('hidden');
        spinner.classList.add('hidden');

        // Hide form, show Success state
        contactForm.classList.add('hidden');
        formSuccess.classList.remove('hidden');

        // Reset form inputs
        contactForm.reset();
      }, 1500);
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      // Hide Success state, show form
      formSuccess.classList.add('hidden');
      contactForm.classList.remove('hidden');
    });
  }
});
