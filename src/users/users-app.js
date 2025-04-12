import usersStore from "./store/users-store";
import { renderTable } from "./presentation/render-table/render-table.js";
import { renderButtons } from "./presentation/render-buttons/render-buttons.js";

/**
 *
 * @param {HTMLDivElement} el
 */
export const UsersApp = async (el) => {
  el.innerHTML = 'Loading...';
  // console.log('inicio');

  await usersStore.loadNextPage();
  // const users = usersStore.getUsers();
  // console.log(usersStore.getUsers());
  el.innerHTML = '';
  // console.log('fin');

  renderTable(el);
  renderButtons(el);


}
