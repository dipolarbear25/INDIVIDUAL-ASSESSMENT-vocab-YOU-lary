import domBuilder from './dombuilder';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import { cardsOnDom, noVocab } from '../components/cardsOnDom';
import { getVocab } from '../api/GETvocab';
import domEvents from '../events/domEvents';
import navBar from '../components/shared/navBar';

const startApp = (user) => {
  domBuilder();
  navBar();
  getVocab(user.uid).then((array) => {
    if (array.length) {
      cardsOnDom(array);
    } else {
      noVocab();
    }
  });
  domEvents(user);
};

export default startApp;
