/* ============================================
   EnsinAI Landing Page — JavaScript
   Pure vanilla JS, no dependencies
   ============================================ */

(function () {
  'use strict';

  // ---------- Navbar scroll effect ----------
  const navbar = document.getElementById('navbar');

  function handleNavbarScroll() {
    if (window.scrollY > 10) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }
  }

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });

  // ---------- Mobile menu ----------
  const hamburger = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');
  const navActions = document.querySelector('.navbar__actions');

  hamburger.addEventListener('click', function () {
    const isOpen = hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    navActions.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Close menu on link click
  navMenu.querySelectorAll('.navbar__link').forEach(function (link) {
    link.addEventListener('click', function () {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      navActions.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // ---------- Scroll-triggered animations ----------
  var animatedEls = document.querySelectorAll('[data-animate]');

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  animatedEls.forEach(function (el) {
    observer.observe(el);
  });

  // ---------- Counter animation (social proof) ----------
  function animateCounter(el) {
    var target = parseFloat(el.getAttribute('data-target'));
    var decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
    var duration = 2000;
    var startTime = null;
    var isLargeNumber = target >= 1000;

    function formatNumber(n) {
      if (decimals > 0) {
        return n.toFixed(decimals);
      }
      var rounded = Math.floor(n);
      if (isLargeNumber) {
        return rounded.toLocaleString('pt-BR');
      }
      return rounded.toString();
    }

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = eased * target;
      el.textContent = formatNumber(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        // Append "+" for large numbers at the end
        var suffix = target >= 100 ? '+' : '';
        el.textContent = formatNumber(target) + suffix;
      }
    }

    requestAnimationFrame(step);
  }

  var counterEls = document.querySelectorAll('.social-proof__number');
  var counterObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counterEls.forEach(function (el) {
    counterObserver.observe(el);
  });

  // ---------- Smooth scroll for anchor links ----------
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (href === '#') return;

      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ---------- Staggered animation for feature cards ----------
  var featureCards = document.querySelectorAll('.feature-card[data-animate]');
  featureCards.forEach(function (card, index) {
    card.style.transitionDelay = index * 80 + 'ms';
  });

  var stepCards = document.querySelectorAll('.step[data-animate]');
  stepCards.forEach(function (card, index) {
    card.style.transitionDelay = index * 120 + 'ms';
  });

  var testimonialCards = document.querySelectorAll('.testimonial-card[data-animate]');
  testimonialCards.forEach(function (card, index) {
    card.style.transitionDelay = index * 100 + 'ms';
  });
})();
