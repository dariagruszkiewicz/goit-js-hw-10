import './css/styles.css';
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;
const inputEl = document.getElementById('search-box');
const countryListEl = document.querySelector('.country-list');

inputEl.addEventListener('input', () => {
  fetchCountries()
    .then(countries => renderCountryList(countries))
    .catch(error => console.log(error));
});

function renderCountryList(countries) {
  const markup = countries
    .map(item => {
      return `<li>
          <p><b>Country name</b>: ${item.name.official}</p>
          <img width="100" src="${item.flags.svg}" alt="${item.flags.alt}"/>`;
    })
    .join('');
  countryListEl.innerHTML = markup;
}
console.log(fetchCountries());
