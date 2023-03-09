function loadHome() {
  const content = document.querySelector('.content');

  const text = document.createElement('div');
  text.textContent = 'Hello World! I am Home Content!';

  content.appendChild(text);
}

export default loadHome;