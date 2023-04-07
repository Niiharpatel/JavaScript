
window.addEventListener("scroll", function changebar() {

    let menu_f = document.querySelector(".header");
    let nrml = window.scrollY;

    if (nrml > 1) {
        menu_f.classList.add("header-fix");
    } else {
        menu_f.classList.remove("header-fix");

    }
})