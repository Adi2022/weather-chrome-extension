const apiKey = "32b40b115c47d06fec6b9dc66735a47c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

const submitButton = document.getElementById("submit");
const cityInput = document.getElementById("city");
const resultDiv = document.getElementById("result");
const weatherIconUrl = "https://openweathermap.org/img/w/";

submitButton.addEventListener("click", () => {
  const city = cityInput.value;
  const url = `${apiUrl}${city}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = data.weather[0].description;
      const temperature = data.main.temp;
      const weatherIcon = data.weather[0].icon;
      resultDiv.innerHTML = `It's ${weather} and ${temperature}°C in ${city}. <img src="${weatherIconUrl}${weatherIcon}.png" alt="${weather}" />`;
    })
    .catch((error) => {
      console.error(error);
      resultDiv.innerHTML = "Error fetching weather data.";
    });
});
