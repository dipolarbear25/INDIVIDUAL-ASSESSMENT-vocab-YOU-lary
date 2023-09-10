import { cardsOnDom } from "../components/cardsOnDom"

const domEvents = (user) => {
  document.querySelector('#card-container').addEventListener('click', (e) => {
    if (e.target.id.includes('#delete-btn')) {
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteVocab(firebaseKey).then(() => {
          getVocab(user.uid).then((array) => {
            if (array.length) {
              cardsOnDom(array);
            } else {
              emptyVocab();
            }
          });
        });
      }
    }
    if (e.target.id.includes('#edit-vocab')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleEntry(firebaseKey).then((Obj) => addEntryForm(user.uid, Obj));
    }
  });
};

export default domEvents;
