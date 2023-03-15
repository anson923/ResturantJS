import {InitialWebsite,LoadHomeContent} from './module/initPage.js';
import InitMenu from './module/menu';

//Init Website
InitialWebsite();

// select all tab elements
const tabs = document.querySelectorAll('.tab');

// loop through each tab element and attach a click event listener
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // get the target
    const target = tab.dataset.tabTarget;
    // if tab already activated, ignore it.
    if(tab.classList.contains('active')) return;
    
    // remove the "active" class from all tabs and content elements
    tabs.forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    // add the "active" class to the clicked tab and content element
    tab.classList.add('active');

    
    const floater = document.querySelector('.floater');
    floater.innerHTML = ``;

    switch(target){
      
      case '#home':
        console.log('load home');
        LoadHomeContent();
        break;

      case '#menu':
        console.log('load menu');
        InitMenu();
        break;
      
      case '#contact':
        console.log('load contact');
        break;
    }

  });
});