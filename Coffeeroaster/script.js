const hamburger = document.querySelector(".c-hamburger");
const navLinks = document.querySelector(".c-nav_links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".c-nav_links").forEach(n => n.addEventListener ("click", () => {
  hamburger.classList.remove("active");
  navLinks.classList.remove("active");
})  )