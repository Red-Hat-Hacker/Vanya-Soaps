// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Initialize mobile menu
  initMobileMenu();
  
  // Initialize form submissions
  initForms();
  
  // Initialize scroll animations
  initScrollAnimations();
});

// Mobile Menu Functionality
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('nav ul');
  
  if (toggle && nav) {
    toggle.addEventListener('click', function() {
      nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
      toggle.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        nav.style.display = 'none';
        toggle.classList.remove('active');
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!event.target.closest('nav') && !event.target.closest('.mobile-menu-toggle')) {
        nav.style.display = 'none';
        toggle.classList.remove('active');
      }
    });
  }
}

// Form Handling
function initForms() {
  // Contact form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData);
      
      // In a real application, you would send this data to a server
      console.log('Form submitted:', data);
      
      // Show success message
      alert('Thank you for your message! We will get back to you soon.');
      
      // Reset form
      contactForm.reset();
    });
  }
  
  // Newsletter form
  const newsletterForms = document.querySelectorAll('.newsletter-form');
  newsletterForms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = form.querySelector('input[type="email"]').value;
      
      // In a real application, you would send this to a newsletter service
      console.log('Newsletter subscription:', email);
      
      // Show success message
      alert('Thank you for subscribing to our newsletter!');
      
      // Reset form
      form.reset();
    });
  });
}

// Scroll Animations
function initScrollAnimations() {
  // Add intersection observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, observerOptions);
  
  // Observe elements for animation
  const elementsToAnimate = document.querySelectorAll('.product-info, .benefit-card, .why-vanya-text, .contact-form, .contact-info');
  elementsToAnimate.forEach(el => {
    el.classList.add('fade-element');
    observer.observe(el);
  });
}

// Smooth scrolling to sections
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Add to cart function
function addToCart() {
  alert('Vanya Herbal Soap has been added to your cart!');
}

// Form validation for better UX
function validateForm(form) {
  const inputs = form.querySelectorAll('input[required], textarea[required]');
  let isValid = true;
  
  inputs.forEach(input => {
    if (!input.value.trim()) {
      input.style.borderColor = 'rgba(255, 100, 100, 0.5)';
      isValid = false;
    } else {
      input.style.borderColor = 'rgba(255, 255, 255, 0.1)';
    }
  });
  
  return isValid;
}

// Add CSS for fade animations
const style = document.createElement('style');
style.textContent = `
  .fade-element {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  
  .fade-in {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);
