const hamburgerMenuTag = document.querySelector(".hamburger-menu");
const menuTag = document.querySelector(".menu");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
hamburgerMenuTag.addEventListener("click", () => {
  if (menuTag.classList.contains("showMenu")) {
    line1.classList.remove("rotate45deg");
    line2.classList.remove("disapear");
    line3.classList.remove("rotate-45deg");

    menuTag.classList.remove("showMenu");
  } else {
    line1.classList.add("rotate45deg");
    line2.classList.add("disapear");
    line3.classList.add("rotate-45deg");

    menuTag.classList.add("showMenu");
  }
});
