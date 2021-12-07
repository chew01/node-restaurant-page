import bg from "./assets/bg.jpg";
import home from "./pages/homePage.js";
import menu from "./pages/menuPage.js";
import contact from "./pages/contactPage.js";
import './style.css';

const content = document.querySelector("#content");

const nav = (() => {
  const header = document.createElement("div");
  header.classList.add("nav");
  const navbar = document.createElement("ul");

  const homeButton = document.createElement("li");
  const homeLink = document.createElement("a");
  homeLink.textContent = "Home";
  homeLink.setAttribute("href", "#");
  homeButton.appendChild(homeLink);

  const menuButton = document.createElement("li");
  const menuLink = document.createElement("a");
  menuLink.textContent = "Menu";
  menuLink.setAttribute("href", "#");
  menuButton.appendChild(menuLink);

  const contactButton = document.createElement("li");
  const contactLink = document.createElement("a");
  contactLink.textContent = "Contact";
  contactLink.setAttribute("href", "#");
  contactButton.appendChild(contactLink);

  navbar.appendChild(homeButton);
  navbar.appendChild(menuButton);
  navbar.appendChild(contactButton);

  header.appendChild(navbar);

  return {header, homeButton, menuButton, contactButton};
})();

const footer = (() => {
    const bar = document.createElement("div");
    bar.classList.add("footer");
    
    const credit = document.createElement("p");
    credit.textContent = "Credit to whoever it is";

    bar.appendChild(credit);

    return {bar};
})();

content.appendChild(nav.header);
const mainContainer = document.createElement("div");
mainContainer.classList.add("container")
mainContainer.appendChild(home.page);
content.appendChild(mainContainer);
content.appendChild(footer.bar);

const loadHome = () => {
    mainContainer.removeChild(mainContainer.lastChild);
    mainContainer.appendChild(home.page);
}

const loadMenu = () => {
    mainContainer.removeChild(mainContainer.lastChild);
    mainContainer.appendChild(menu.page);
}

const loadContact = () => {
    mainContainer.removeChild(mainContainer.lastChild);
    mainContainer.appendChild(contact.page);
}

nav.homeButton.addEventListener("click", loadHome);
nav.menuButton.addEventListener("click", loadMenu);
nav.contactButton.addEventListener("click", loadContact);