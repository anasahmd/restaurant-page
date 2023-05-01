import menuCss from '../css/menu.css';
import espressoImg from '../images/espresso.jpg';
import latteImg from '../images/latte.jpg';
import blackImg from '../images/black.jpg';
import mochaImg from '../images/mocha.jpg';
import capuccinoImg from '../images/capuccino.jpg';

const menuItems = [
  {
    name: 'Espresso',
    description:
      'Bold and intense, our espresso is the perfect pick-me-up for any time of day.',
    price: '10',
    url: espressoImg,
  },
  {
    name: 'Latte',
    description:
      'Satisfy your coffee cravings with our velvety and aromatic latte.',
    price: '15',
    url: latteImg,
  },
  {
    name: 'Black Coffee',
    description:
      'Our rich and flavorful coffee, brewed to perfection and served black for a pure and bold coffee experience',
    price: '8',
    url: blackImg,
  },
  {
    name: 'Mocha',
    description:
      'Our creamy espresso drink blended with chocolate syrup and whipped cream for a decadent treat.',
    price: 12,
    url: mochaImg,
  },
  {
    name: 'Cappuccino',
    description:
      'Our classic Italian coffee creation made with a shot of espresso, steamed milk, and velvety milk foam.',
    price: '18',
    url: capuccinoImg,
  },
];

export default function createMenu() {
  const menu = document.createElement('div');
  menu.id = 'menu';

  const heading = document.createElement('h2');
  heading.innerText = 'Menu';
  menu.appendChild(heading);

  const menuItemsDiv = document.createElement('div');
  menuItemsDiv.classList.add('menu-items');
  menu.appendChild(menuItemsDiv);

  for (let item of menuItems) {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item-div');

    const imgDiv = document.createElement('div');
    imgDiv.classList.add('img-div');
    const img = document.createElement('img');
    img.src = item.url;
    imgDiv.appendChild(img);
    itemDiv.appendChild(imgDiv);

    const textDiv = document.createElement('div');
    textDiv.classList.add('text-div');
    itemDiv.appendChild(textDiv);

    const h3 = document.createElement('h3');
    h3.innerHTML = item.name;
    textDiv.appendChild(h3);

    const para = document.createElement('p');
    para.innerHTML = item.description;
    textDiv.appendChild(para);

    const priceDiv = document.createElement('div');
    priceDiv.innerHTML = '$' + item.price;
    textDiv.appendChild(priceDiv);

    menuItemsDiv.appendChild(itemDiv);
  }

  return menu;
}
