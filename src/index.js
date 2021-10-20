import menuCards from './templates/menu-cards.hbs'
import menuList from './menu.json';

const cardItemMenu = menuCards({ menuList });
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const refs = {
    menu: document.querySelector('.js-menu'),
    bodyListener: document.querySelector('body'),
    checkBox: document.getElementById('theme-switch-toggle'),
}

refs.menu.insertAdjacentHTML('beforeend', cardItemMenu);

refs.checkBox.addEventListener('change', themeEvent);
refs.bodyListener.classList.add(Theme.LIGHT)
checkedEvtListener()

function themeEvent() {
    const check = refs.checkBox.checked;
    if (check === true) {
        refs.bodyListener.classList.remove(Theme.LIGHT);
        refs.bodyListener.classList.add(Theme.DARK);
        localStorage.setItem('theme', check)
        return
    }
     refs.bodyListener.classList.remove(Theme.DARK);
     refs.bodyListener.classList.add(Theme.LIGHT);
     localStorage.setItem('theme', check)
   
};

function checkedEvtListener() {
    const savedCheck = JSON.parse(localStorage.getItem('theme'));
    if(savedCheck) {
        refs.checkBox.checked = savedCheck;
        themeEvent()
        }
}


