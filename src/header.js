function loadHeader() {
  const content = document.querySelector('.content');


  const text = document.createElement('div');
  text.textContent = "Hello World! I am Header!";

  content.appendChild(text);
}

export default loadHeader;