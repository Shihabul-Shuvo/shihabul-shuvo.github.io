// Figure viewer for publication diagrams: a centred, titled modal (not full screen).
// Each thumbnail is a plain link to the full-size image, so it still works without this script.
(function () {
  var triggers = document.querySelectorAll("a.pub-figure");
  if (!triggers.length || typeof HTMLDialogElement !== "function") return;

  var dialog = document.createElement("dialog");
  dialog.className = "figure-viewer";
  dialog.setAttribute("aria-labelledby", "fv-title");
  dialog.innerHTML =
    '<header class="fv-head">' +
    '<div class="fv-heading"><p class="fv-eyebrow">Architecture figure</p>' +
    '<h2 id="fv-title"></h2><p class="fv-paper"></p></div>' +
    '<button type="button" class="icon-btn fv-close" aria-label="Close figure"><i class="fas fa-xmark" aria-hidden="true"></i></button>' +
    "</header>" +
    '<div class="fv-stage"><img alt="" /></div>' +
    '<footer class="fv-foot"><p class="fv-caption"></p>' +
    '<a class="chip-link chip-ghost fv-full" target="_blank" rel="noopener noreferrer">' +
    '<i class="fas fa-up-right-from-square" aria-hidden="true"></i> Full resolution</a></footer>';
  document.body.appendChild(dialog);

  var image = dialog.querySelector("img");
  var title = dialog.querySelector("#fv-title");
  var paper = dialog.querySelector(".fv-paper");
  var caption = dialog.querySelector(".fv-caption");
  var full = dialog.querySelector(".fv-full");
  var root = document.documentElement;
  var lastTrigger = null;

  function open(trigger) {
    var thumb = trigger.querySelector("img");
    var card = trigger.closest("article");
    var heading = card && card.querySelector("h3");
    var href = trigger.getAttribute("href");
    lastTrigger = trigger;
    image.src = href;
    image.alt = thumb ? thumb.alt : "";
    full.href = href;
    title.textContent = trigger.getAttribute("data-figure-title") || (heading ? heading.textContent.trim() : "");
    paper.textContent = heading ? heading.textContent.replace(/\s+/g, " ").trim() : "";
    paper.hidden = !heading || paper.textContent === title.textContent;
    caption.textContent = trigger.getAttribute("data-figure-caption") || "";
    var scrollbar = window.innerWidth - root.clientWidth;
    root.style.overflow = "hidden";
    if (scrollbar > 0) document.body.style.paddingRight = scrollbar + "px";
    dialog.showModal();
  }

  Array.prototype.forEach.call(triggers, function (trigger) {
    trigger.addEventListener("click", function (event) {
      if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey) return;
      event.preventDefault();
      open(trigger);
    });
  });

  dialog.querySelector(".fv-close").addEventListener("click", function () { dialog.close(); });
  dialog.addEventListener("click", function (event) { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener("close", function () {
    root.style.overflow = "";
    document.body.style.paddingRight = "";
    image.removeAttribute("src");
    if (lastTrigger) lastTrigger.focus({ preventScroll: true });
  });
})();
