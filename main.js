const buyBtns = document.querySelectorAll(".js-buy-tickets");
const modal = document.querySelector(".js-modal");
const closeBtns = document.querySelectorAll(".js-modal-close");
const modalContainer = document.querySelector(".js-modal-container");
const menuBtn = document.querySelector(".header-bars");
const headerItems = document.querySelector(".header__items");
function showBuyTickets() {
  modal.classList.add("open");
}
function closeBuyTickets() {
  modal.classList.remove("open");
}

for (const buyBtn of buyBtns) {
  buyBtn.addEventListener("click", showBuyTickets);
}
for (const closeBtn of closeBtns) {
  closeBtn.addEventListener("click", closeBuyTickets);
}
modal.addEventListener("click", closeBuyTickets);
modalContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});
menuBtn.onclick = function () {
  headerItems.classList.toggle("show-menu");
};
