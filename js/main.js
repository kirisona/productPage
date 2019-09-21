let order = document.querySelectorAll(".product__order");
const popup = document.getElementById("popup");
const popupClose = document.querySelector(".popup__close");
const form = document.querySelector(".popup__form");

for (let i = 0; i < order.length; i++) {
  order[i].addEventListener("click", function(event) {
    popup.classList.toggle("active");
  });
}

popupClose.addEventListener('click', function(event) {
  popup.classList.toggle("active");
})

popup.addEventListener('click', function(event) {
  let eventClick = event.target;
  if (eventClick === popup && eventClick !== form) {
    popup.classList.remove("active");
  }
});
