import domBuilder from '../components/shared/dombuilder';
import setup from '../components/setup';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import { cardsOnDom, addBtn } from '../components/cardsOnDom';
import getVocab from '../api/GETvocab';

const startApp = () => {
  domBuilder();
  setup();
  addBtn();
  cardsOnDom();
  getVocab();
};

export default startApp;
