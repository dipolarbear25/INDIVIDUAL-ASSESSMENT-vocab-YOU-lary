import domBuilder from './dombuilder';
import setup from '../components/setup';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import { cardsOnDom, noVocab } from '../components/cardsOnDom';
import { getVocab } from '../api/GETvocab';

const startApp = (user) => {
  domBuilder();
  setup();
  getVocab(user.uid).then((array) => {
    if (array.length) {
      cardsOnDom(array);
    } else {
      noVocab();
    }
  });
};

export default startApp;
