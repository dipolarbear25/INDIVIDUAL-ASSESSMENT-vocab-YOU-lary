import { getSingleVocab } from '../api/GETvocab';
import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const addVocabForm = (user, obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-Vocab--${obj.firebaseKey}` : 'submit-Vocab'}" class="new-vocab-form">
      <div class="form-group">
        <label for="text">Vocabulary word</label>
        <input type="text" class="form-control" id="vocab" placeholder="Enter Vocabulary word" value="${obj.Vocabulary || ''}" required>
      </div>
      <div class="form-group">
        <label for="text">Last Name</label>
        <input type="text" class="form-control" id="definition" placeholder="Enter Vocabulary definition" value="${obj.definition || ''}" required>
      </div>
      <div class="form-group">
        <label for="text">type</label>
        <input type="languageortech" class="form-control" id="languageortech" aria-describedby="languageortech" placeholder="Enter languageortech" value="${obj.languageortech || ''}" required>
      </div>
      <button type="submit" id="submit-form-btn" class="btn btn-primary mt-3">Submit Vocab</button>
    </form>`;

  renderToDOM('#form-container', domString);
  getSingleVocab(`${obj.firebaseKey || ''}`, user);
};
export default addVocabForm;
