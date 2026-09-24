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

  // Op "Alle" staan projecten, kennis en demo's door elkaar, niet per soort achter elkaar.
  if (grid) {
    var buckets = { projecten: [], kennis: [], demos: [], whitepapers: [] };
    Array.prototype.forEach.call(grid.querySelectorAll("[data-verhaal-type]"), function (node) {
      var type = node.getAttribute("data-verhaal-type") || "projecten";
      if (!buckets[type]) buckets[type] = [];
      buckets[type].push(node);
    });
    var mixOrder = ["projecten", "kennis", "demos", "whitepapers"];
    var mixed = [];
    var left = true;
    while (left) {
      left = false;
      mixOrder.forEach(function (type) {
        if (buckets[type] && buckets[type].length) {
          mixed.push(buckets[type].shift());
          left = true;
        }
      });
    }
    mixed.forEach(function (node) {
      grid.appendChild(node);
    });
  }
  var empty = document.querySelector("[data-verhalen-empty]");
  var featured = document.querySelector("[data-verhalen-featured]");
  var pager = document.querySelector("[data-verhalen-pager]");
  var dots = pager ? pager.querySelector("[data-verhalen-dots]") : null;
  var searchInput = root.querySelector("[data-verhalen-search]");
  var searchClear = root.querySelector("[data-verhalen-search-clear]");
  var searchEmpty = document.querySelector("[data-verhalen-search-empty]");
  var searchForm = searchInput ? searchInput.closest("form") : null;
  var items = grid ? grid.querySelectorAll("[data-verhaal-type]") : [];
  var pageSize = 6;
  var pageIndex = 0;
  var activeFilter = "all";
  var searchQuery = "";
  var tileMotion = document.body.classList.contains("page-verhalen-test") && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var tilesBooted = false;
  var tileObserver = null;
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

  function matchesQuery(item) {
    if (!searchQuery) return true;
    var hay = (item.textContent || "").toLowerCase();
    var words = searchQuery.toLowerCase().split(/\s+/);
    for (var i = 0; i < words.length; i++) {
      if (words[i] && hay.indexOf(words[i]) === -1) return false;
    }
    return true;
  }

  function clearSearchField() {
    searchQuery = "";
    if (searchInput) searchInput.value = "";
    if (searchClear) searchClear.hidden = true;
  }

  function applyFilter(filter, resetSearch) {
    if (validFilters.indexOf(filter) === -1) {
      filter = "all";
    }

    activeFilter = filter;
    if (resetSearch) clearSearchField();

    setActiveTab(filter);

    if (empty) empty.hidden = true;
    if (searchEmpty) searchEmpty.hidden = true;
    if (grid) grid.hidden = false;

    // Uitgelicht blijft altijd zichtbaar (highlight, onafhankelijk van filter)
    if (featured) {
      featured.hidden = false;
    }

    var visibleCount = 0;
    var matched = [];

    items.forEach(function (item) {
      var type = item.getAttribute("data-verhaal-type");
      var show = (filter === "all" || type === filter) && matchesQuery(item);
      if (pager) {
        item.setAttribute("data-page-match", show ? "true" : "false");
        if (show) matched.push(item);
      } else {
        item.hidden = !show;
      }
      if (show) visibleCount += 1;
    });

    if (pager) {
      pageIndex = 0;
      showPage(matched);
    }

    if (searchQuery && visibleCount === 0) {
      if (grid) grid.hidden = true;
      if (pager) pager.hidden = true;
      if (empty) empty.hidden = true;
      if (searchEmpty) searchEmpty.hidden = false;
      return;
    }

    if ((filter === "whitepapers" || filter === "demos") && visibleCount === 0) {
      var featuredHasType = featured && featured.querySelector('[data-verhaal-type="' + filter + '"]');
      if (grid) grid.hidden = true;
      if (!featuredHasType && empty) {
        empty.hidden = false;
        var copy = emptyCopy[filter];
        if (copy && emptyTitle) emptyTitle.textContent = copy.title;
        if (copy && emptyText) emptyText.textContent = copy.text;
      }
    }
  }

  if (tileMotion && grid && "IntersectionObserver" in window) {
    grid.addEventListener("animationend", function (event) {
      if (event.animationName !== "strip-tile-grow") return;
      var tile = event.target.closest(".strip-tile");
      if (!tile) return;
      tile.classList.add("is-settled");
      tile.style.animationDelay = "0ms";
    });

    var pendingGrow = [];
    var growFrame = 0;

    function flushGrow() {
      growFrame = 0;
      var batch = pendingGrow;
      pendingGrow = [];
      batch.sort(function (a, b) {
        if (a === b) return 0;
        return a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
      });
      batch.forEach(function (item, index) {
        growTile(item, index * 90);
        tileObserver.unobserve(item);
      });
    }

    tileObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting || entry.target.hidden) return;
        if (pendingGrow.indexOf(entry.target) === -1) pendingGrow.push(entry.target);
      });
      if (!growFrame && pendingGrow.length) {
        growFrame = window.requestAnimationFrame(flushGrow);
      }
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
  }

  function growTile(item, delay) {
    var tile = item.querySelector(".strip-tile");
    if (!tile || item.hidden) return;
    tile.style.animationDelay = delay + "ms";
    tile.classList.remove("strip-tile--enter");
    tile.classList.add("is-grown");
  }

  function revealTiles(fast) {
    if (!tileMotion) return;
    if (grid) grid.classList.toggle("is-fast", !!fast);
    var visible = [];
    items.forEach(function (item) {
      var tile = item.querySelector(".strip-tile");
      if (!tile) return;
      tile.classList.remove("is-grown", "is-settled");
      tile.classList.add("strip-tile--enter");
      tile.style.animationDelay = "0ms";
      if (tileObserver) tileObserver.unobserve(item);
      if (!item.hidden) visible.push(item);
    });

    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(function () {
        var step = fast ? 45 : 90;
        var queued = 0;
        visible.forEach(function (item) {
          var rect = item.getBoundingClientRect();
          var inView = rect.bottom > 0 && rect.top < window.innerHeight * 0.92;
          if (fast || inView) {
            growTile(item, Math.min(queued * step, fast ? 180 : 400));
            queued += 1;
          } else if (tileObserver) {
            tileObserver.observe(item);
          }
        });
      });
    });
  }

  function showPage(matched) {
    var pages = Math.ceil(matched.length / pageSize);
    if (pages < 1) {
      pager.hidden = true;
      if (dots) dots.innerHTML = "";
      items.forEach(function (item) {
        if (item.getAttribute("data-page-match") !== "true") item.hidden = true;
      });
      return;
    }

    pager.hidden = pages < 2;
    if (pageIndex > pages - 1) pageIndex = pages - 1;
    if (pageIndex < 0) pageIndex = 0;

    var start = pageIndex * pageSize;
    var end = start + pageSize;
    var matchIndex = 0;

    items.forEach(function (item) {
      if (item.getAttribute("data-page-match") !== "true") {
        item.hidden = true;
        return;
      }
      item.hidden = matchIndex < start || matchIndex >= end;
      matchIndex += 1;
    });

    if (tileMotion) {
      revealTiles(tilesBooted);
      tilesBooted = true;
    }

    if (!dots || pages < 2) {
      if (dots) dots.innerHTML = "";
      return;
    }
    dots.innerHTML = "";
    for (var i = 0; i < pages; i++) {
      var current = i === pageIndex;
      var dot = document.createElement("button");
      dot.type = "button";
      dot.className = "strip-pager__dot" + (current ? " is-active" : "");
      dot.setAttribute("role", "tab");
      dot.setAttribute("data-verhalen-page", String(i));
      dot.setAttribute("aria-label", "Pagina " + (i + 1));
      dot.setAttribute("aria-selected", current ? "true" : "false");
      dots.appendChild(dot);
    }
  }

  function matchedItems() {
    var list = [];
    items.forEach(function (item) {
      if (item.getAttribute("data-page-match") === "true") list.push(item);
    });
    return list;
  }

  if (dots) {
    dots.addEventListener("click", function (event) {
      var dot = event.target.closest("[data-verhalen-page]");
      if (!dot) return;
      pageIndex = parseInt(dot.getAttribute("data-verhalen-page"), 10) || 0;
      showPage(matchedItems());
      if (grid && typeof grid.scrollIntoView === "function") {
        var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        grid.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      }
    });
  }

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      // Behoud scrollpositie: layoutwissel mag de pagina niet laten springen
      var scrollY = window.scrollY;
      applyFilter(tab.getAttribute("data-verhaal-filter"), true);
      if (typeof window.scrollTo === "function") {
        window.scrollTo({ top: scrollY, left: 0, behavior: "auto" });
      }
    });
  });

  if (searchForm) {
    searchForm.addEventListener("submit", function (event) {
      event.preventDefault();
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      searchQuery = searchInput.value.trim();
      if (searchClear) searchClear.hidden = searchInput.value.length === 0;
      applyFilter(activeFilter, false);
    });
  }

  if (searchClear) {
    searchClear.addEventListener("click", function () {
      clearSearchField();
      applyFilter(activeFilter, false);
      if (searchInput) searchInput.focus();
    });
  }

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
