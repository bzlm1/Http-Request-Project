import { User } from '../models/user.js'
import { userModelToLocalhost } from '../mappers/user-to-localhost.mapper.js'
import { localhostUserToModel } from '../mappers/localhost-user.mapper.js';

/**
 *
 * @param {Like<User>} userLike
 */
export const saveUser = async (userLike) => {
  const user = new User(userLike);
  if (!user.firstName || !user.lastName) {
    throw 'First & last name are required'
  }
  const userToSave = userModelToLocalhost(user);
  let userUpdated;

  if (user.id) {
    userUpdated = await updateUser(userToSave);
  } else {
    userUpdated = await createUser(userToSave);
  }
  return localhostUserToModel(userUpdated);


}
/**
 *
 * @param {Like<User>} user
 * @returns
 */
const createUser = async (user) => {
  const url = `${import.meta.env.VITE_BASE_URL}/users`;
  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    },
  });
  const newUser = await res.json();
  console.log({ newUser });

  return newUser;
}

/**
 *
 * @param {Like<User>} user
 * @returns
 */
const updateUser = async (user) => {
  const url = `${import.meta.env.VITE_BASE_URL}/users/${user.id}`;
  const res = await fetch(url, {
    method: 'PATCH',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    },
  });
  const updatedUser = await res.json();
  console.log({ updatedUser });

  return updatedUser;

}