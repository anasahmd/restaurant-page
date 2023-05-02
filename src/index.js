import createHome from './sections/home';
import createMenu from './sections/menu';
import createHeader from './components/header';
import createContact from './sections/contact';
import globalCss from './css/global.css';

document.body.prepend(createHeader());

const content = document.getElementById('content');

const navLi = document.querySelectorAll('.nav-li');

export function renderSection(tab) {
  navLi.forEach((li) => li.classList.remove('active-nav'));

  content.innerHTML = '';
  if (tab == 'Home') {
    content.appendChild(createHome());
    navLi[0].classList.add('active-nav');
  } else if (tab == 'Menu') {
    content.appendChild(createMenu());
    navLi[1].classList.add('active-nav');
  } else if (tab == 'Contact') {
    content.appendChild(createContact());
    navLi[2].classList.add('active-nav');
  }
}

renderSection('Home');
