import renderToDOM from './renderToDom';

const domBuilder = () => {
  const domString = `
    <div id="nav-bar"></div>
    <div id="main-container">
      <div id="add-button"></div>
      <div id="card-container"></div>
      <div id="vocabulary-btn"></div>
      <div id="definition-btn"></div>;
    </div>`;
  renderToDOM('#app', domString);
};

export default domBuilder;
