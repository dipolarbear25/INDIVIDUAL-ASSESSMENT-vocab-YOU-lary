import client from '../utils/client';

const endpoint = client.databaseURL;

const getVocab = (user) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabs/.json?orderBy="uid"&equalTo="${user.uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

export default getVocab;
