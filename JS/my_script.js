document.addEventListener("DOMContentLoaded", function () {
  // -----------------------------
  // Floating objects
  // -----------------------------
  function createFloatingObject() {
    const object = document.createElement("div");
    object.classList.add("floating-object");

    // Set random size
    const size = Math.floor(Math.random() * 351) + 10; // 10..360
    object.style.width = `${size}px`;
    object.style.height = `${size}px`;

    // Set initial position
    const initialX = Math.random() * window.innerWidth;
    const initialY = Math.random() * window.innerHeight;
    object.style.left = `${initialX}px`;
    object.style.top = `${initialY}px`;

    // Background layer
    object.style.zIndex = -1;

    const container = document.getElementById("floating-objects-container");
    if (!container) return;

    container.appendChild(object);
    animateBackAndForth(object);
  }

  function animateBackAndForth(object) {
    const speedX = 1.5;
    const speedY = 1.5;
    let directionX = 1;
    let directionY = 1;

    function moveObject() {
      const rect = object.getBoundingClientRect();
      let newX = rect.left + speedX * directionX;
      let newY = rect.top + speedY * directionY;

      if (newX < 10 || newX + rect.width > window.innerWidth) directionX *= -1;
      if (newY < 10 || newY + rect.height > window.innerHeight) directionY *= -1;

      newX = Math.max(0, Math.min(newX, window.innerWidth - rect.width));
      newY = Math.max(0, Math.min(newY, window.innerHeight - rect.height));

      object.style.left = `${newX}px`;
      object.style.top = `${newY}px`;

      requestAnimationFrame(moveObject);
    }

    requestAnimationFrame(moveObject);
  }

  const numberOfObjects = 4;
  for (let i = 0; i < numberOfObjects; i++) {
    createFloatingObject();
  }

  // -----------------------------
  // Mobile dropdown nav (FIXED)
  // -----------------------------
  const nav = document.querySelector("nav");
  const toggle = document.querySelector(".nav-toggle");
  const menuLinks = document.querySelectorAll(".navItem a");

  if (nav && toggle) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 600) {
          nav.classList.remove("nav-open");
          toggle.setAttribute("aria-expanded", "false");
        }
      });
    });
  }
});
