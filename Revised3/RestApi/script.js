const country_main = document.querySelector('.country_cards');
const filterByRegion = document.querySelector('.select_menu');
const search_input = document.querySelector('.search_container input');
const themeLogo = document.querySelector('.theme_toggler i');
const body = document.querySelector('body');

let allCountriesData;

fetch('https://restcountries.com/v3.1/all')
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    renderCards(data);
    allCountriesData = data;
  });

filterByRegion.addEventListener('change', (e) => {
  // console.log(e.target.value);

  fetch(`https://restcountries.com/v3.1/region/${e.target.value}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      renderCards(data);
    });
});

function renderCards(data) {
  country_main.innerHTML = '';
  data.forEach((element) => {
    const countryCard = document.createElement('a');
    countryCard.classList.add('card_main');
    countryCard.href = `/country.html?name=${element.name.common}`;

    countryCard.innerHTML = `
      <img class='card_img' src="${element?.flags?.svg}" alt="${
      element?.name?.common
    }">
        <div class="card_content">
          <h3 class="country_name"><b>${element?.name?.common}</b></h3>
          <p class="Population"><b>Population: </b>${element.population.toLocaleString(
            'en-IN'
          )}</p>
          <p class="region"><b>Region: </b>${element?.region}</p>
          <p class="capital"><b>Capital: </b>${element?.capital?.[0]}</p>
        </div>
`;

    country_main.append(countryCard);
  });
}

search_input.addEventListener('input', (e) => {
  // console.log(e.target.value);
  const filterData = allCountriesData.filter((country) =>
    country.name.common.toLowerCase().includes(e.target.value.toLowerCase())
  );
  // console.log('filterData:', filterData);
  renderCards(filterData);
});

themeLogo.addEventListener('click', () => {
  body.classList.toggle('dark');
  themeLogo.classList.toggle('fa-sun');
  themeLogo.classList.toggle('fa-moon');
});
