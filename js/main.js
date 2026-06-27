// Minimal vanilla JS — no build step required.

// 1) Current year in the footer.
document.querySelectorAll('#yr').forEach(function (el) {
  el.textContent = new Date().getFullYear();
});

// 2) Scroll-reveal for resume sections.
//    Each .reveal fades + slides in when it scrolls into view.
(function () {
  var items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  // If the browser can't observe intersections, just show everything.
  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('in'); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry, i) {
      if (entry.isIntersecting) {
        // Stagger the reveal slightly for a nicer cascade.
        var delay = (Array.prototype.indexOf.call(items, entry.target) % 3) * 120;
        setTimeout(function () { entry.target.classList.add('in'); }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25 });

  items.forEach(function (el) { observer.observe(el); });
})();
