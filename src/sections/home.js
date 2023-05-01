import Image from '../images/home.jpg';
import style from '../css/home.css';

export default function createHome() {
  const home = document.createElement('div');
  home.id = 'home';

  const heading = document.createElement('h1');
  heading.innerText = 'Coffee Brew';
  home.appendChild(heading);

  const description = document.createElement('p');
  description.innerText = 'We serve happiness. Order your favorite coffee now.';
  home.appendChild(description);

  const order = document.createElement('a');
  order.innerText = 'Order Now';
  home.appendChild(order);

  const image = document.createElement('div');
  image.classList.add('image');
  // image.src = Image;
  home.appendChild(image);

  return home;
}
