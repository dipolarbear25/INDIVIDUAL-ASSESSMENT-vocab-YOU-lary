import { cardsOnDom } from "../components/cardsOnDom"

const domEvents = () => {
  document.querySelector('#main-container').addEventListener
  ('click', (e) => {
    if(e.target.id.includes('add-card-btn')) {
      cardsOnDom()
    }
  })
}
