//toggle class active
const navbarNav = document.querySelector(".navbar-nav");
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const shoppingList = document.querySelector(".shopping-list");

//ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// ketika search di klik
document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// ketika shopping cart di klik
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingList.classList.toggle("active");
  e.preventDefault();
};

// click anywere for hide navigation
const hamburgerBtn = document.querySelector("#hamburger-menu");
const seacrhBtn = document.querySelector("#search-button");
const cartBtn = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hamburgerBtn.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!seacrhBtn.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!cartBtn.contains(e.target) && !shoppingList.contains(e.target)) {
    shoppingList.classList.remove("active");
  }
});

// modal box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// click x to close
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// click di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
