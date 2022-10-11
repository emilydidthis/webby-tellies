let replacement = "I need help. ";


let trigger = document.getElementById("trigger");
trigger.addEventListener("click", replaceText);

// getting words from paragraph and assigning to variable
let paragraph = document.getElementById("text");
let text = paragraph.innerHTML;

// creating new array of text
let text_arr = [];
let counter = 0;

// filling in text array with original text
for (let i = 0; i<text.length; i++){
    text_arr.push(text[i]);
}

// called when trigger is pushed
function replaceText(){
    // updates text at an interval
    setInterval(updateText, 16)  
}

function updateText(){

    // replace letters in the array with "I need help" and loops
    text_arr[counter] = replacement[counter%replacement.length];
    if (counter <= text.length) {
        counter++;
        console.log(text_arr.length)
        console.log(counter)
    }       
    let new_paragraph="";
    for (let i = 0; i<text_arr.length; i++){
        new_paragraph += text_arr[i];
    }
    //console.log(new_paragraph)
    //console.log(paragraph.innerHTML)
    
    //replace with new paragraph
    paragraph.innerHTML = new_paragraph;
    //console.log("yo")
}
//paragraph.innerHTML = "hello"