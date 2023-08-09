import './style.css';
import header from './header.js';
import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';

class restaurantPage {
  #content = document.querySelector('#content');
  #homeContent;
  #menuContent;
  #contactContent;

  constructor() {
    const menuTab = () => {
      const menuTab = this.#createTab('Menu');
      menuTab.addEventListener('click', () => {
        this.#menuPage();
      });
      return menuTab;
    }
    const contactTab = () => {
      const contactTab = this.#createTab('Contact');
      contactTab.addEventListener('click', () => {
        this.#contactPage();
      });
      return contactTab;
    }
    const homeTab = () => {
      const homeTab = this.#createTab('Home');
      homeTab.addEventListener('click', () => {
        this.#homePage();
      });
      return homeTab;
    };

    this.#homeContent = [
      header([menuTab(), contactTab()]),
      home(),
    ];
    this.#menuContent = [
      header([homeTab(), contactTab()]),
      menu(),
    ];
    this.#contactContent = [
      header([homeTab(), menuTab()]),
      contact(),
    ];

    this.#homePage();
  }

  #createTab(tabName) {
    const tab = document.createElement('p');
    tab.classList.add('tab');
    tab.textContent = tabName;
    return tab;
  }

  #delete() {
    while (this.#content.firstChild) {
      this.#content.firstChild.remove();
    }
  }

  #homePage() {
    this.#delete();
    this.#homeContent.forEach(item => {
      this.#content.appendChild(item);
    });
  }

  #menuPage() {
    this.#delete();
    this.#menuContent.forEach(item => {
      this.#content.appendChild(item);
    });
  }

  #contactPage() {
    this.#delete();
    this.#contactContent.forEach(item => {
      this.#content.appendChild(item);
    });
  }
}

const page = new restaurantPage();
