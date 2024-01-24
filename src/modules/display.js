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

        // Append the current and forecast weather cards to weatherCards
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
        // Implement logic to display condition information
    };

    const appendTemperature = (celsius, fahrenheit) => {
        // Implement logic to display temperature information
    };

    const appendWindspeed = (mph, kph) => {
        // Implement logic to display windspeed information
    };

    const appendWinddir = (direction) => {
        // Implement logic to display wind direction information
    };

    const appendHumidity = (humidity) => {
        // Implement logic to display humidity information
    };

    const appendForecast = (date, icon, avgTempC, avgTempF) => {
        // Implement logic to display forecast information
    };

    return {
        makeWeatherCards,
        appendLocation,
        appendCondition,
        appendTemperature,
        appendWindspeed,
        appendWinddir,
        appendHumidity,
        appendForecast,
    };
})();

export default displayController;
