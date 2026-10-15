const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector("#mobile-nav");

function closeMenu() {
  if (!menuToggle || !mobileNav) return;

  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
  mobileNav.hidden = true;
}

if (menuToggle && mobileNav) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    menuToggle.setAttribute(
      "aria-label",
      isExpanded ? "Open navigation" : "Close navigation",
    );

    mobileNav.hidden = isExpanded;
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 761px)").matches) {
      closeMenu();
    }
  });
}
