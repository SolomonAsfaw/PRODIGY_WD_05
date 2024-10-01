const apiKey = "df3a19947a8ae1c8c782eb8f74c42b0b"; // Replace with your OpenWeatherMap API key
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".searbox input");
const searchBtn = document.querySelector(".searbox button");
const weacon = document.querySelector(".wecon");

async function Checkweather(city) {
  const response = await fetch(apiurl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".wheather").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

    if (data.weather[0].main == "Clouds") {
      weacon.src = "clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weacon.src = "clear.png";
    } else if (data.weather[0].main == "Rain") {
      weacon.src = "rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weacon.src = "drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weacon.src = "mist.png";
    }

    document.querySelector(".wheather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  Checkweather(searchBox.value);
});

Checkweather();
