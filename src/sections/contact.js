import contactCss from '../css/contact.css';
import locationSvg from '../images/location.svg';
import phoneSvg from '../images/phone.svg';

export default function createContact() {
  //contact
  const contact = document.createElement('div');
  contact.id = 'contact';

  //heading
  const heading = document.createElement('h2');
  heading.innerText = 'Contact Us';
  contact.appendChild(heading);

  //contact div
  const contactDiv = document.createElement('div');
  contactDiv.classList.add('contact-div');
  contact.appendChild(contactDiv);

  //num div
  const numDiv = document.createElement('div');
  numDiv.classList.add('num-div');
  contactDiv.appendChild(numDiv);

  const phoneIcon = document.createElement('img');
  phoneIcon.src = phoneSvg;
  numDiv.appendChild(phoneIcon);

  const phone = document.createElement('span');
  phone.innerHTML = '0123456789';
  numDiv.appendChild(phone);

  //num div
  const locationDiv = document.createElement('div');
  locationDiv.classList.add('location-div');
  contactDiv.appendChild(locationDiv);

  const locationIcon = document.createElement('img');
  locationIcon.src = locationSvg;
  locationDiv.appendChild(locationIcon);

  const location = document.createElement('span');
  location.innerHTML = 'Bhagalpur, Bihar';
  locationDiv.appendChild(location);

  //map div
  const mapDiv = document.createElement('iframe');
  mapDiv.src =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230969.6574528166!2d86.82699700756046!3d25.24026267494902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f049f79910fbc7%3A0x9e3efe37aca8e227!2sBhagalpur%2C%20Bihar!5e0!3m2!1sen!2sin!4v1683013193128!5m2!1sen!2sin';
  mapDiv.setAttribute('loading', 'lazy');
  mapDiv.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
  contactDiv.appendChild(mapDiv);
  return contact;
}
