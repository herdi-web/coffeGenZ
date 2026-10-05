//toggle class active
const navbarNav = document.querySelector(".navbar-nav");
const search = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const shoppingCart = document.querySelector(".shopping-list");

//ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// ketika search di klik
document.querySelector("#search").onclick = (e) => {
  search.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// ketika shopping cart di klik
document.querySelector("#shopping-cart").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// click anywere for hide navigation
const hamburger = document.querySelector("#hamburger-menu");
const seacrhBar = document.querySelector("#search");
const shopList = document.querySelector("#shopping-cart");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!seacrhBar.contains(e.target) && !search.contains(e.target)) {
    search.classList.remove("active");
  }

  if (!shopList.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});
