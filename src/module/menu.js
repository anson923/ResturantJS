import '../styles/menu.css';
import SpicyBurger from '../images/spicyBurger.jpeg';
import SpicySpaghetti from '../images/spicySpaghetti.jpg';
import SpicySalmonRoll from '../images/spicySalmonRoll.jpg';
import SpicyKatsuRamen from '../images/SpicyKatsuRamen.jpg';
import SpicyRice from '../images/SpicyRice.jpeg';
import SpicyChicken from '../images/SpicyChicken.jpg';
import SpicyTurkeySandwich from '../images/SpicyTurkeySandwich.jpg';
import SpicyChickenSoup from '../images/SpicyChickenSoup.jpg';
import SpicySausagePizza from '../images/SpicySausagePizza.jpg';
import SpicyKoreanPork from '../images/SpicyKoreanPork.jpg';

const FoodLibrary = [
  {name: 'Spicy Burger', id: 1, price: 12.99, src:SpicyBurger},
  {name: 'Spicy Spaghetti', id: 2, price: 18.99, src: SpicySpaghetti},
  {name: 'Spicy Salmon Roll', id: 3, price: 15.99, src: SpicySalmonRoll},
  {name: 'Spicy Katsu Ramen', id: 4, price: 20.99, src: SpicyKatsuRamen},
  {name: 'Spicy Rice', id: 5, price: 13.99, src: SpicyRice},
  {name: 'Spicy Chicken', id: 6, price: 22.99, src: SpicyChicken},
  {name: 'Spicy Turkey Sandwich', id: 7, price: 19.99, src: SpicyTurkeySandwich},
  {name: 'Spicy Chicken Soup', id: 8, price: 9.99, src: SpicyChickenSoup},
  {name: 'Spicy Sausage Pizza', id: 9, price: 21.99, src: SpicySausagePizza},
  {name: 'Spicy Korean Pork', id: 10, price: 17.99, src: SpicyKoreanPork},
];

const createFoodItem = (food) => {
  const item = document.createElement('div');
  item.classList.add('FoodItemContainer');
  const itemImage = new Image();
  itemImage.id = 'FoodImage';
  itemImage.src = food.src;
  itemImage.alt = `${food.name} Image`;
  item.appendChild(itemImage);

  const info = document.createElement('div');
  info.classList.add('FoodInfo');
  info.id = food.name + food.id;
  info.innerHTML = `<div>${food.name}</div> <br> <div>$${food.price}</div>`;
  item.appendChild(info);
  return item;
}

function InitMenu() {
  const floater = document.querySelector('.floater');
  const foodContainer = document.createElement('div');
  foodContainer.classList.add('FoodContainer');
  floater.appendChild(foodContainer);
  
  FoodLibrary.forEach(food => foodContainer.appendChild(createFoodItem(food)));
}

export default InitMenu;