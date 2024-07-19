const nav = document.querySelector("#js-nav");
const ham = document.querySelector("#js-hamburger");
ham.addEventListener("click", () => {
  ham.classList.toggle("active");
  nav.classList.toggle("active");
});