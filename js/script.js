//toggle class active
const navbarNav = document.querySelector(".navbar-nav");
const search = document.querySelector(".search-form");
const shoppingCart = document.querySelector(".shopping-list");

//ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// ketika search di klik
document.querySelector("#search").onclick = () => {
  search.classList.toggle("active");
};

// klik di luar search untuk menghilangkan seacrh bar
const seacrhBar = document.querySelector("#search");

document.addEventListener("click", function (e) {
  if (!seacrhBar.contains(e.target) && !search.contains(e.target)) {
    search.classList.remove("active");
  }
});

// ketika shopping cart di klik
document.querySelector("#shopping-cart").onclick = () => {
  shoppingCart.classList.toggle("active");
};

// klik di luar shopping cart

const shopList = document.querySelector("#shopping-cart");

document.addEventListener("click", function (e) {
  if (!shopList.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});
