import Image from './image.jpg';

const content = document.getElementById('content');

function createIndex() {
  const index = document.createElement('div');
  index.id = 'index';

  const heading = document.createElement('h1');
  heading.innerText = 'Biryani Mahal';
  index.appendChild(heading);

  const image = document.createElement('img');
  image.src = Image;
  index.appendChild(image);

  return index;
}

document.getElementById('content').appendChild(createIndex());
