import HomeImage from '../images/homeimage.jpg';
import FoodImage from '../images/FoodImage.jpg';
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



  const floater = document.createElement('div');
  floater.className = 'floater';
  home.appendChild(floater);

  const imgContainer = document.createElement('div');
  imgContainer.id = 'ImageContainer';
  const foodImage = new Image();
  foodImage.id = 'FoodImage';
  foodImage.src = FoodImage;
  imgContainer.appendChild(foodImage);

  const homeText = document.createElement('div');
  homeText.id = 'HomeText';
  homeText.innerHTML = `Spicy Island specializes in vibrant spicy cuisine from various regions, featuring a tropical ambiance and fresh, high-quality ingredients. <br><br>The menu offers fiery curries, tangy salsas, and more, with something for everyone. <br><br>Enjoy refreshing cocktails alongside lively atmosphere and friendly service for a memorable dining experience.`;

  floater.appendChild(imgContainer);
  floater.appendChild(homeText);

}

export default loadHome;