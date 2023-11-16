document.addEventListener('DOMContentLoaded', function () {
    const redInput = document.getElementById('redInput');
    const greenInput = document.getElementById('greenInput');
    const blueInput = document.getElementById('blueInput');
    const colorBox = document.getElementById('square');
    const generateButton = document.getElementById('generateButton');
    const blocksContainer = document.getElementById('blocksContainer');

    let blockCounter = 0;
    let selectedColor = null;

    function updateColor() {
        const redValue = redInput.value;
        const greenValue = greenInput.value;
        const blueValue = blueInput.value;

        colorBox.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    }

    function generateBlock() {
        const computedStyles = getComputedStyle(colorBox);
        const backgroundColor = computedStyles.backgroundColor;

        if (blockCounter >= 15) {
            const leftmostBlock = blocksContainer.firstElementChild;
            blocksContainer.removeChild(leftmostBlock);
        }

        const block = document.createElement('div');
        block.style.backgroundColor = backgroundColor;
        block.classList.add('color-block');
        block.addEventListener('click', applySavedColor);

        blocksContainer.appendChild(block);
        blockCounter++;
    }

    function applySavedColor(event) {
        const clickedBlock = event.target;

        if (selectedColor !== null) {
            clickedBlock.style.backgroundColor = selectedColor;
            selectedColor = null;
        } else {
            selectedColor = clickedBlock.style.backgroundColor;
        }
    }

    generateButton.addEventListener('click', generateBlock);
    redInput.addEventListener('input', updateColor);
    greenInput.addEventListener('input', updateColor);
    blueInput.addEventListener('input', updateColor);
});
