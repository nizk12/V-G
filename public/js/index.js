let scrollController = document.querySelector(".cards");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", () => {
  scrollController.style.scrollBehavior = "smooth";
  scrollController.scrollLeft += 453;
});

backBtn.addEventListener("click", () => {
  scrollController.style.scrollBehavior = "smooth";
  scrollController.scrollLeft -= 453;
});

// Mail Function
const contactForm = document.querySelector(".contact-form");
let name = document.getElementById("name");
let email = document.getElementById("email");
let dropdown = document.getElementById("category");
let message = document.getElementById("message");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let formData = {
    name: name.value,
    email: email.value,
    dropdown: dropdown.value,
    message: message.value,
  };

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:5000");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.onload = function () {
    console.log(xhr.responseText);
    if (xhr.responseText == "success") {
      openPopup();
      name.value = "";
      email.value = "";
      dropdown.value = "";
      message.value = "";
    } else {
      alert("Something went worng");
    }
  };
  xhr.send(JSON.stringify(formData));
});

// Pop Up
let popup = document.getElementById("popup");

function openPopup() {
  popup.classList.add("open-popup");
  popup.style.display = "block";
  setTimeout(function () {
    popup.style.display = "none";
  }, 3000);
}
