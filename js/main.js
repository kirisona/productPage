let order = document.querySelectorAll(".product__order");
const popup = document.getElementById("popup");
const popupClose = document.querySelector(".popup__close");
const form = document.querySelector(".popup__form");
const table = document.querySelector("#table");
const bed = document.querySelector("#bed");
const chair = document.querySelector("#chair");
const all = document.querySelector("#all");
let items = document.querySelectorAll(".product__item");

for (let i = 0; i < order.length; i++) {
  order[i].addEventListener("click", function(event) {
    popup.classList.toggle("active");
  });
}

popupClose.addEventListener("click", function(event) {
  popup.classList.toggle("active");
});

popup.addEventListener("click", function(event) {
  let eventClick = event.target;
  if (eventClick === popup && eventClick !== form) {
    popup.classList.remove("active");
  }
});

for (let i = 0; i < items.length; i++) {
  table.addEventListener('click', function(event) {
    if (items[i].classList.contains('table') !== true) {
      items[i].classList.add('none');
    } else {
      items[i].classList.remove('none');
    }
  });

  bed.addEventListener('click', function(event) {
    if (items[i].classList.contains('bed') !== true) {
      items[i].classList.add('none');
    } else {
      items[i].classList.remove('none');
    }
  });

  chair.addEventListener('click', function(event) {
    if (items[i].classList.contains('chair') !== true) {
      items[i].classList.add('none');
    } else {
      items[i].classList.remove('none');
    }
  });

  all.addEventListener('click', function(event) {
    if (items[i].classList.contains('none') === true) {
      items[i].classList.remove('none');
    }
  })
}
