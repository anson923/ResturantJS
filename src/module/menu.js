import '../styles/menu.css';

const FoodLibrary = [
  {name: 'ABC Food', id: 1, price: 24.99},
];

const createFoodItem = (food) => {
  const item = document.createElement('div');
  item.classList.add('Food');
  item.id = food.name + food.id;
  item.textContent = `${food.id} | ${food.name} - $${food.price}`;
  return item;
}

function InitMenu() {
  const floater = document.querySelector('.floater');
  
  FoodLibrary.forEach(food => floater.appendChild(createFoodItem(food)));
}

export default InitMenu;