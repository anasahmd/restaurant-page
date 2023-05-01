import createHome from './sections/home';
import createMenu from './sections/menu';
import createHeader from './components/header';
import createContact from './sections/contact';
import globalCss from './css/global.css';

document.body.prepend(createHeader());

const content = document.getElementById('content');

export function renderSection(tab) {
  content.innerHTML = '';
  if (tab == 'Home') {
    content.appendChild(createHome());
  } else if (tab == 'Menu') {
    content.appendChild(createMenu());
  } else if (tab == 'Contact') {
    content.appendChild(createContact());
  }
}

content.appendChild(createHome());
