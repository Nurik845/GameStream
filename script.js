const toggle = document.getElementById("theme-toggle");

window.addEventListener("load", () => {
  const theme = localStorage.getItem("theme");
  if (theme === "light") {
    document.body.classList.add("light-theme");
  } else {
    document.body.classList.remove("light-theme");
  }
});

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  if (document.body.classList.contains("light-theme")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
});
