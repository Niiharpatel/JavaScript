const countryName = new URLSearchParams(location.search).get('name');
const country_sec = document.querySelector('.country_section');
const flag = document.querySelector('.country_section img');
const country_name = document.querySelector('.country_content h1');
const native_name = document.querySelector('.country_details .native_name');
const population = document.querySelector('.population');
const region = document.querySelector('.region');
const sub_region = document.querySelector('.sub_region');
const capital = document.querySelector('.capital');
const domain = document.querySelector('.domain');
const currency = document.querySelector('.currency');
const language = document.querySelector('.lang');
const border_country = document.querySelector('.border_country');
const back_btn = document.querySelector('.back_btn');
const themeLogo = document.querySelector('.theme_toggler i');
const body = document.querySelector('body');

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then((res) => {
    return res.json();
  })
  .then(([country]) => {
    // console.log('.then  country:', country);
    flag.src = country.flags.svg;
    country_name.innerText = country?.name?.common;

    native_name.innerText = country.name.nativeName
      ? Object.values(country.name.nativeName)[0].common
      : '-';

    population.innerText = country?.population?.toLocaleString('en-IN');
    region.innerText = country?.region;
    sub_region.innerText = country.subregion ? country.subregion : '-';
    capital.innerText = country.capital ? country.capital : '-';
    domain.innerText = country?.tld;

    currency.innerText = country.currencies
      ? Object.values(country?.currencies)
          .map((cur) => cur.name)
          .join(', ')
      : '-';

    language.innerText = country.languages
      ? Object.values(country.languages).join(', ')
      : '-';

    if (country.borders) {
      country.borders.forEach((border) => {
        fetch(`https://restcountries.com/v3.1/alpha?codes=${border}`)
          .then((res) => res.json())
          .then(([borderCountry]) => {
            const borderCountryTag = document.createElement('a');
            borderCountryTag.innerText = borderCountry.name.common;
            borderCountryTag.classList.add('border_btn');
            borderCountryTag.href = `country.html?name=${borderCountry.name.common}`;
            border_country.append(borderCountryTag);
          });
      });
    }
    // console.log(country.borders);
  });

back_btn.addEventListener('click', () => {
  history.back();
});

themeLogo.addEventListener('click', () => {
  body.classList.toggle('dark');
  themeLogo.classList.toggle('fa-sun');
  themeLogo.classList.toggle('fa-moon');
});
