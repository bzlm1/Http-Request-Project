import usersStore from "./store/users-store";
import { renderTable } from "./presentation/render-table/render-table.js";
import { renderButtons } from "./presentation/render-buttons/render-buttons.js";
import { renderAddButton } from "./presentation/render-add-button/render-add-button.js";
import { renderModal } from "./presentation/render-modal/render-modal.js";
import { saveUser } from "./use-cases/save-user.js";

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
  renderAddButton(el);
  renderModal(el, async (userLike) => {
    const user = await saveUser(userLike);
    console.log(user);

    usersStore.onUserChanged(user);
    renderTable();
  });


}
