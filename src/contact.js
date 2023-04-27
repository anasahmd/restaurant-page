export default function createContact() {
  const contact = document.createElement('div');
  contact.id = 'contact';

  const heading = document.createElement('h1');
  heading.innerText = 'This is contact';
  contact.appendChild(heading);

  return contact;
}
