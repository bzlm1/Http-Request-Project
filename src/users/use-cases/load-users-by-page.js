import { localhostUserToModel } from '../mappers/localhost-user.mapper.js';
import { User } from '../models/user.js';
/**
 *
 * @param {Number} page
 * @returns {Promise<User[]>} user information
 */
export const loadUsersByPage = async (page = 1) => {
  // const url = `${import.meta.env.VITE_BASE_URL}/users?page=${page}`;
  const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}&_limit=10`;

  const res = await fetch(url);
  const data = await res.json();

  const users = data.map(localhostUserToModel);
  return users;
  // [User]
}
