function convertTemperature() {
    const temperatureInput = document.getElementById('temperature').value;
    const fromScale = document.getElementById('fromScale').value;
    const toScale = document.getElementById('toScale').value;
    let result;

    if (fromScale === 'celsius') {
        if (toScale === 'fahrenheit') {
            result = (temperatureInput * 9/5) + 32;
        } else if (toScale === 'kelvin') {
            result = parseFloat(temperatureInput) + 273.15;
        } else {
            result = temperatureInput;
        }
    } else if (fromScale === 'fahrenheit') {
        if (toScale === 'celsius') {
            result = (temperatureInput - 32) * 5/9;
        } else if (toScale === 'kelvin') {
            result = (temperatureInput - 32) * 5/9 + 273.15;
        } else {
            result = temperatureInput;
        }
    } else if (fromScale === 'kelvin') {
        if (toScale === 'celsius') {
            result = temperatureInput - 273.15;
        } else if (toScale === 'fahrenheit') {
            result = (temperatureInput - 273.15) * 9/5 + 32;
        } else {
            result = temperatureInput;
        }
    }

    document.getElementById('result').textContent = `Result: ${result.toFixed(2)} ${toScale}`;
}
