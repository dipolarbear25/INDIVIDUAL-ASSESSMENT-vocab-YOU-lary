import renderToDOM from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
    <div id="add-button"></div>
    <div id="card-container"></div>
    <div id="vocabulary-btn"></div>
    <div id="definition-btn"></div>`;
  // id like to add 2 buttons to set all cards to either a definition side or the vocabulary side
  renderToDOM('#app', domString);
};

export default domBuilder;
