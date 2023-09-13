import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const addVocabForm = (user, obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-Vocab--${obj.firebaseKey}` : 'submit-Vocab'}" class="mb-4">
      <div class="form-group">
        <label for="image">Vocabulary word</label>
        <input type="text" class="form-control" id="first_name" placeholder="First Name" value="${obj.Vocabulary || ''}" required>
      </div>
      <div class="form-group">
        <label for="image">Last Name</label>
        <input type="text" class="form-control" id="last_name" placeholder="Last Name" value="${obj.definition || ''}" required>
      </div>
      <div class="form-group">
        <label for="title">type</label>
        <input type="languageortech" class="form-control" id="languageortech" aria-describedby="languageortech" placeholder="Enter languageortech" value="${obj.languageortech || ''}" required>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Submit Vocab</button>
    </form>`;

  renderToDOM('#form-container', domString);
};
export default addVocabForm;
