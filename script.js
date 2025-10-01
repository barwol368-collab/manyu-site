document.addEventListener('DOMContentLoaded', function () {
  // Copy contract address functionality
  const copyButton = document.getElementById('copyButton');
  const contractAddress = document.getElementById('contractAddress');
  
  if (copyButton && contractAddress) {
    copyButton.addEventListener('click', function () {
      const text = contractAddress.textContent.trim();
      
      navigator.clipboard.writeText(text).then(function() {
        const originalText = copyButton.querySelector('.btn__text').textContent;
        copyButton.querySelector('.btn__text').textContent = 'Copied!';
        copyButton.style.background = 'var(--color-brand-secondary)';
        
        setTimeout(function() {
          copyButton.querySelector('.btn__text').textContent = originalText;
          copyButton.style.background = '';
        }, 2000);
      }).catch(function() {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        
        try {
          document.execCommand('copy');
          const originalText = copyButton.querySelector('.btn__text').textContent;
          copyButton.querySelector('.btn__text').textContent = 'Copied!';
          copyButton.style.background = 'var(--color-brand-secondary)';
          
          setTimeout(function() {
            copyButton.querySelector('.btn__text').textContent = originalText;
            copyButton.style.background = '';
          }, 2000);
        } catch (e) {
          console.error('Failed to copy text: ', e);
        }
        
        document.body.removeChild(textarea);
      });
    });
  }

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add scroll effect to header
  const header = document.querySelector('.header');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', function() {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 100) {
      header.style.background = 'rgba(6, 26, 18, 0.98)';
    } else {
      header.style.background = 'rgba(6, 26, 18, 0.95)';
    }
    
    lastScrollY = currentScrollY;
  });

  // Add intersection observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animatedElements = document.querySelectorAll('.feature-card, .stat-card, .gallery__item');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});



