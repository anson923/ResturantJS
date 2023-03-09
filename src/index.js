import loadHeader from './header';
import loadHome from './home';
import loadFooter from './footer';

//Initial Website
const initialWebsite = (() => {
  loadHeader();
  loadHome();
  loadFooter();
})();