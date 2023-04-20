import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import { Notiflix } from 'notiflix';

const DEBOUNCE_DELAY = 300;
const inputEl = document.getElementById('search-box');
const countryListEl = document.querySelector('.country-list');

inputEl.addEventListener('input', ev => {
  fetchCountries(ev.target.value)
    .then(countries => renderCountryList(countries))
    .catch(error => console.log(error));

  // if (countries.length > 10) {
  //   Notify.info('Too many matches found. Please enter a more specific name.');
  // } else {
  //   renderCountryList(countries);
  // }
});

function renderCountryList(countries) {
  const markup = countries
    .map(item => {
      return `<li><img width="24" src="${item.flags.svg}" alt="${item.flags.alt}"/><p>${item.name.official}</p></li>`;
    })
    .join('');
  countryListEl.innerHTML = markup;
}
