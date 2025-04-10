/**
 * @returns {Promise<Object>} quote information
 */
const fetchQuote = async () => {
  const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
  // console.log(res);
  const data = await res.json();
  console.log(data[0]);
  return data[0];
}

/**
 *
 * @param {HTMLDivElement} el
 */
export const BreakingBadApp = async (el) => {
  document.querySelector('#app-title').innerHTML = 'Breaking Bad App';
  el.innerHTML = `
    <h3>Loading ...</h3>
    `;

  const quote = await fetchQuote()
  el.innerHTML = `
  <h3>¡Tenemos data!.</h3>
  `;
}
