checkbox = document.getElementById("good-enough");

setInterval(checkToggle, 10)
function checkToggle(){
    if (checkbox.checked == true) {
        setTimeout(function() {
            checkbox.checked = false;
            console.log("hey")
        }, 1000)
    }
}