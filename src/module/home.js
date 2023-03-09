import HomeImage from '../images/homeimage.jpg';
import '../styles/home.css';
function loadHome() {
  const content = document.querySelector('.content');

  const home = document.createElement('div');
  home.className = 'home-container';
  const homeImage = new Image();
  homeImage.id = 'HomeImage';
  homeImage.src = HomeImage;

  home.appendChild(homeImage);
  content.appendChild(home);
}

export default loadHome;