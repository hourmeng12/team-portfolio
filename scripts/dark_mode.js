const dark__btn = document.getElementById("dark__mode__btn");
dark__btn.addEventListener("click", toggleDarkMode);
const prefer_dark_mode = JSON.parse(localStorage.getItem("prefer_dark_mode"));
if (prefer_dark_mode) {
  document.body.classList.add("dark");
  dark__btn.innerText = "Light";
}

function toggleDarkMode() {
  const body = document.body;
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    dark__btn.innerText = "Dark";
    localStorage.removeItem("prefer_dark_mode");
  } else {
    body.classList.add("dark");
    dark__btn.innerText = "Light";
    localStorage.setItem("prefer_dark_mode", JSON.stringify(true));
  }
}
