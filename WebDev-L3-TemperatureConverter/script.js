const temperature = document.getElementById("temperature");
const unit = document.getElementById("unit");
const convertBtn = document.getElementById("convertBtn");

const celsiusResult = document.getElementById("celsiusResult");
const fahrenheitResult = document.getElementById("fahrenheitResult");
const kelvinResult = document.getElementById("kelvinResult");

const error = document.getElementById("error");

convertBtn.addEventListener("click", () => {

    let value = parseFloat(temperature.value);
    let selectedUnit = unit.value;

    error.textContent = "";

    if (temperature.value === "") {
        error.textContent = "Please enter a temperature.";
        return;
    }

    if (isNaN(value)) {
        error.textContent = "Please enter a valid number.";
        return;
    }

    // Absolute zero validation
    if (
        (selectedUnit === "celsius" && value < -273.15) ||
        (selectedUnit === "fahrenheit" && value < -459.67) ||
        (selectedUnit === "kelvin" && value < 0)
    ) {
        error.textContent = "Temperature cannot be below absolute zero.";
        return;
    }

    let celsius, fahrenheit, kelvin;

    if (selectedUnit === "celsius") {

        celsius = value;
        fahrenheit = (value * 9 / 5) + 32;
        kelvin = value + 273.15;

    } 
    else if (selectedUnit === "fahrenheit") {

        celsius = (value - 32) * 5 / 9;
        fahrenheit = value;
        kelvin = celsius + 273.15;

    } 
    else {

        celsius = value - 273.15;
        fahrenheit = (celsius * 9 / 5) + 32;
        kelvin = value;

    }

    celsiusResult.textContent = celsius.toFixed(2) + " °C";
    fahrenheitResult.textContent = fahrenheit.toFixed(2) + " °F";
    kelvinResult.textContent = kelvin.toFixed(2) + " K";

});