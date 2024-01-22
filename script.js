// Hamburger menu
const openButton = document.querySelector(".hamburger-icon");
const closeButton = document.querySelector(".x-mark-icon");
const hamburgerMenu = document.querySelector(".hamburger-menu");

function toggleMenu() {
  const isOpen = closeButton.style.display === "block";

  openButton.style.display = isOpen ? "block" : "none";
  closeButton.style.display = isOpen ? "none" : "block";
  hamburgerMenu.style.display = isOpen ? "none" : "flex";
}

openButton.addEventListener("click", toggleMenu);
closeButton.addEventListener("click", toggleMenu);
