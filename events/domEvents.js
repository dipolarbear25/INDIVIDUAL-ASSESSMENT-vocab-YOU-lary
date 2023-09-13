import { cardsOnDom, noVocab } from '../components/cardsOnDom';
import { getVocab, deleteVocab, getSingleVocab } from '../api/GETvocab';
import addVocabForm from '../components/addVocabForm';

const domEvents = (user) => {
  document.querySelector('#card-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteVocab(firebaseKey).then(() => {
          getVocab(user.uid).then((array) => {
            if (array.length) {
              cardsOnDom(array);
            } else {
              noVocab();
            }
          });
        });
      }
    }
    if (e.target.id.includes('edit-btn')) {
      console.warn('hello');
      const [, firebaseKey] = e.target.id.split('--');
      getSingleVocab(firebaseKey).then((Obj) => addVocabForm(user.uid, Obj));
    }
  });
};

export default domEvents;
