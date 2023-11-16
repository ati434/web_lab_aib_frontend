let blueButton = document.getElementById("blueButton");
let redButton = document.getElementById("redButton");
let greenButton = document.getElementById("greenButton");

function resetButtonStyles() {
    blueButton.classList.remove("active");
    redButton.classList.remove("active");
    greenButton.classList.remove("active");
}

blueButton.addEventListener("click",()=>{
    let body = document.getElementById("body");
    resetButtonStyles();
    body.style.backgroundColor = "blue";
    blueButton.classList.add("active");
});

redButton.addEventListener("click",()=>{
    let body = document.getElementById("body");
    resetButtonStyles();
    body.style.backgroundColor = "red";
    redButton.classList.add("active");
});

greenButton.addEventListener("click",()=>{
    let body = document.getElementById("body");
    resetButtonStyles();
    body.style.backgroundColor = "green";
    greenButton.classList.add("active");
});
