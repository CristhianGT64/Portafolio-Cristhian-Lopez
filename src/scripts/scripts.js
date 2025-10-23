  (function () {
    const header = document.getElementById('site-header');
    if (!header) return;
    const THRESHOLD = 12; // px para activar el efecto

    function onScroll() {
      if (window.scrollY > THRESHOLD) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    }

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  })();