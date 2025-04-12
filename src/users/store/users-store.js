import { User } from "../models/user";
import { loadUsersByPage } from "../use-cases/load-users-by-page";

const state = {
  currentPage: 0,
  users: [],
}
const loadNextPage = async () => {
  console.log('Cargando la siguiente página, página actual:', state.currentPage);
  const users = await loadUsersByPage(state.currentPage + 1)
  console.log('Usuarios cargados:', users);

  if (users.length === 0) {
    console.log('No hay más usuarios para cargar');
    return
  };
  state.currentPage += 1;
  state.users = users;
  console.log('Nueva página actual:', state.currentPage);

}
const loadPreviousPage = async () => {
  if (state.currentPage === 1) return;
  const users = await loadUsersByPage(state.currentPage - 1)
  state.users = users;
  state.currentPage -= 1;
}

const onUserChanged = () => {
  throw new Error('Not implemented yet');
}
const reloadPage = async () => {
  throw new Error('Not implemented yet');
}
export default {
  loadNextPage,
  loadPreviousPage,
  onUserChanged,
  reloadPage,
  /**
   *
   * @returns {User[]}
   */
  getUsers: () => [...state.users],
  /**
   *
   * @returns {Number[]}
   */
  getCurrentPage: () => state.currentPage,
}
