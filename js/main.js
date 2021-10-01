// "use strict";
let searchIcon = document.querySelector(".form__search-toggler");
let searchInput = document.querySelector(".form__search-input");

searchIcon.addEventListener('click', () => {
  console.log("sd");
  searchInput.classList.toggle("open")
  searchIcon.classList.toggle("form__search-toggler-open")
})
