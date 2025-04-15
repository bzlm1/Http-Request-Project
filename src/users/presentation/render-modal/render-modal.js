import modalHtml from './render-modal.html?raw'
import { User } from '../../models/user.js'
import { getUserById } from '../../use-cases/get-user-by-id.js'
import './render-modal.css'
let modal, form;
let loadedUser;


/**
 *
 * @param {String|Number} id
 */
export const showModal = async (id) => {
  modal?.classList.remove('hide-modal');
  loadedUser = {};
  if (!id) {
    return;
  }
  const user = await getUserById(id);
  setFormValues(user);


}
export const hideModal = () => {
  modal?.classList.add('hide-modal');
  form?.reset();
}
/**
 *
 * @param {User} user
 */
export const setFormValues = (user) => {
  form.querySelector('[name="firstName"]').value = user.firstName;
  form.querySelector('[name="lastName"]').value = user.lastName;
  form.querySelector('[name="balance"]').value = user.balance;
  form.querySelector('[name="isActive"]').checked = user.isActive;
  loadedUser = user
}

/**
 *
 * @param {HTMLDivElement} el
 * @param { (userLike) => Promise<void> } callback
 */
export const renderModal = (el, callback) => {
  if (modal) return;
  modal = document.createElement('div');
  modal.innerHTML = modalHtml;
  // modal.classList = 'modal-container';
  modal.classList = 'modal-container hide-modal';
  form = modal.querySelector('form');

  modal.addEventListener('click', (event) => {
    // console.log(event.target);
    // if (event.target.className !== 'modal-container') return;
    if (event.target.className === 'modal-container') {
      hideModal();

    };
  });
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    console.log('formulario enviado');
    const formData = new FormData(form);
    const userLike = { ...loadedUser };
    // formData.set("isActive", formData.has("isActive"));
    for (const [key, value] of formData) {
      if (key === 'balance') {
        userLike[key] = +value;
        continue;
      }
      if (key === 'isActive') {
        userLike[key] = (value === 'on') ? true : false;
        continue;
      }
      userLike[key] = value;
    }
    // userLike['isActive'] - formData.get('isActive') ? true : false;
    await callback(userLike);

    // console.log(userLike);
    hideModal();


  });

  el.append(modal);


}