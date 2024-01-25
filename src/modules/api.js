import displayController from './display';

async function getWeatherData(locationQuery) {
    try {
        // Forecast weather data
        const response = await fetch(
            `https://api.weatherapi.com/v1/forecast.json?key=f01a3f590edd4b47b4b185016242201&q=${locationQuery}&days=3&aqi=no`,
            { mode: 'cors' }
        );

        // Check if the response is successful
        if (response.ok) {
            const weatherData = await response.json();
            console.log('Forecast Weather Data:', weatherData);

            // Display current weather data
            displayController.makeWeatherCards();
            displayController.appendLocation(
                weatherData.location.country,
                weatherData.location.name
            );
            displayController.appendCondition(
                weatherData.current.condition.icon,
                weatherData.current.condition.text
            );
            displayController.appendTemperature(
                weatherData.current.temp_c,
                weatherData.current.temp_f
            );

            displayController.appendFeelslike(
                weatherData.current.feelslike_c,
                weatherData.current.feelslike_f
            );

            displayController.appendWindspeed(
                weatherData.current.wind_mph,
                weatherData.current.wind_kph
            );
            displayController.appendWinddir(weatherData.current.wind_dir);
            displayController.appendHumidity(weatherData.current.humidity);

            const forecastDays = weatherData.forecast.forecastday;

            forecastDays.forEach((forecastDay) => {
                displayController.appendForecast(forecastDay);
            });
        } else {
            // Handle error response
            const errorData = await response.json();
            console.error(
                'Error fetching weather data:',
                errorData.error.message
            );
        }
    } catch (error) {
        console.error('Error in getWeatherData:', error);
    }
}

export default getWeatherData;
