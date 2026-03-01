// Hamburger menu
  function toggleMenu() {
    const nav = document.getElementById('mobileNav');
    const btn = document.getElementById('hamburger');
    nav.classList.toggle('open');
    const spans = btn.querySelectorAll('span');
    if (nav.classList.contains('open')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  }
  function closeMenu() {
    const nav = document.getElementById('mobileNav');
    const btn = document.getElementById('hamburger');
    nav.classList.remove('open');
    btn.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  }
  // Close menu on outside click
  document.addEventListener('click', function(e) {
    const nav = document.getElementById('mobileNav');
    const btn = document.getElementById('hamburger');
    if (nav.classList.contains('open') && !nav.contains(e.target) && !btn.contains(e.target)) {
      closeMenu();
    }
  });

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 60);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  reveals.forEach(el => observer.observe(el));

  // Photo upload
  document.getElementById('photoInput').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(ev) {
      const img = document.getElementById('heroPhoto');
      const placeholder = document.getElementById('avatarPlaceholder');
      img.src = ev.target.result;
      img.style.display = 'block';
      placeholder.style.display = 'none';
      document.querySelector('.hero-image-upload-hint').style.display = 'none';
    };
    reader.readAsDataURL(file);
  });

  // Stagger children within grids
  document.querySelectorAll('.focus-grid, .projects-grid, .skills-grid, .ach-grid, .certs-grid').forEach(grid => {
    grid.querySelectorAll('.reveal').forEach((child, i) => {
      child.style.transitionDelay = `${i * 80}ms`;
    });
  });