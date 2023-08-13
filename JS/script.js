"use strict";

const header = document.querySelector(".header");
const btnsNav = document.querySelectorAll(".icon-mobile-nav");

for (let i = 0; i < btnsNav.length; i++) {
  btnsNav[i].addEventListener("click", function () {
    if (i === 0) {
      header.classList.add("nav-open");
    } else {
      header.classList.remove("nav-open");
    }
  });
}
