import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const cardsOnDom = () => {
  clearDom();
  const domString = `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
  </div>
</div>`;
  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-card-btn">Add A Card</button>';
  renderToDOM('#card-container', domString);
  renderToDOM('#add-button', btnString);
};

export default cardsOnDom;
