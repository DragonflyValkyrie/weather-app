import getWeatherData from './api';

const displayController = (() => {
    document.addEventListener('DOMContentLoaded', () => {
        const form = document.querySelector('form');

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const searchQueryInput = document.getElementById('search-bar');
            const searchQuery = searchQueryInput.value;

            getWeatherData(searchQuery);

            console.log('Form submitted with value:', searchQuery);
            searchQueryInput.value = '';
        });
    });

    const isMetric = true;

    // Create the weather cards
    const weatherCards = document.createElement('div');
    weatherCards.classList.add('weather-cards');

    const currentWeatherCard = document.createElement('div');
    currentWeatherCard.classList.add('current-weather-card');

    const forecastWeatherCards = document.createElement('div');
    forecastWeatherCards.classList.add('forecast-container');

    const makeWeatherCards = () => {
        // Clear existing weather cards and their children
        const existingWeatherCards = document.querySelector('.weather-cards');
        if (existingWeatherCards) {
            // Clear the content of the current and forecast weather cards
            currentWeatherCard.innerHTML = '';
            forecastWeatherCards.innerHTML = '';
        } else {
            // Append the new weather cards to the displayDiv if not present
            const displayDiv = document.querySelector('.display');
            displayDiv.appendChild(weatherCards);
        }

        weatherCards.appendChild(currentWeatherCard);
        weatherCards.appendChild(forecastWeatherCards);
    };

    const appendLocation = (countryName, cityName) => {
        const newDisplayDiv = document.querySelector('.current-weather-card');
        const location = document.createElement('p');
        location.classList.add('location');
        location.textContent = `${countryName}, ${cityName}`;
        newDisplayDiv.appendChild(location);
    };

    const appendCondition = (icon, conditionText) => {
        const newDisplayDiv = document.querySelector('.current-weather-card');
        const conditionDiv = document.createElement('div');
        conditionDiv.classList.add('condition');

        const iconElement = document.createElement('img');
        iconElement.classList.add('weather-icon');
        iconElement.src = `https://${icon}`;
        iconElement.alt = 'Weather Icon';

        const conditionTextElement = document.createElement('p');
        conditionTextElement.textContent = `${conditionText}`;

        conditionDiv.appendChild(iconElement);
        conditionDiv.appendChild(conditionTextElement);

        newDisplayDiv.appendChild(conditionDiv);
    };

    const appendTemperature = (celsius, fahrenheit) => {
        const newDisplayDiv = document.querySelector('.current-weather-card');
        const temperature = document.createElement('p');
        temperature.classList.add('temperature');

        if (isMetric) {
            temperature.textContent = `Temperature: ${celsius}°C`;
        } else {
            temperature.textContent = `Temperature: ${fahrenheit}°F`;
        }

        newDisplayDiv.appendChild(temperature);
    };

    const appendFeelslike = (feelsInC, feelsInF) => {
        const newDisplayDiv = document.querySelector('.current-weather-card');
        const feelsLike = document.createElement('p');
        feelsLike.classList.add('feels-like');

        if (isMetric) {
            feelsLike.textContent = `Feels like: ${feelsInC}°C`;
        } else {
            feelsLike.textContent = `Feels like: ${feelsInF}°F`;
        }

        newDisplayDiv.appendChild(feelsLike);
    };

    const appendWindspeed = (mph, kph) => {
        const newDisplayDiv = document.querySelector('.current-weather-card');
        const windspeed = document.createElement('p');
        windspeed.classList.add('windspeed');

        if (isMetric) {
            windspeed.textContent = `Wind Speed: ${kph} Km/h`;
        } else {
            windspeed.textContent = `Wind Speed: ${mph} Mi/h`;
        }

        newDisplayDiv.appendChild(windspeed);
    };

    const appendWinddir = (direction) => {
        const newDisplayDiv = document.querySelector('.current-weather-card');
        const winddir = document.createElement('p');
        winddir.classList.add('winddir');
        winddir.textContent = `Wind is heading towards ${direction}`;
        newDisplayDiv.appendChild(winddir);
    };

    const appendHumidity = (humidity) => {
        const newDisplayDiv = document.querySelector('.current-weather-card');
        const humidityDiv = document.createElement('p');
        humidityDiv.classList.add('humidity');
        humidityDiv.textContent = `Humditiy: ${humidity}%`;
        newDisplayDiv.appendChild(humidityDiv);
    };

    const appendForecast = (forecastDay) => {
        const forecastCard = document.createElement('div');
        forecastCard.classList.add('forecast-card');

        const dateElement = document.createElement('p');
        dateElement.classList.add('forecast-date');
        dateElement.textContent = forecastDay.date;

        const iconElement = document.createElement('img');
        iconElement.classList.add('forecast-icon');
        iconElement.src = `https://${forecastDay.day.condition.icon}`;
        iconElement.alt = 'Weather Icon';

        const conditionTextElement = document.createElement('p');
        conditionTextElement.textContent = `${forecastDay.day.condition.text}`;

        const temperatureElement = document.createElement('p');
        temperatureElement.classList.add('forecast-temperature');

        if (isMetric) {
            temperatureElement.textContent = `Average Temperature: ${forecastDay.day.avgtemp_c}°C`;
        } else {
            temperatureElement.textContent = `Average Temperature: ${forecastDay.day.avgtemp_f}°F`;
        }

        const humidityElement = document.createElement('p');
        humidityElement.classList.add('forecast-humidity');
        humidityElement.textContent = `Humidity: ${forecastDay.day.avghumidity}%`;

        const precipitationElement = document.createElement('p');
        precipitationElement.classList.add('forecast-precipitation');
        precipitationElement.textContent = `Precipitation: ${forecastDay.day.daily_chance_of_rain}%`;

        // Append the elements to the forecast card
        forecastCard.appendChild(dateElement);
        forecastCard.appendChild(iconElement);
        forecastCard.appendChild(conditionTextElement);
        forecastCard.appendChild(temperatureElement);
        forecastCard.appendChild(humidityElement);
        forecastCard.appendChild(precipitationElement);

        // Append the forecast card to the forecast container
        forecastWeatherCards.appendChild(forecastCard);
    };

    return {
        makeWeatherCards,
        appendLocation,
        appendCondition,
        appendTemperature,
        appendFeelslike,
        appendWindspeed,
        appendWinddir,
        appendHumidity,
        appendForecast,
    };
})();

export default displayController;
