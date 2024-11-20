const $html = document.querySelector("html");
const $checkbox = document.querySelector("#theme-switch");

$checkbox.addEventListener("change", function () {
    $html.classList.toggle("dark-mode");
});
