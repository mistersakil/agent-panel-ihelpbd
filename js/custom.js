/**
 * Theme change
 */
const body = document.querySelector("body");
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
  : 12;
console.log(currentTheme);

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
