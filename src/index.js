import './style.css';
import getWeatherData from './modules/api';
import './modules/layout';
import loadDisplay from './modules/display';

loadDisplay();
getWeatherData('calgary');
