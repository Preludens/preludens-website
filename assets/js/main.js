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

    // Uitgelichte (project)verhalen alleen tonen bij "alle" of "projecten"
    if (featured) {
      featured.hidden = !(filter === "all" || filter === "projecten");
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
      applyFilter(tab.getAttribute("data-verhaal-filter"));
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

(function () {
  var forms = document.querySelectorAll("[data-mailto-form]");
  if (!forms.length) return;

  forms.forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var to = form.getAttribute("action") || "mailto:info@preludens.nl";
      var naam = (form.querySelector('[name="naam"]') || {}).value || "";
      var email = (form.querySelector('[name="email"]') || {}).value || "";
      var organisatie = (form.querySelector('[name="organisatie"]') || {}).value || "";
      var bericht = (form.querySelector('[name="bericht"]') || {}).value || "";
      var subject = encodeURIComponent("Contact via preludens.nl — " + (naam || "nieuwe aanvraag"));
      var body = encodeURIComponent(
        "Naam: " + naam + "\n" +
        "E-mail: " + email + "\n" +
        "Organisatie: " + organisatie + "\n\n" +
        bericht
      );
      window.location.href = to + "?subject=" + subject + "&body=" + body;
    });
  });
})();
