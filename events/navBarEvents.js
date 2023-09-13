import { getVocab } from '../api/GETvocab';
import { cardsOnDom, noVocab } from '../components/cardsOnDom';

const navBarEvents = (user) => {
  document.querySelector('#nav-bar').addEventListener('click', (e) => {
    if (e.target.id.includes('all-cards')) {
      getVocab(user.uid).then((array) => {
        if (array.length) {
          cardsOnDom(array);
        } else {
          noVocab();
        }
      });
    }
    if (e.target.id.includes('HTML-cards')) {
      cardsOnDom(array.filter(array => array.languageortech === 'HTML'));
    }
    // if (e.target.id.includes('JS-cards')) {

    // }
  });
};

export default navBarEvents;
