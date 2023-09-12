import { cardsOnDom, noVocab } from '../components/cardsOnDom';
import { getVocab, deleteVocab } from '../api/GETvocab';

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
      if (e.target.id.includes('#edit-vocab')) {
        // const [, firebaseKey] = e.target.id.split('--');
        // getSingleEntry(firebaseKey).then((Obj) => addEntryForm(user.uid, Obj));
      }
    }
  });
};

export default domEvents;
