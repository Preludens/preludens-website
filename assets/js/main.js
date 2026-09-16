(function () {
  var toggle = document.querySelector("[data-nav-toggle]");
  var nav = document.querySelector("[data-nav]");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }
})();

/* Sticky header shrink on scroll (normale pagina's + homepage fixed header) */
(function () {
  var header = document.querySelector("[data-header]");
  if (!header) return;

  var threshold = 40;
  var ticking = false;

  function update() {
    ticking = false;
    header.classList.toggle("is-shrunk", window.scrollY > threshold);
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(update);
    }
  }

  update();
  window.addEventListener("scroll", onScroll, { passive: true });
})();

(function () {
  var root = document.querySelector("[data-verhalen-filters]");
  if (!root) return;

  var tabs = root.querySelectorAll("[data-verhaal-filter]");
  var grid = document.querySelector("[data-verhalen-grid]");
  var empty = document.querySelector("[data-verhalen-empty]");
  var featured = document.querySelector("[data-verhalen-featured]");
  var items = grid ? grid.querySelectorAll("[data-verhaal-type]") : [];
  var panel = document.getElementById("verhalen-panel");
  var validFilters = ["all", "projecten", "kennis", "whitepapers", "demos"];
  var emptyTitle = empty ? empty.querySelector(".verhalen-empty__title") : null;
  var emptyText = empty ? empty.querySelector(".verhalen-empty__text") : null;
  var emptyCopy = {
    whitepapers: {
      title: emptyTitle ? emptyTitle.getAttribute("data-whitepapers-title") || emptyTitle.textContent : "",
      text: emptyText ? emptyText.getAttribute("data-whitepapers-text") || emptyText.textContent : ""
    },
    demos: {
      title: emptyTitle ? emptyTitle.getAttribute("data-demos-title") || "" : "",
      text: emptyText ? emptyText.getAttribute("data-demos-text") || "" : ""
    }
  };

  function setActiveTab(activeFilter) {
    tabs.forEach(function (tab) {
      var isActive = tab.getAttribute("data-verhaal-filter") === activeFilter;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", isActive ? "true" : "false");
      if (isActive && panel) {
        panel.setAttribute("aria-labelledby", tab.id);
      }
    });
  }

  function applyFilter(filter) {
    if (validFilters.indexOf(filter) === -1) {
      filter = "all";
    }

    setActiveTab(filter);

    if (empty) empty.hidden = true;
    if (grid) grid.hidden = false;

    // Uitgelicht blijft altijd zichtbaar (highlight, onafhankelijk van filter)
    if (featured) {
      featured.hidden = false;
    }

    var visibleCount = 0;

    items.forEach(function (item) {
      var type = item.getAttribute("data-verhaal-type");
      var show = filter === "all" || type === filter;
      item.hidden = !show;
      if (show) visibleCount += 1;
    });

    if ((filter === "whitepapers" || filter === "demos") && visibleCount === 0) {
      if (grid) grid.hidden = true;
      if (empty) empty.hidden = false;
      var copy = emptyCopy[filter];
      if (copy && emptyTitle) emptyTitle.textContent = copy.title;
      if (copy && emptyText) emptyText.textContent = copy.text;
    }
  }

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      // Behoud scrollpositie: layoutwissel mag de pagina niet laten springen
      var scrollY = window.scrollY;
      applyFilter(tab.getAttribute("data-verhaal-filter"));
      if (typeof window.scrollTo === "function") {
        window.scrollTo({ top: scrollY, left: 0, behavior: "auto" });
      }
    });
  });

  var initialFilter = "all";
  if (window.location.hash) {
    var hashFilter = window.location.hash.replace("#", "");
    if (validFilters.indexOf(hashFilter) !== -1) {
      initialFilter = hashFilter;
    }
  }

  applyFilter(initialFilter);
})();

/* Subtiele scroll-reveal op subpagina's (niet op homepage fullpage-scroll) */
(function () {
  if (document.body.classList.contains("page-scroll-preview")) return;
  if (!("IntersectionObserver" in window)) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var STAGGER_STEP_MS = 90;
  var STAGGER_CAP_MS = 270;
  var CTA_EXTRA_MS = 200;
  var CTA_SELECTOR =
    ".btn, .cta-feature, .cta-feature__actions, .hero-banner__actions, .contact-mail-cta, .sp-actions";

  var sections = document.querySelectorAll(".section, .cta-feature");
  if (!sections.length) return;

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.1
    }
  );

  var viewportHeight = window.innerHeight || document.documentElement.clientHeight;

  sections.forEach(function (section) {
    var blocks = [];

    Array.prototype.forEach.call(section.children, function (child) {
      // Markup wrappen bijna altijd in .container; unwrappen zodat stagger/CTA-laatst
      // per contentblok werkt i.p.v. één keer per sectie.
      if (child.classList.contains("container")) {
        Array.prototype.forEach.call(child.children, function (inner) {
          blocks.push(inner);
        });
      } else {
        blocks.push(child);
      }
    });

    blocks.forEach(function (el, index) {
      var rect = el.getBoundingClientRect();
      // Above-the-fold blijft zichtbaar: geen .reveal → geen hide-then-show flikkering
      if (rect.top < viewportHeight * 0.9 && rect.bottom > 0) return;

      var delay = Math.min(index * STAGGER_STEP_MS, STAGGER_CAP_MS);
      var isCta =
        (el.matches && el.matches(CTA_SELECTOR)) ||
        (el.querySelector && el.querySelector(CTA_SELECTOR));

      if (isCta) delay += CTA_EXTRA_MS;

      el.classList.add("reveal");
      el.style.transitionDelay = delay + "ms";
      observer.observe(el);
    });
  });
})();

/* Lightbox voor verhaal-screenshots */
(function () {
  var dialog = document.getElementById("verhaal-lightbox");
  if (!dialog || typeof dialog.showModal !== "function") return;

  var image = dialog.querySelector(".lightbox__image");
  var closeBtn = dialog.querySelector("[data-lightbox-close]");
  var lastTrigger = null;

  function openLightbox(trigger) {
    if (!image) return;
    lastTrigger = trigger;
    image.src = trigger.getAttribute("data-lightbox-src") || "";
    image.alt = trigger.getAttribute("data-lightbox-alt") || "";
    dialog.showModal();
    if (closeBtn) closeBtn.focus();
  }

  function closeLightbox() {
    if (!dialog.open) return;
    dialog.close();
  }

  document.addEventListener("click", function (event) {
    var trigger = event.target.closest("[data-lightbox-open]");
    if (!trigger) return;
    event.preventDefault();
    openLightbox(trigger);
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", closeLightbox);
  }

  dialog.addEventListener("click", function (event) {
    if (event.target === dialog) closeLightbox();
  });

  dialog.addEventListener("close", function () {
    if (image) {
      image.removeAttribute("src");
      image.alt = "";
    }
    if (lastTrigger) lastTrigger.focus();
  });
})();
