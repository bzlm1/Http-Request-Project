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

  // const quote = await fetchQuote()
  // el.innerHTML = `
  // <h3>¡Tenemos data!.</h3>
  // `;

  const quoteLabel = document.createElement('blockquote');
  const authorLabel = document.createElement('h3');
  const nextQuoteButton = document.createElement('button');
  nextQuoteButton.innerText = 'Next Quote';

  const renderQuote = (data) => {
    quoteLabel.innerHTML = data.quote;
    authorLabel.innerHTML = data.author;
    el.replaceChildren(quoteLabel, authorLabel, nextQuoteButton);
  }

  nextQuoteButton.addEventListener('click', async () => {
    el.innerHTML = 'Loading...';
    const quote = await fetchQuote();
    renderQuote(quote)
  })
  // una proxima mejora seria q la logica  de invocar a la peticion este en una funcion y nosostros pongamos aqui nomas la llamada
  // resumen q se llame x default y x click al boton

  fetchQuote()
    .then(renderQuote);
  // .then(data => renderQuote(data));

}
// esta en mayus xk quiero indicar q es un componente
// Es una pieza reutilizable de mi aplicación, que si ustedes la mandan a llamar va a realizar cierto trabajo.

// https://dog.ceo/api/breeds/image/random

//  curl -s "https://api.breakingbadquotes.xyz/v1/quotes" | python -m json.tool
// curl -s "https://api.breakingbadquotes.xyz/v1/quotes/5" | python -m json.tool
