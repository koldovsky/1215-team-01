function toggleBurgerMenu() {
  const menu = document.querySelector(".navbar__menu");
  menu.classList.toggle("navbar__menu--active");

  const burgerMenu = document.querySelector(".w-burger__inner");
  burgerMenu.classList.toggle("active");

  const navbar = document.querySelector(".navbar");

  const body = document.querySelector("body");
  body.classList.toggle("overflow-hidden");

  if (menu.classList.contains("navbar__menu--active")) {
    navbar.style.backgroundColor = "#2a2824";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
}
