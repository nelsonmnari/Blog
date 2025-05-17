document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
});

function navigate(page) {
  window.location.href = page;
}