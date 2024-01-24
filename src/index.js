import './style.css';
import getWeatherData from './modules/api';
import './modules/layout';
import displayController from './modules/display';

displayController();
getWeatherData('calgary');
