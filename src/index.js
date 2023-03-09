import loadHeader from './module/header';
import loadHome from './module/home';
import loadFooter from './module/footer';

//Initial Website
const initialWebsite = (() => {
  loadHeader();
  loadHome();
  loadFooter();
})();