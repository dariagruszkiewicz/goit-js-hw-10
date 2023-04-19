export function fetchCountries() {
  const API_URL = 'https://restcountries.com/v3.1/all';
  return fetch(API_URL).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
