window.addEventListener("load", function () {
  window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");

    if (window.innerWidth > 999) {
      if (window.scrollY > 50) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    } else {
      nav.classList.remove("scrolled");
    }
  });

  const bars = document.querySelector(".bars");
  const close = document.querySelector(".close");
  const navbarMobile = document.querySelector(".mobile-nav");

  bars.addEventListener("click", () => {
    navbarMobile.style.right = "0px";
  });
  close.addEventListener("click", () => {
    navbarMobile.style.right = "-100%";
  });
});
