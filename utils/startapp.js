import domBuilder from './dombuilder';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import { cardsOnDom, noVocab } from '../components/cardsOnDom';
import { getVocab } from '../api/GETvocab';
import domEvents from '../events/domEvents';
import navBar from '../components/shared/navBar';
import navBarEvents from '../events/navBarEvents';
import formEvents from '../events/formEvents';
import addVocabForm from '../components/addVocabForm';
// import filterEvents from '../events/filterEvents';

const startApp = (user) => {
  domBuilder(user);
  addVocabForm(user);
  domEvents(user);
  formEvents(user);
  navBar(user);
  getVocab(user).then((array) => {
    if (array.length) {
      cardsOnDom(array);
    } else {
      noVocab();
    }
  });
  navBarEvents(user);
};

export default startApp;
