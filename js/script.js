var menu = document.querySelector(".main-navigation");
var btnClosedMenu = document.querySelector(".header-button");
var btnOpenedMenu = document.querySelector(".header-button-up");
var menuItemActive = menu.querySelector(".main-navigation__link--now");
var menuItemCross = menu.querySelector(".main-navigation__link--active");

// menu.classList.add("main-navigation--closed");

btnClosedMenu.addEventListener("click", function(evt) {
  evt.preventDefault();
  menu.classList.remove("main-navigation--closed");
  btnClosedMenu.classList.add("header-button--closed");
  btnOpenedMenu.classList.add("header-button-up--active");
});

btnOpenedMenu.addEventListener("click", function(evt) {
  evt.preventDefault();
  menu.classList.add("main-navigation--closed");
  btnClosedMenu.classList.remove("header-button--closed");
  btnOpenedMenu.classList.remove("header-button-up--active");
});

menuItemCross.addEventListener("click", function(evt) {
  evt.preventDefault();
  menu.classList.add("main-navigation--closed");
  btnClosedMenu.classList.remove("header-button--closed");
  btnOpenedMenu.classList.remove("header-button-up--active");
});

menuItemActive.addEventListener("click", function (evt) {
  evt.preventDefault();
});
