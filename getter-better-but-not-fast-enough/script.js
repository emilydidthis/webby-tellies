negatives = document.getElementsByTagName("span")
console.log(negatives)

// hide all negatives
for (let i = 0; i < negatives.length; i++){
  negatives[i].style.display = "none";
}

title = document.getElementById("title");

title.addEventListener("click", toggleNegative);

text = document.getElementsByTagName("p");
for (let i = 0; i < text.length; i++){
  text[i].addEventListener("click", toggleNegative);
}

function toggleNegative(e){
  console.log("toggling")
  let negElement = e.target.getElementsByTagName("span");
  if (negElement[0].style.display == "none"){
    negElement[0].style.display = "inline-block";
    console.log("set to display", negElement[0].style.display)
  }
  else {
    negElement[0].style.display = "none";
    console.log("set to none", negElement[0].style.display)
  }
}