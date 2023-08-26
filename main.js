const navToggleBtn = document.querySelector(".nav-toggle-btn");
const navContainer = document.querySelector(".nav-container");
const navItemContainer = document.querySelector(".nav-item-container");

navToggleBtn.addEventListener("click", () => {
  handleToggleNavbar();
});

function handleToggleNavbar() {
  navContainer.classList.toggle("show");
  navItemContainer.classList.toggle("show");
}

const navItemLinks = document.querySelectorAll(".nav-item-link");

navItemLinks.forEach((navItemLink) => {
  navItemLink.addEventListener("click", () => {
    handleRemoveActivatedLink();
    navItemLink.classList.add("active");
    handleToggleNavbar();
  });
});

function handleRemoveActivatedLink() {
  navItemLinks.forEach((navItemLink) => {
    navItemLink.classList.remove("active");
  });
}
