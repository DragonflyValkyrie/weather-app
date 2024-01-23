import getWeatherData from './api';

const loadDisplay = () => {
    const displayContainer = document.querySelector('.display');
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const searchQueryInput = document.getElementById('input');
        const searchQuery = searchQueryInput.value;

        getWeatherData(searchQuery);

        console.log('Form submitted with value:', searchQuery);
        searchQueryInput.value = '';
    });

    const weatherCards = document.createElement('div');
    weatherCards.classList.add('weather-cards');

    const currentWeatherCard = document.createElement('div');
    currentWeatherCard.classList.add('current-weather-card');

    const forecastWeatherCards = document.createElement('div');
    forecastWeatherCards.classList.add('forecast-container');

    weatherCards.appendChild(currentWeatherCard);
    weatherCards.appendChild(forecastWeatherCards);

    displayContainer.appendChild(weatherCards);
};

export default { loadDisplay };
