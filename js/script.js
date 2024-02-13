const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const convertCelsiusButton = document.getElementById('convert-celsius');
const convertFahrenheitButton = document.getElementById('convert-fahrenheit');
const resetButton = document.getElementById('reset');

convertCelsiusButton.addEventListener('click', () => {
  const celsius = parseFloat(celsiusInput.value);
  const fahrenheit = (celsius * 9/5) + 32;
  fahrenheitInput.value = fahrenheit.toFixed(2);

  updateCalculation(celsius, fahrenheit);
});

convertFahrenheitButton.addEventListener('click', () => {
  const fahrenheit = parseFloat(fahrenheitInput.value);
  const celsius = (fahrenheit - 32) * 5/9;
  celsiusInput.value = celsius.toFixed(2);

  updateCalculation(celsius, fahrenheit);
});

resetButton.addEventListener('click', () => {
  celsiusInput.value = '';
  fahrenheitInput.value = '';

  updateCalculation(0, 0);
});

function updateCalculation(celsius, fahrenheit) {
  const calculationElement = document.querySelector('.cara-kalkulasi p');
  calculationElement.textContent = `${celsius}°C x (9/5) + 32 = ${fahrenheit}°F`;
}

updateCalculation(celsiusInput.value, fahrenheitInput.value);
