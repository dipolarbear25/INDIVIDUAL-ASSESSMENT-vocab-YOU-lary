import { cardsOnDom, noVocab } from '../components/cardsOnDom';
import {
  getVocab, deleteVocab, getSingleVocab,
} from '../api/GETvocab';
import addVocabForm from '../components/addVocabForm';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
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
      const [, firebaseKey] = e.target.id.split('--');
      getSingleVocab(firebaseKey).then((response) => addVocabForm(response));
    }

    if (e.target.id.includes('add-button')) {
      console.warn('helllo');
      addVocabForm(user.uid);
    }
  });
};

export default domEvents;

//  postVocab(payload).then(({ taco }) => {
//   const patchPayload = { firebaseKey: taco };
//   patchVocab(patchPayload).then(() => {
//     getVocab(user.uid).then(cardsOnDom);
//   });
// });
