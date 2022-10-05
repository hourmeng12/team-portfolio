const dark__btn = document.getElementById("dark__mode__btn");
dark__btn.addEventListener("click", toggleDarkMode);
const prefer_dark_mode = JSON.parse(localStorage.getItem("prefer_dark_mode"));
if (prefer_dark_mode) {
  document.body.classList.add("dark");
  dark__btn.checked = true;
  document
    .querySelectorAll(".icon")
    .forEach((i) => i.classList.add("white-icons"));
}

function toggleDarkMode() {
  const body = document.body;
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    localStorage.removeItem("prefer_dark_mode");
    document
      .querySelectorAll(".icon")
      .forEach((i) => i.classList.remove("white-icons"));
  } else {
    body.classList.add("dark");
    localStorage.setItem("prefer_dark_mode", JSON.stringify(true));
    document
      .querySelectorAll(".icon")
      .forEach((i) => i.classList.add("white-icons"));
  }
}
