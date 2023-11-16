const redInput = document.getElementById('redInput');
const greenInput = document.getElementById('greenInput');
const blueInput = document.getElementById('blueInput');
const colorBox = document.getElementById('square');

function updateColor() {
    const redValue = redInput.value;
    const greenValue = greenInput.value;
    const blueValue = blueInput.value;

    colorBox.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
}

redInput.addEventListener('input', updateColor);
greenInput.addEventListener('input', updateColor);
blueInput.addEventListener('input', updateColor);