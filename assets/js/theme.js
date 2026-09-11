// Must run in <head>, synchronously, before first paint — avoids a flash of the wrong theme.

let setTheme = (theme) => {
  if (theme) {
    document.documentElement.setAttribute("data-theme", theme);
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
  localStorage.setItem("theme", theme);
};

let toggleTheme = () => {
  const current = localStorage.getItem("theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.classList.add("no-transition");
  setTheme(next);
  requestAnimationFrame(() => {
    requestAnimationFrame(() => document.documentElement.classList.remove("no-transition"));
  });
};

let initTheme = (theme) => {
  if (theme == null) {
    const userPref = window.matchMedia;
    if (userPref && userPref("(prefers-color-scheme: dark)").matches) {
      theme = "dark";
    } else {
      theme = "light";
    }
  }
  setTheme(theme);
};

initTheme(localStorage.getItem("theme"));
