/**
 * Theme change
 */
const body = document.querySelector("body");
const modalBtn = document.querySelector("#modalBtn");
const themeChangeBtn = document.querySelector("#themeChangeBtn");

const checkThemeIcon = function () {
  let iconClassList = themeChangeBtn.classList;
  if (iconClassList.contains("fa-moon")) {
    iconClassList.add("fa-sun");
    iconClassList.remove("fa-moon");
  } else {
    iconClassList.add("fa-moon");
    iconClassList.remove("fa-sun");
  }
};
/** Check previous theme */
let currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : false;

if (currentTheme == "light") {
  body.classList.add("light");
  checkThemeIcon();
} else {
  body.classList.remove("light");
}

themeChangeBtn.onclick = function (event) {
  /* Check theme icon */
  checkThemeIcon();
  /* Change theme */
  let getTheme = localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : false;
  if (getTheme == "light") {
    body.classList.remove(getTheme);
    localStorage.setItem("theme", false);
  } else {
    body.classList.add("light");
    localStorage.setItem("theme", "light");
  }
};

modalBtn.onclick = function (event) {
  console.log(this);
  let modal = document.createElement("div");
  modal.style.height = "300px";
  modal.style.width = "500px";
  modal.style.backgroundColor = "#a8a4a4";
  modal.style.position = "fixed";
  modal.style.left = "50%";
  modal.style.top = "50%";
  modal.style.transform = "translate(-50%, -50%)";
  modal.style.border = "10px solid #bdb5b5";
  body.append(modal);
};
