const redInput = document.getElementById('redInput');
const greenInput = document.getElementById('greenInput');
const blueInput = document.getElementById('blueInput');
const colorBox = document.getElementById('square');
let color;

function updateColor() {
    const redValue = redInput.value;
    const greenValue = greenInput.value;
    const blueValue = blueInput.value;
    color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    colorBox.style.backgroundColor = color;
}

redInput.addEventListener('input', updateColor);
greenInput.addEventListener('input', updateColor);
blueInput.addEventListener('input', updateColor);

const createButton = document.getElementById('inputButton');
const block = document.getElementById('block');
const maxBlock = 15;
let countBlock = 0;

createButton.addEventListener(`click`,()=>{
    if(countBlock>=maxBlock){
        document.getElementById((countBlock-maxBlock).toString()).style.backgroundColor = color;
        countBlock++;
        return;
    }
    const newBlock = document.createElement('div');
    newBlock.className = 'newBlock';
    newBlock.id = countBlock.toString();
    newBlock.style.padding = '5%';
    newBlock.style.width = '100%';
    newBlock.style.height = '100%';
    newBlock.style.border = '1px solid black';
    newBlock.onclick = ()=>{
        color = document.getElementById(newBlock.id).style.backgroundColor;
        console.log(color);
    }
    newBlock.style.backgroundColor = color;
    console.log(color);
    block.appendChild(newBlock);
    countBlock++;
});


const arrowLeft = document.querySelector(".arrow.left");
const arrowRight = document.querySelector(".arrow.right");
let currentIndex = 0;

arrowLeft.addEventListener('click', ()=>{
    const colorBlocks = document.querySelectorAll('.newBlock');
    currentIndex = (currentIndex - 1 +  colorBlocks.length) % colorBlocks.length;
    colorBlocks[currentIndex].style.display = 'flex';
    if(currentIndex === colorBlocks.length - 1) colorBlocks[0].style.display = 'none';
    else colorBlocks[currentIndex + 1].style.display = 'none';
    console.log("prev", currentIndex, colorBlocks.length);
});

arrowRight.addEventListener('click', ()=>{
    const colorBlocks = document.querySelectorAll('.newBlock');
    currentIndex = (currentIndex + 1) % colorBlocks.length;
    colorBlocks[currentIndex].style.display = 'flex';
    if(currentIndex === 0) colorBlocks[colorBlocks.length - 1].style.display = 'none';
    else colorBlocks[currentIndex - 1].style.display = 'none';
    console.log("next", currentIndex, colorBlocks.length);
});