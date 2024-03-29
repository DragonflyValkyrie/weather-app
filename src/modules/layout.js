import logo from '../assets/images/logo.svg';

const container = document.querySelector('.container');

// Header contaienr
const headerContainer = document.createElement('div');
headerContainer.classList.add('header-container');

// Logo
const logoImage = document.createElement('img');
logoImage.classList.add('logo');
logoImage.src = logo;
logoImage.alt = 'Weather Logo';
logoImage.style.width = '30px';
logoImage.style.height = 'auto';

// Header Title
const titleElement = document.createElement('h1');
titleElement.textContent = 'Weather App';

// Toggle Unit Button
const unitToggleButton = document.createElement('button');
unitToggleButton.classList.add('unit-toggle');

// Create a span for the slider
const sliderSpan = document.createElement('span');
sliderSpan.classList.add('slider', 'round');

// Append text content and slider to the button
unitToggleButton.textContent = 'Toggle Units';
unitToggleButton.appendChild(sliderSpan);

headerContainer.appendChild(logoImage);
headerContainer.appendChild(titleElement);
// headerContainer.appendChild(unitToggleButton);

container.appendChild(headerContainer);

// Display container
const displayContainer = document.createElement('div');
displayContainer.classList.add('display');

container.appendChild(displayContainer);

// Form container
const form = document.createElement('form');
form.classList.add('search-bar');
displayContainer.appendChild(form);

// Input to form
const input = document.createElement('input');
input.type = 'text';
input.id = 'search-bar';
input.placeholder = 'Enter your City';
form.appendChild(input);

// Search Button
const button = document.createElement('button');
button.type = 'submit';
button.textContent = 'Search';
form.appendChild(button);

// Footer container
const footerContainer = document.createElement('div');
footerContainer.classList.add('footer');
footerContainer.textContent = "DragonflyValkyrie's Weather App 2024";

container.appendChild(footerContainer);
