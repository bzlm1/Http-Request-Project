import { showModal } from '../render-modal/render-modal';
import './render-add-button.css'
/**
 *
 * @param {HTMLDivElement} el
 * @param { () => void } callback
 */
export const renderAddButton = (el, callback) => {
  const fabButton = document.createElement('button');
  fabButton.innerText = '+';
  fabButton.classList.add('fab-button');
  el.append(fabButton);
  fabButton.addEventListener('click', () => {
    showModal();


    // throw Error("no implement");

  });

}