function updateTemperature(response) {
  let temperatureElement = document.querySelector("#temp-value");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#app-city");
  let descriptionElement = document.querySelector("#description");

  temperatureElement.innerHTML = Math.round(temperature);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
}

function searchCity(city) {
  let apiKey = "etc38b7c1eb0ao0943f30198bb3d0e65";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiURL).then(updateTemperature);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Johannesburg");
