(function () {
  const header = document.querySelector('[data-header]');
  const rail = document.querySelector('[data-rail]');
  const railToggle = document.querySelector('[data-rail-toggle]');
  const railClose = document.querySelector('[data-rail-close]');
  const railPanel = document.querySelector('[data-rail-panel]');
  const year = document.getElementById('year');

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  function setHeaderState() {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  }

  setHeaderState();
  window.addEventListener('scroll', setHeaderState, { passive: true });

  function closeRail() {
    if (!rail || !railPanel || !railToggle) return;
    rail.classList.remove('is-open');
    document.body.classList.remove('nav-open');
    railToggle.setAttribute('aria-expanded', 'false');
    window.setTimeout(() => { railPanel.hidden = true; }, 260);
  }

  function openRail() {
    if (!rail || !railPanel || !railToggle) return;
    railPanel.hidden = false;
    requestAnimationFrame(() => rail.classList.add('is-open'));
    document.body.classList.add('nav-open');
    railToggle.setAttribute('aria-expanded', 'true');
  }

  if (railToggle && railPanel) {
    railToggle.addEventListener('click', function () {
      rail?.classList.contains('is-open') ? closeRail() : openRail();
    });

    railClose?.addEventListener('click', closeRail);

    document.querySelectorAll('[data-rail-open]').forEach((button) => {
      button.addEventListener('click', openRail);
    });

    document.querySelectorAll('[data-rail-tree]').forEach((button) => {
      button.addEventListener('click', function () {
        const tree = document.getElementById(button.getAttribute('data-rail-tree'));
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        document.querySelectorAll('[data-rail-tree]').forEach((item) => {
          item.classList.remove('is-active');
          item.setAttribute('aria-expanded', 'false');
          const target = document.getElementById(item.getAttribute('data-rail-tree'));
          if (target) target.hidden = true;
        });
        if (!isExpanded && tree) {
          button.classList.add('is-active');
          button.setAttribute('aria-expanded', 'true');
          tree.hidden = false;
        }
      });
    });

    railPanel.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeRail);
    });
  }

  const landingArea = document.querySelector('.landing-navigation');
  const landingTreeButtons = document.querySelectorAll('[data-landing-tree]');
  landingTreeButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const tree = document.getElementById(button.getAttribute('data-landing-tree'));
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      landingTreeButtons.forEach((item) => {
        item.classList.remove('is-active');
        item.setAttribute('aria-expanded', 'false');
        const target = document.getElementById(item.getAttribute('data-landing-tree'));
        if (target) target.hidden = true;
      });
      if (!isExpanded && tree) {
        button.classList.add('is-active');
        button.setAttribute('aria-expanded', 'true');
        tree.hidden = false;
        landingArea?.classList.add('has-landing-panel');
      } else {
        landingArea?.classList.remove('has-landing-panel');
      }
    });
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeRail();
    }
  });

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -40px 0px' });

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }
})();
