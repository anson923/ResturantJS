import loadHeader from './header';
import loadHome from './home';
import loadFooter from './footer';
import loadHomeContent from './homeContent';
import '../styles/general.css';

//Initial Website
export function InitialWebsite() {
  loadHeader();
  loadHome();
  loadHomeContent();
  loadFooter();
}

export function LoadHomeContent() {
  loadHomeContent();
}