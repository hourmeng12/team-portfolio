const dark__btn = document.getElementById("dark__mode__btn");
dark__btn.addEventListener("click", () => {
  const body = document.body;
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    dark__btn.innerText = "Dark";
  } else {
    body.classList.add("dark");
    dark__btn.innerText = "Light";
  }
});
