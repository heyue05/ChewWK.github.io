const navLinks = document.querySelectorAll(".nav-link");

const sections = document.querySelectorAll("main section");

function updateActiveNavigation() {

  const scrollPosition =
    window.scrollY + 160;

  let currentSection = "home";

  sections.forEach((section) => {

    const sectionTop = section.offsetTop;
    const sectionBottom =
      sectionTop + section.offsetHeight;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionBottom
    ) {
      currentSection = section.id;
    }

  });

  navLinks.forEach((link) => {

    link.classList.remove("active");

    const target =
      link.getAttribute("href").replace("#", "");

    if (target === currentSection) {
      link.classList.add("active");
    }

  });

}


window.addEventListener(
  "scroll",
  updateActiveNavigation
);


window.addEventListener(
  "load",
  updateActiveNavigation
);


/* ================= MOBILE MENU ================= */

const menuToggle =
  document.querySelector(".menu-toggle");

const mainNav =
  document.querySelector(".main-nav");


/* Open / close menu */

menuToggle.addEventListener("click", () => {

  mainNav.classList.toggle("active");

});


/* Close menu after selecting a section */

navLinks.forEach((link) => {

  link.addEventListener("click", () => {

    mainNav.classList.remove("active");

  });

});


/* ================= DEMO BUTTONS ================= */

const demoButtons =
  document.querySelectorAll(".demo-button");

const demoImage =
  document.getElementById("demo-image");

demoButtons.forEach((button) => {

  button.addEventListener("click", () => {

    const image =
      button.dataset.image;

    const alt =
      button.dataset.alt;

    // Change screenshot
    demoImage.style.opacity = "0";
    demoImage.style.transform = "scale(0.97)";

    setTimeout(() => {

      demoImage.src = image;
      demoImage.alt = alt;

      demoImage.style.opacity = "1";
      demoImage.style.transform = "scale(1)";

    }, 300);


    // Change active button
    demoButtons.forEach((item) => {
      item.classList.remove("active");
    });

    button.classList.add("active");

  });

});