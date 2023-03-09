function loadFooter() {
  const content = document.querySelector('.content');

  const text = document.createElement('div');
  text.textContent = 'Hello World! I am Footer!';

  content.appendChild(text);

}

export default loadFooter;