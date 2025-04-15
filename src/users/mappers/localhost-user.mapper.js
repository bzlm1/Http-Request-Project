import { User } from "../models/user";

/**
 *
 * @param {Like<User>} localhostUser
 * @returns {User}
 */
export const localhostUserToModel = (localhostUser) => {
  const {
    avatar,
    balance,
    first_name,
    // aca
    gender,
    id,
    isActive,
    last_name,
  } = localhostUser;

  return new User({
    avatar,
    balance,
    firstName: first_name,
    // -:aca
    gender,
    id,
    isActive,
    lastName: last_name,
  })
}
// Si el backend cambia de nombre un registro haz esto