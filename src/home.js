import Image from './image.jpg';

export default function createHome() {
  const home = document.createElement('div');
  home.id = 'home';

  const heading = document.createElement('h1');
  heading.innerText = 'Biryani Mahal';
  home.appendChild(heading);

  const image = document.createElement('img');
  image.src = Image;
  home.appendChild(image);

  return home;
}
