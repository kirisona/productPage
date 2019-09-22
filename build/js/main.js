let order = document.querySelectorAll(".product__order");
const popup = document.getElementById("popup");
const popupClose = document.querySelector(".popup__close");
const form = document.querySelector(".popup__form");
const table = document.querySelector("#table");
const bed = document.querySelector("#bed");
const chair = document.querySelector("#chair");
const all = document.querySelector("#all");
let items = document.querySelectorAll(".product__item");
let name = document.getElementById("name");
let surname = document.getElementById("surname");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let password = document.getElementById("password");
let passwordConfirm = document.getElementById("confirm_password");

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
  table.addEventListener("click", function(event) {
    if (items[i].classList.contains("table") !== true) {
      items[i].classList.add("none");
    } else {
      items[i].classList.remove("none");
    }
  });

  bed.addEventListener("click", function(event) {
    if (items[i].classList.contains("bed") !== true) {
      items[i].classList.add("none");
    } else {
      items[i].classList.remove("none");
    }
  });

  chair.addEventListener("click", function(event) {
    if (items[i].classList.contains("chair") !== true) {
      items[i].classList.add("none");
    } else {
      items[i].classList.remove("none");
    }
  });

  all.addEventListener("click", function(event) {
    if (items[i].classList.contains("none") === true) {
      items[i].classList.remove("none");
    }
  });
}

name.oninvalid = function(event) {
  event.target.setCustomValidity("Name should only contain letters. e.g. John");
};

surname.oninvalid = function(event) {
  event.target.setCustomValidity(
    "Surname should only contain letters. e.g. John"
  );
};

phone.oninvalid = function(event) {
  event.target.setCustomValidity(
    "Phonenumber should only contain numbers. e.g. 380999999999"
  );
};

email.oninvalid = function(event) {
  event.target.setCustomValidity(
    "Email should be similar like product@gmail.com"
  );
};

form.addEventListener("submit", submitForm);

function submitForm(event) {
  if (password.value !== passwordConfirm.value) {
    alert("Password and password confirmation do not match. Please try again");
    form.removeEventListener("submit", submitForm);
  } else {
    alert(
      "Thank you for your order. Our consultant will contact you within two hours."
    );
  }
}
