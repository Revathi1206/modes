const btnBright = document.querySelector(".bright");
const btnDark = document.querySelector(".dark");

const divBright = document.querySelector(".div--bright");
const divDark = document.querySelector(".div--dark");

btnBright.addEventListener("click", function () {
    divBright.classList.add("active__mode");
    divDark.classList.remove("active__mode");
    btnBright.classList.add("btn--active");
    btnDark.classList.remove("btn--active");
})

btnDark.addEventListener("click", function () {
    divDark.classList.add("active__mode");
    divBright.classList.remove("active__mode");
    btnBright.classList.remove("btn--active");
    btnDark.classList.add("btn--active");
})