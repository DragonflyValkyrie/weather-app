import displayContainer from './display';

async function getWeatherData(location) {
    // Current weather data
    const currentResponse = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=f01a3f590edd4b47b4b185016242201&q=${location}&aqi=no`,
        { mode: 'cors' }
    );
    const currentWeatherData = await currentResponse.json();

    // Forecast weather data
    const forecastResponse = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=f01a3f590edd4b47b4b185016242201&q=${location}&days=3&aqi=no`,
        { mode: 'cors' }
    );
    const forecastWeatherData = await forecastResponse.json();

    // Display current weather data
    displayContainer.makeWeatherCards();

    displayContainer.location(
        currentWeatherData.location.country,
        currentWeatherData.location.name
    );
    displayContainer.condition(
        currentWeatherData.icon,
        currentWeatherData.text
    );
    displayContainer.temperature(
        currentWeatherData.temp_c,
        currentWeatherData.temp_f
    );
    displayContainer.windspeed(
        currentWeatherData.wind_mph,
        currentWeatherData.wind_kph
    );
    displayContainer.winddir(currentWeatherData.wind_dir);
    displayContainer.humidity(currentWeatherData.humidity);

    // Display forecast weather data
    for (let i = 0; i < 3; i += 1) {
        const forecastDay = forecastWeatherData.forecast.forecastday[i];

        displayContainer.displayForecast(
            forecastDay.date,
            forecastDay.day.condition.icon,
            forecastDay.day.avgtemp_c,
            forecastDay.day.avgtemp_f
        );
    }
}

export default getWeatherData;
