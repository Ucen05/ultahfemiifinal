// toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar navbar untuk menghilangkan nav
document.addEventListener("click", function (e) {
  // periksa apakah klik dilakukan di luar navbar dan hamburger menu
  if (
    !document.querySelector("#hamburger-menu").contains(e.target) &&
    !navbarNav.contains(e.target)
  ) {
    navbarNav.classList.remove("active");
  }
});
