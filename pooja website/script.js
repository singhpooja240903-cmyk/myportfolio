const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

  revealElements.forEach((element) => {

    const windowHeight = window.innerHeight;

    const elementTop = element.getBoundingClientRect().top;

    const revealPoint = 120;

    if (elementTop < windowHeight - revealPoint) {

      element.classList.add("active");

    }

  });

}

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);


// Navbar shadow effect

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {

    navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)";

  }

  else {

    navbar.style.boxShadow = "none";

  }

});


// Smooth button animation

const buttons = document.querySelectorAll(".primary-btn, .secondary-btn");

buttons.forEach((button) => {

  button.addEventListener("mouseenter", () => {

    button.style.transform = "translateY(-4px)";

  });

  button.addEventListener("mouseleave", () => {

    button.style.transform = "translateY(0)";

  });

});