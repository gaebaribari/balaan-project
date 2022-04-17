'use strict';

const hamburgerBar = document.querySelector(".header_top .fa-bars");
const nav = document.querySelector("#nav")

hamburgerBar.addEventListener("click", () => {
    nav.classList.remove("hidden");
});

const navXBtn = document.querySelector("#nav .fa-times");
navXBtn.addEventListener("click", () => {
    nav.classList.add("hidden");
});

const topBtn = document.querySelector(".top-btn");
topBtn.addEventListener("click",()=> window.scrollTo(0,0))
