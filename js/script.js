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
const itemDetailModals = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

const modalImage = document.querySelector("#modal-image");
const modalTitle = document.querySelector("#modal-title");
const modalDescription = document.querySelector("#modal-description");
const modalStars = document.querySelector("#modal-stars");
const modalPrice = document.querySelector("#modal-price");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    console.log("1. tombol diklik");
    const image = btn.dataset.image;
    const title = btn.dataset.title;
    const description = btn.dataset.description;
    const rating = parseInt(btn.dataset.rating);
    const price = btn.dataset.price;

    modalImage.src = image;
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modalPrice.textContent = price;

    console.log("2. data yang kebaca", {
      image,
      title,
      description,
      rating,
      price,
    });

    // create rating

    modalStars.innerHTML = "";
    for (let i = 1; i <= 5; i++) {
      const star = document.createElement("i");
      star.setAttribute("data-feather", "star");
      if (i <= rating) {
        star.classList.add("star-full");
      }
      modalStars.appendChild(star);
    }
    console.log("3. isi modalStars sebelum feather:", modalStars.innerHTML);

    feather.replace();

    console.log("4. modal mau di tampilkan");
    itemDetailModals.style.display = "flex";
    e.preventDefault();
  };
});

// click x to close
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModals.style.display = "none";
  e.preventDefault();
};

// click di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModals) {
    itemDetailModals.style.display = "none";
  }
};
