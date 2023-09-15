import { getVocab, patchVocab, postVocab } from '../api/GETvocab';
import { cardsOnDom } from '../components/cardsOnDom';

const formEvents = (user) => {
  document.querySelector('#main-contaier').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-form-btn')) {
      const payload = {
        Vocabulary: document.querySelector('#vocab').value,
        definition: document.querySelector('#definition').value,
        languageortech: document.querySelector('#languageortech').value,
        user: user.uid,
        // dateTime: document.querySelector('#dateTime'),
      };
      postVocab(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        patchVocab(patchPayload).then(() => {
          getVocab(user.uid).then(cardsOnDom);
        });
      });
    }
    if (e.target.id.includes('update-Vocab')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        Vocabulary: document.querySelector('#vocab').value,
        definition: document.querySelector('#definition').value,
        languageortech: document.querySelector('#languageortech').value,
        user: user.uid,
        // dateTime: document.querySelector('#dateTime'),
        firebaseKey
      };
      patchVocab(payload).then(() => {
        getVocab(user.uid).then(cardsOnDom);
      });
    }
  });
};

export default formEvents;
