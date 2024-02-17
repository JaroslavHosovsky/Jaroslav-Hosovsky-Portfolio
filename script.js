// Hamburger menu
const menuBtn = document.querySelector(".menu-btn");
const hamburgerMenu = document.querySelector(".hamburger-menu");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    hamburgerMenu.style.top = "65px";
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    hamburgerMenu.style.top = "-425px";
    menuOpen = false;
  }
});
