const API_URL = 'https://restcountries.com/v3.1/name';
import { Notify } from 'notiflix';
import { countryInfo, countryListEl } from '.';

export const fetchCountries = name => {
  return fetch(
    `${API_URL}/${name}?fields=name,capital,population,flags,languages`
  ).then(response => {
    if (!response.ok) {
      Notify.failure('Oops, there is no country with that name');
      countryInfo.innerHTML = '';
      countryListEl.innerHTML = '';
    }
    return response.json();
  });
};
