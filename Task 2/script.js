const colorBox = document.getElementById('colorBox');
const colorCode = document.getElementById('colorCode');
const generateButton = document.getElementById('generateButton');
const redSlider = document.getElementById('red');
const greenSlider = document.getElementById('green');
const blueSlider = document.getElementById('blue');
const customColorCode = document.getElementById('customColorCode');
const copyButton = document.getElementById('copyButton');

// Function to generate a random hex color
function getRandomHexColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to update the color box and code
function updateColor() {
    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;
    const hexColor = `#${(parseInt(redValue).toString(16)).padStart(2, '0')}${(parseInt(greenValue).toString(16)).padStart(2, '0')}${(parseInt(blueValue).toString(16)).padStart(2, '0')}`;
    
    colorBox.style.backgroundColor = hexColor;
    colorCode.textContent = hexColor.toUpperCase();
    customColorCode.value = hexColor.toUpperCase();
}

// Event listeners
generateButton.addEventListener('click', () => {
    const randomColor = getRandomHexColor();
    colorBox.style.backgroundColor = randomColor;
    colorCode.textContent = randomColor.toUpperCase();
    redSlider.value = 255;
    greenSlider.value = 255;
    blueSlider.value = 255;
    customColorCode.value = '';
});

redSlider.addEventListener('input', updateColor);
greenSlider.addEventListener('input', updateColor);
blueSlider.addEventListener('input', updateColor);

copyButton.addEventListener('click', () => {
    customColorCode.select();
    document.execCommand('copy');
});
