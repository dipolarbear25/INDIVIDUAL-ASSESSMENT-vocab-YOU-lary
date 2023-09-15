import { getVocab } from '../api/GETvocab';
import { cardsOnDom, noVocab } from '../components/cardsOnDom';

const navBarEvents = (user) => {
  document.querySelector('#nav-bar').addEventListener('click', (e) => {
    if (e.target.id.includes('all-cards')) {
      getVocab(user).then((array) => {
        if (array.length) {
          cardsOnDom(array);
        } else {
          noVocab();
        }
      });
    }
  });
};

export default navBarEvents;
