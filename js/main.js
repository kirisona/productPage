let order = document.querySelectorAll(".product__order");
const popup = document.getElementById("popup");
const popupClose = document.querySelector(".popup__close");
const form = document.querySelector(".popup__form");



// for (let i = 0; i < order.length; i++) {
//   order[i].addEventListener('click', function(event) {

//     popup.style.display = 'block';
//   });

//   form.addEventListener('click', function(event) {
//     if (!event.target && !order[i]) {
//       popup.style.display = 'none';
//     }
//   })
// }

// popupClose.addEventListener('click', function(event) {
//   popup.style.display = 'none';
// })

for (let i = 0; i < order.length; i++) {
  order[i].addEventListener("click", function(event) {
    popup.classList.toggle("active");
  });
}

popupClose.addEventListener('click', function(event) {
  popup.classList.toggle("active");
})
