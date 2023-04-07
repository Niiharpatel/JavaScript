let dip_btn = document.querySelector(".dip_btn");
let nav = document.querySelector(".nav");
let close_btn = document.querySelector(".btn-close");


dip_btn.addEventListener("click", function () {
    nav.classList.add("show_men");
})

close_btn.addEventListener("click", function () {
    nav.classList.remove("show_men");
})