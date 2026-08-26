(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---- footer year ----
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- scroll reveal ----
  var revealEls = document.querySelectorAll("[data-reveal]");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  }

  // ---- circuit trace: scroll progress fill ----
  var fill = document.getElementById("traceFill");
  function updateTrace() {
    var doc = document.documentElement;
    var scrollTop = window.scrollY || doc.scrollTop;
    var max = doc.scrollHeight - doc.clientHeight;
    var pct = max > 0 ? Math.min(100, (scrollTop / max) * 100) : 0;
    if (fill) fill.style.height = pct + "%";
  }
  updateTrace();
  window.addEventListener("scroll", updateTrace, { passive: true });
  window.addEventListener("resize", updateTrace);

  // ---- active node highlighting ----
  var nodes = document.querySelectorAll(".trace__node");
  var sectionIds = ["top", "about", "achievements", "projects", "contact"];
  var sections = sectionIds.map(function (id) { return document.getElementById(id); }).filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    var navIo = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var idx = sectionIds.indexOf(entry.target.id);
          var node = document.querySelector('.trace__node[data-node="' + idx + '"]');
          if (!node) return;
          if (entry.isIntersecting) {
            nodes.forEach(function (n) { n.classList.remove("is-active"); });
            node.classList.add("is-active");
          }
        });
      },
      { threshold: 0, rootMargin: "-45% 0px -45% 0px" }
    );
    sections.forEach(function (s) { navIo.observe(s); });
  }
})();
