import {InitialWebsite,InitHomeContent} from './module/initPage.js';
import InitMenu from './module/menu';
import InitContact from './module/contact.js';

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

    // reset floater class name
    const floater = document.querySelector('.floater');
    floater.innerHTML = ``;
    floater.className = 'floater';

    // switch the content for the corresponding tab.
    switch(target){
      case '#home':
        InitHomeContent();
        break;

      case '#menu':
        floater.classList.add('menu');
        InitMenu();
        break;
      
      case '#contact':
        floater.classList.add('contact');
        InitContact();
        break;
    }
  });
});