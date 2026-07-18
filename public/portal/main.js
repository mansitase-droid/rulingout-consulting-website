// ── NAVBAR SCROLL EFFECT ──
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
});

// ── MOBILE MENU TOGGLE ──
document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('nav-toggle-btn');
  const menuWrapper = document.getElementById('nav-menu-wrapper');
  
  if (toggleBtn && menuWrapper) {
    toggleBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleBtn.classList.toggle('active');
      menuWrapper.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!menuWrapper.contains(e.target) && !toggleBtn.contains(e.target)) {
        toggleBtn.classList.remove('active');
        menuWrapper.classList.remove('active');
      }
    });

    // Close menu when clicking links
    const navLinks = menuWrapper.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        toggleBtn.classList.remove('active');
        menuWrapper.classList.remove('active');
      });
    });
  }

  // Run initial configuration for calculator if present
  if (document.getElementById('revenue-slider')) {
    updateCalculator();
  }

  // Handle Contact Form submission fallback (for static preview)
  const contactForm = document.getElementById('rulingout-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerText;
      
      submitBtn.innerText = 'Sending Request...';
      submitBtn.style.opacity = '0.7';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerText = 'Request Sent!';
        submitBtn.style.background = '#00c853';
        submitBtn.style.boxShadow = '0 0 15px rgba(0, 200, 83, 0.4)';
        
        alert('Thank you! Your audit request has been received. Our compliance team will reach out within 24 hours.');
        contactForm.reset();
        
        setTimeout(() => {
          submitBtn.innerText = originalText;
          submitBtn.style.background = 'var(--orange)';
          submitBtn.style.boxShadow = '0 4px 15px rgba(255, 92, 0, 0.2)';
          submitBtn.style.opacity = '1';
          submitBtn.disabled = false;
        }, 3000);
      }, 1500);
    });
  }

  // Handle Career Application Form
  const applicationForm = document.getElementById('career-application-form');
  if (applicationForm) {
    applicationForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Application successfully submitted! We will review your portfolio and reach out shortly.');
      closeCareerModal();
      applicationForm.reset();
    });
  }
});

// ── ACCORDION SERVICES EXPANSION ──
function toggleCard(cardElement) {
  cardElement.classList.toggle('expanded');
}

// ── INTERACTIVE REVENUE LEAKAGE CALCULATOR LOGIC ──
function formatCurrency(amount) {
  return '₹' + amount.toLocaleString('en-IN');
}

function updateCalculator() {
  const slider = document.getElementById('revenue-slider');
  const revenueDisplay = document.getElementById('revenue-val');
  const leakageMaxDisplay = document.getElementById('leakage-max');
  const leakageMinDisplay = document.getElementById('leakage-min');
  
  if (!slider) return;

  const val = parseInt(slider.value, 10);
  
  // Track bar filling color styling
  const percent = ((val - slider.min) / (slider.max - slider.min)) * 100;
  slider.style.background = `linear-gradient(to right, var(--orange) 0%, var(--orange) ${percent}%, rgba(255, 92, 0, 0.15) ${percent}%, rgba(255, 92, 0, 0.15) 100%)`;

  if (revenueDisplay) revenueDisplay.innerText = formatCurrency(val);
  
  const minLeakage = Math.round(val * 0.03);
  const maxLeakage = Math.round(val * 0.10);
  
  if (leakageMinDisplay) leakageMinDisplay.innerText = formatCurrency(minLeakage);
  if (leakageMaxDisplay) leakageMaxDisplay.innerText = formatCurrency(maxLeakage);
}

// ── CAREER APPLICATIONS MODAL ──
function openCareerModal(roleName) {
  const modal = document.getElementById('career-modal');
  const modalTitle = document.getElementById('modal-job-title');
  const jobTitleInput = document.getElementById('form-job-title-input');
  
  if (modal && modalTitle) {
    modalTitle.innerText = roleName;
    if (jobTitleInput) jobTitleInput.value = roleName;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Lock scrolling
  }
}

function closeCareerModal() {
  const modal = document.getElementById('career-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Unlock scrolling
  }
}

// ── CURSOR SPOTLIGHT TRACKER ──
document.addEventListener('mousemove', function(e) {
  const cards = document.querySelectorAll('.spotlight-card');
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  });
});
