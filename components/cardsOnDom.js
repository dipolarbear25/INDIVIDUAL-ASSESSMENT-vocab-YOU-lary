import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const noVocab = () => {
  const domString = '<h1>No Terms found.</h1>';
  renderToDOM('#card-container', domString);
};

const cardsOnDom = (array) => {
  clearDom();

  const addBtn = '<button type="button" class="add-card-btn">Add a vocabulary card</button>';
  renderToDOM('#add-button', addBtn);

  let domString = '';
  if (array.length < 1) {
    domString += '<p>No cards here!</p>';
  } else {
    array.forEach((e) => {
      domString += `<div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${e.Vocabulary}</h5>
        <p class="card-text">${e.definitions}</p>
        <p class="card-text">${e.languageortech}</p>
        <button type="button" id="delete-btn--${e.firebasekey} class="delete-btn">Delete</button>
        <button type="button" id="edit-btn--${e.firebasekey} class="edit-btn">edit</button>
      </div>
    </div>`;
    });
  }
  renderToDOM('#card-container', domString);
};

export { noVocab, cardsOnDom };
