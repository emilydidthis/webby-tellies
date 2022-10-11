let replacement = "I need help. ";


// get all paragraphs 
let paragraphs = document.getElementsByTagName("p")

// create new array to house paragraphs
let ps = [];

// populate with the correct number of empty arrays per paragraph
for (let p = 0; p < paragraphs.length; p++){
    ps.push([]);
}

// add an array of letters for each paragraph
for (let p = 0; p < paragraphs.length; p++){
    let text = paragraphs[p].innerHTML;
    for (let l = 0; l < text.length; l++){
        ps[p][l] = text[l];
    }
}
console.log(ps)

// called after a delay
setTimeout(replaceText, 5000);

function replaceText(){
    // updates text at an interval
    setInterval(updateText, 50) 
    console.log(ps) 
}

let p_counter = 0;
let l = 0
function updateText(){
    console.log("updatetext")
    // actively replace letters
    console.log(p_counter, l)
    console.log(ps[p_counter][l])
    console.log(replacement[l%replacement.length])
    ps[p_counter][l] = replacement[l%replacement.length]
    //console.log(ps[p_counter][l])
    console.log("length", ps[p_counter].length)
    if(l == ps[p_counter].length - 1){
        // test to see if I need help is not finished
        console.log("next paragraph")
        if (l%replacement.length !=0){
            ps[p_counter][l] = replacement.substring(l%replacement.length, replacement.length)
        }
        p_counter++;
        l = 0;
        
   
    } else {
        l++;
    }
    // update text
    // loop through all the paragraphs
    // update their text with the text from ps array
    for (let p = 0; p < paragraphs.length; p++){
        let updatedText = "";
        for (let l = 0; l < ps[p].length; l++){
            updatedText += ps[p][l]
        }
        paragraphs[p].innerHTML = updatedText;
    }
}


