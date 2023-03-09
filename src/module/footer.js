import '../styles/footer.css';

function loadFooter() {
  const content = document.querySelector('.content');

  const footer = document.createElement('footer');
  footer.className = 'footer';

  const copyright = document.createElement('span');
  copyright.textContent = 'Copyright © 2023 AnsonDev. All rights reserved.';
  footer.appendChild(copyright);

  content.appendChild(footer);

}

export default loadFooter;