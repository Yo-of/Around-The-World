let countriesData = [];

async function loadCountries() {
  try {
    const response = await fetch('countries.json');
    if (!response.ok) throw new Error('Failed to load countries data');
    countriesData = await response.json();
  } catch (error) {
    console.error('Error loading countries:', error);
    document.getElementById('result').innerText = 'Failed to load countries data.';
  }
}

function showRandomCountry() {
  if (countriesData.length === 0) {
    document.getElementById('result').innerText = 'Countries data not loaded yet.';
    return;
  }

  const randomIndex = Math.floor(Math.random() * countriesData.length);
  const country = countriesData[randomIndex];

  document.getElementById('result').innerHTML = `
    <h2>${country.flag} ${country.name}</h2>
    <p><strong>Capital:</strong> ${country.capital}</p>
    <p><strong>Continent:</strong> ${country.continent}</p>
    <p><strong>Population:</strong> ${country.population}</p>
    <p><strong>Landmark:</strong> ${country.landmark}</p>
    <p><strong>Fun Fact:</strong> ${country.fact}</p>
  `;
}

window.onload = () => {
  loadCountries();
  document.getElementById('random-btn').addEventListener('click', showRandomCountry);
};
