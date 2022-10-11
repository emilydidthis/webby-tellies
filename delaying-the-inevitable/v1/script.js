
let slider = document.getElementById("range"); // gives line-height value
let lineHeight = document.getElementById("line-height");
let text = document.getElementById("text");
slider.addEventListener("input", updateOutput);

function updateOutput(){
    // display the current line height 
    lineHeight.innerHTML = "Line height: " + slider.value;
    text.style.lineHeight = slider.value;
}

setInterval(elongate, 1000/60)

function elongate(){
    console.log("hi" + slider.value);
    slider.value = parseFloat(slider.value) + .05;
    
    updateOutput();
}