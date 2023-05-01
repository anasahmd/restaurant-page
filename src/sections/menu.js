const menuItems = [
  {
    name: 'Espresso',
    description:
      'Bold and intense, our espresso is the perfect pick-me-up for any time of day.',
    price: '10',
  },
  {
    name: 'Latte',
    description:
      'Satisfy your coffee cravings with our velvety and aromatic latte.',
    price: '15',
  },
  {
    name: 'Black Coffee',
    description:
      'Our rich and flavorful coffee, brewed to perfection and served black for a pure and bold coffee experience',
    price: '8',
  },
  {
    name: 'Mocha',
    description:
      'Our creamy espresso drink blended with chocolate syrup and whipped cream for a decadent treat.',
    price: '12',
  },
  {
    name: 'Cappuccino',
    description:
      'Our classic Italian coffee creation made with a shot of espresso, steamed milk, and velvety milk foam.',
    price: '18',
  },
];

export default function createMenu() {
  const menu = document.createElement('div');
  menu.id = 'menu';

  const heading = document.createElement('h1');
  heading.innerText = 'This is menu';
  menu.appendChild(heading);

  const menuItemsDiv = document.createElement('div');
  menuItemsDiv.classList.add('menu-items');
  menu.appendChild(menuItemsDiv);

  for (let item of menuItems) {
    const itemDiv = document.createElement('div');

    const h3 = document.createElement('h3');
    h3.innerHTML = item.name;
    itemDiv.appendChild(h3);

    const para = document.createElement('p');
    para.innerHTML = item.description;
    itemDiv.appendChild(para);

    const priceDiv = document.createElement('div');
    priceDiv.innerHTML = item.price;
    itemDiv.appendChild(priceDiv);

    menuItemsDiv.appendChild(itemDiv);
  }

  return menu;
}
