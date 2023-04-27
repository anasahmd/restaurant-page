export default function createMenu() {
  const menu = document.createElement('div');
  menu.id = 'menu';

  const heading = document.createElement('h1');
  heading.innerText = 'This is menu';
  menu.appendChild(heading);

  return menu;
}
