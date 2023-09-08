// USE WITH FIREBASE AUTH
import domBuilder from '../components/shared/dombuilder';
import setup from '../components/setup';
import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import cardsOnDom from '../components/cardsOnDom';

const init = () => {
  domBuilder();
  setup();
  ViewDirectorBasedOnUserAuthStatus();
  cardsOnDom();
};

init();
