import loadHeader from './header';
import loadHome from './home';
import loadFooter from './footer';
import '../styles/general.css';

//Initial Website
function initialWebsite() {
  loadHeader();
  loadHome();
  loadFooter();
}

export default initialWebsite;
