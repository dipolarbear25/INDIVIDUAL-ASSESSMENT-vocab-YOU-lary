import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';
import getVocab from '../api/GETvocab';

const cardsOnDom = () => {
  clearDom();
  const domString = `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 id="card-term">${getVocab}</h5>
    <p id="card-definition">definition here</p>
    <button type="button" class="delete-btn" id="delete-btn">Danger</button>
  </div>
</div>`;
  renderToDOM('#card-container', domString);
};

const addBtn = () => {
  clearDom();
  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-card-btn">Add A Card</button>';
  renderToDOM('#add-button', btnString);
};

export { cardsOnDom, addBtn };
