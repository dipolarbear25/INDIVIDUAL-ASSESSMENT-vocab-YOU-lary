const clearDom = () => {
  document.querySelector('#card-container').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#definition-btn').innerHTML = '';
  document.querySelector('#vocabulary-btn').innerHTML = '';
};

export default clearDom;
