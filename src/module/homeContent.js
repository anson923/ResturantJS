import FoodImage from '../images/foodImage.jpg';

function HomeContent() {
  const floater = document.querySelector('.floater');

  const imgContainer = document.createElement('div');
  imgContainer.id = 'ImageContainer';
  const foodImage = new Image();
  foodImage.id = 'HomeFoodImage';
  foodImage.src = FoodImage;
  imgContainer.appendChild(foodImage);

  const homeText = document.createElement('div');
  homeText.id = 'HomeText';
  homeText.innerHTML = `Spicy Island specializes in vibrant spicy cuisine from various regions, featuring a tropical ambiance and fresh, high-quality ingredients. <br><br>The menu offers fiery curries, tangy salsas, and more, with something for everyone. <br><br>Enjoy refreshing cocktails alongside lively atmosphere and friendly service for a memorable dining experience.`;

  floater.appendChild(imgContainer);
  floater.appendChild(homeText);
}

export default HomeContent;