var menu = document.querySelector(".menulist");
var ham = document.querySelector(".ham");
var xIcon = document.querySelector(".closeicon");
var menuIcon = document.querySelector(".burgericon");
var welcomeW = document.querySelector(".welcome-info");

ham.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    xIcon.style.display = "none";
    menuIcon.style.display = "block";
    welcomeW.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    xIcon.style.display = "block";
    menuIcon.style.display = "none";
    welcomeW.style.display = "none";
  }
}

var menuLinks = document.querySelectorAll(".menulink");

menuLinks.forEach(function (menuLink) {
  menuLink.addEventListener("click", toggleMenu);
});
