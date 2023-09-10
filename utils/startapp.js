import domBuilder from './dombuilder';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import { cardsOnDom, noVocab } from '../components/cardsOnDom';
import { getVocab } from '../api/GETvocab';

const startApp = (user) => {
  domBuilder();
  getVocab(user.uid).then((array) => {
    console.warn(array);
    if (array.length) {
      cardsOnDom(array);
    } else {
      noVocab();
    }
  });
};

export default startApp;
