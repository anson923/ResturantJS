import '../styles/menu.css';
import SpicyBurger from '../images/spicyBurger.jpeg';
const FoodLibrary = [
  {name: 'SpicyBurger', id: 1, price: 12.99, src:SpicyBurger},
  {name: 'SpicyBurger', id: 2, price: 12.99, src:SpicyBurger},
  {name: 'SpicyBurger', id: 3, price: 12.99, src:SpicyBurger},
  {name: 'SpicyBurger', id: 4, price: 12.99, src:SpicyBurger},
  {name: 'SpicyBurger', id: 5, price: 12.99, src:SpicyBurger},
  {name: 'SpicyBurger', id: 6, price: 12.99, src:SpicyBurger},
  {name: 'SpicyBurger', id: 7, price: 12.99, src:SpicyBurger},
  {name: 'SpicyBurger', id: 8, price: 12.99, src:SpicyBurger},
  {name: 'SpicyBurger', id: 9, price: 12.99, src:SpicyBurger},
  {name: 'SpicyBurger', id: 10, price: 12.99, src:SpicyBurger},
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