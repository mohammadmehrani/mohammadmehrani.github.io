(function () {
  const nav = document.getElementById("mainNav");
  const reveals = document.querySelectorAll(".reveal");
  const meters = document.querySelectorAll(".meter span");
  const year = document.getElementById("year");

  if (year) year.textContent = new Date().getFullYear();

  const toggleNav = () => {
    if (!nav) return;
    nav.classList.toggle("scrolled", window.scrollY > 18);
  };

  toggleNav();
  window.addEventListener("scroll", toggleNav, { passive: true });

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.14 }
  );

  reveals.forEach((el) => revealObserver.observe(el));

  const meterObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const node = entry.target;
        const level = node.dataset.level || "0";
        node.style.width = `${Math.max(0, Math.min(100, Number(level)))}%`;
        observer.unobserve(node);
      });
    },
    { threshold: 0.4 }
  );

  meters.forEach((meter) => meterObserver.observe(meter));
})();
