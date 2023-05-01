import Image from '../images/home.jpg';
import style from '../css/home.css';
import { renderSection } from '..';

export default function createHome() {
  const home = document.createElement('div');
  home.id = 'home';

  const heading = document.createElement('h1');
  heading.innerText = 'Coffee Brew';
  home.appendChild(heading);

  const description = document.createElement('p');
  description.innerText =
    'We serve happiness. Order your favorite coffee from us.';
  home.appendChild(description);

  const order = document.createElement('button');
  order.innerText = 'Order Now';
  order.addEventListener('click', () => {
    renderSection('Menu');
  });
  home.appendChild(order);

  const image = document.createElement('div');
  image.classList.add('image');
  // image.src = Image;
  home.appendChild(image);

  return home;
}
