//Global Variables
const menu = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

//the function of building the navbar
function buildNavbar() {
  for (const section of sections) {
    const link = section.getAttribute("id");
    const title = section.getAttribute("data-nav");

    //create item for each section
    const listItem = document.createElement("li");
    listItem.innerHTML = `<a class= "menu__link  " href="#${link}" >${title}</a>`;
    menu.appendChild(listItem);

    //scrollig
    listItem.addEventListener("click", (e) => {
      e.preventDefault();
      section.scrollIntoView({
        behavior: "smooth",
      });
    });
  }
}



//Different apperance to the viewed section

window.onscroll = function () {
  document.querySelectorAll("section").forEach(function (active) {
    let activeLink = menu.querySelector(`[data-nav=${active.id}]`);
    if (
      active.getBoundingClientRect().top >= -400 &&
      active.getBoundingClientRect().top <= 150
    ) {
      active.classList.add("your-active-class");
      activeLink.classList.add("active-link");
    } else {
      active.classList.remove("your-active-class");
      
    }
  });
};

window.addEventListener("load", buildNavbar);
document.addEventListener("scroll", activeSection);

