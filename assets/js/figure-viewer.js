// Click-to-enlarge viewer for publication figures. Each thumbnail is a plain link
// to the full-size image, so it still works if this script does not run.
(function () {
  var triggers = document.querySelectorAll("a.pub-figure");
  if (!triggers.length || typeof HTMLDialogElement !== "function") return;

  var dialog = document.createElement("dialog");
  dialog.className = "figure-viewer";
  dialog.setAttribute("aria-labelledby", "figure-viewer-caption");
  dialog.innerHTML =
    '<div class="figure-viewer-inner">' +
    '<button type="button" class="icon-btn figure-viewer-close" aria-label="Close figure viewer">' +
    '<i class="fas fa-xmark" aria-hidden="true"></i></button>' +
    '<figure><img alt="" /><figcaption id="figure-viewer-caption"></figcaption></figure>' +
    "</div>";
  document.body.appendChild(dialog);

  var image = dialog.querySelector("img");
  var caption = dialog.querySelector("figcaption");
  var root = document.documentElement;
  var lastTrigger = null;

  function open(trigger) {
    var thumb = trigger.querySelector("img");
    lastTrigger = trigger;
    image.src = trigger.getAttribute("href");
    image.alt = thumb ? thumb.alt : "";
    caption.textContent = trigger.getAttribute("data-figure-caption") || "";
    // Lock page scroll without moving the page or shifting the layout.
    var scrollbar = window.innerWidth - root.clientWidth;
    root.style.overflow = "hidden";
    if (scrollbar > 0) document.body.style.paddingRight = scrollbar + "px";
    dialog.showModal();
  }

  Array.prototype.forEach.call(triggers, function (trigger) {
    trigger.addEventListener("click", function (event) {
      // Leave ctrl/cmd/shift/middle clicks to the browser (open in new tab).
      if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey) return;
      event.preventDefault();
      open(trigger);
    });
  });

  dialog.querySelector(".figure-viewer-close").addEventListener("click", function () {
    dialog.close();
  });

  // Clicks on the dimmed area outside the panel report the dialog itself as target.
  dialog.addEventListener("click", function (event) {
    if (event.target === dialog) dialog.close();
  });

  // Fires for the close button, Escape and backdrop clicks alike.
  dialog.addEventListener("close", function () {
    root.style.overflow = "";
    document.body.style.paddingRight = "";
    image.removeAttribute("src");
    if (lastTrigger) lastTrigger.focus({ preventScroll: true });
  });
})();
