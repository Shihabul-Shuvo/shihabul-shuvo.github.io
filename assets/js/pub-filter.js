// Publication filters: status chips and venue cards. Without this script every paper is shown.
(function () {
  var buttons = document.querySelectorAll("[data-filter]");
  var cards = document.querySelectorAll(".pub-card");
  var groups = document.querySelectorAll(".pub-group");
  var status = document.querySelector(".filter-status");
  // "Key results" toggles: lists are visible without JS, collapsed once this runs.
  Array.prototype.forEach.call(document.querySelectorAll(".results-toggle"), function (t) {
    var list = document.getElementById(t.getAttribute("aria-controls"));
    if (!list) return;
    list.hidden = true;
    t.setAttribute("aria-expanded", "false");
    t.addEventListener("click", function () {
      var open = t.getAttribute("aria-expanded") !== "true";
      t.setAttribute("aria-expanded", open ? "true" : "false");
      list.hidden = !open;
    });
  });

  if (!buttons.length || !cards.length) return;

  function matches(card, filter) {
    if (filter === "all") return true;
    if (filter === "first") return card.dataset.first === "true";
    var parts = filter.split(":");
    return card.dataset[parts[0]] === parts[1];
  }

  function apply(filter) {
    var shown = 0;
    Array.prototype.forEach.call(cards, function (card) {
      var ok = matches(card, filter);
      card.hidden = !ok;
      if (ok) shown++;
    });
    Array.prototype.forEach.call(groups, function (group) {
      group.hidden = !group.querySelector(".pub-card:not([hidden])");
    });
    Array.prototype.forEach.call(buttons, function (b) {
      b.setAttribute("aria-pressed", b.dataset.filter === filter ? "true" : "false");
    });
    if (status) {
      status.innerHTML = filter === "all" ? "" :
        "Showing " + shown + " of " + cards.length + ' &middot; <button type="button" class="filter-clear">Show all</button>';
      var clear = status.querySelector(".filter-clear");
      if (clear) clear.addEventListener("click", function () { apply("all"); });
    }
  }

  Array.prototype.forEach.call(buttons, function (b) {
    b.addEventListener("click", function () {
      // Clicking the active venue again clears it.
      var f = b.dataset.filter;
      apply(b.getAttribute("aria-pressed") === "true" && f !== "all" ? "all" : f);
    });
  });
})();
