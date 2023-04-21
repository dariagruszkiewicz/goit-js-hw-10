import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import { Notify } from 'notiflix';

Notify.init({
  width: '300px',
  position: 'center-top',
  closeButton: false,
});

const DEBOUNCE_DELAY = 300;
const inputEl = document.getElementById('search-box');
const countryListEl = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

inputEl.addEventListener('input', ev => {
  fetchCountries(ev.target.value)
    .then(countries => renderCountryList(countries))
    .catch(error => console.log(error));
});

function renderCountryList(countries) {
  if (countries.length > 10) {
    Notify.info('Too many matches found. Please enter a more specific name.');
  } else if (countries.length >= 1 && countries.length <= 10) {
    const markup = countries
      .map(item => {
        return `<li><img width="24" src="${item.flags.svg}" alt="${item.flags.alt}"/> ${item.name.official}</li>`;
      })
      .join('');
    countryListEl.innerHTML = markup;
  }

  if (countries.length === 1) {
    const markup = countries.map(item => {
      return `<p><b>Capital:</b> ${item.capital}</p>
          <p><b>Population:</b> ${item.population}</p>
          <p><b>Languages:</b> ${Object.values(item.languages).join(', ')}</p>`;
    });
    countryInfo.innerHTML = markup;
  }
}
