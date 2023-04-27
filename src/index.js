import createHome from './home';
import createMenu from './menu';
import createHeader from './header';
import createContact from './contact';

document.body.prepend(createHeader());

const content = document.getElementById('content');

export function renderSection(tab) {
  content.innerHTML = '';
  if (tab == 'home') {
    content.appendChild(createHome());
  } else if (tab == 'menu') {
    content.appendChild(createMenu());
  } else if (tab == 'contact') {
    content.appendChild(createContact());
  }
}

content.appendChild(createHome());
