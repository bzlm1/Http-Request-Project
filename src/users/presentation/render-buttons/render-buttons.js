import usersStore from "../../store/users-store";
import './render-buttons.css';
import { renderTable } from "../render-table/render-table.js";
export const renderButtons = async (el) => {
  const nextButton = document.createElement('button');
  nextButton.innerText = ' Next >';

  const prevButton = document.createElement('button');
  prevButton.innerText = '< Prev ';

  const currentPageLabel = document.createElement('span');
  currentPageLabel.id = 'current-page';
  currentPageLabel.innerText = usersStore.getCurrentPage();

  el.append(prevButton, currentPageLabel, nextButton);
  nextButton.addEventListener('click', async () => {
    console.log('Goku');

    await usersStore.loadNextPage();
    currentPageLabel.innerText = usersStore.getCurrentPage();
    renderTable(el);
    // renderButtons(el);
  });
  prevButton.addEventListener('click', async () => {
    await usersStore.loadPreviousPage();
    currentPageLabel.innerText = usersStore.getCurrentPage();
    renderTable(el);
    // renderButtons(el);
  });

}
