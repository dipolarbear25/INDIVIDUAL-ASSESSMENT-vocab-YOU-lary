import { getVocab, patchVocab, postVocab } from '../api/GETvocab';
import { cardsOnDom } from '../components/cardsOnDom';

const formEvents = (user) => {
  document.querySelector('#form-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-Vocab')) {
      const cardPayload = {
        Vocabulary: document.querySelector('#vocab').value,
        dateadded: new Date(),
        definition: document.querySelector('#definition').value,
        languageortech: document.querySelector('#languageortech').value,
        uid: user.uid
      };
      postVocab(cardPayload).then(({ name }) => {
        const payload = { firebaseKey: name };
        patchVocab(payload).then(() => {
          getVocab(user).then(cardsOnDom);
        });
      });
    }
    if (e.target.id.includes('update-Vocab')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        Vocabulary: document.querySelector('#vocab').value,
        dateadded: new Date(),
        definition: document.querySelector('#definition').value,
        languageortech: document.querySelector('#languageortech').value,
        uid: user.uid,
        firebaseKey
      };
      patchVocab(payload).then(() => {
        getVocab(user).then(cardsOnDom);
      });
    }
  });
};

export default formEvents;
