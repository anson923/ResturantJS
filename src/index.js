import loadHeader from './module/header';
import loadHome from './module/home';
import loadFooter from './module/footer';
import './styles/general.css';

//Initial Website
const initialWebsite = (() => {
  
  loadHeader();
  loadHome();
  loadFooter();
})();