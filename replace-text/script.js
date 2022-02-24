let replacement = "I need help. ";


let trigger = document.getElementById("trigger");
trigger.addEventListener("click", replaceText);

let paragraph = document.getElementById("text");
let text = paragraph.innerHTML;
let text_arr = [];
let counter = 0;

for (let i = 0; i<text.length; i++){
    text_arr.push(text[i]);
}

function replaceText(){
    setInterval(updateText, 16)  
}

function updateText(){
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
    
    paragraph.innerHTML = new_paragraph;
    //console.log("yo")
}
//paragraph.innerHTML = "hello"