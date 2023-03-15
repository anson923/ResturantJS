import '../styles/header.css';
import Logo from '../images/resLogo.png';

function loadHeader() {
  const content = document.querySelector('.content');
  const header = document.createElement('header');
  
  const logoPlaceholder = document.createElement('div');
  logoPlaceholder.className = 'logoPlaceholder';
  const logo = new Image();
  logo.className = 'logoImage';
  logo.src = Logo;

  logoPlaceholder.appendChild(logo);
  header.appendChild(logoPlaceholder);

  const navbar = document.createElement('nav');
  navbar.innerHTML = `
  <ul class="links">
    <li class="tab active" data-tab-target="#home">Home</li>
    <li class="tab" data-tab-target="#menu">Menu</li>
    <li class="tab" data-tab-target="#contact">Contact</li>
  </ul>`;

  header.appendChild(navbar);

  content.appendChild(header);
}

export default loadHeader;