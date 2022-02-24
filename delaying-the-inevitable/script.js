paragraphs = document.getElementsByTagName("p");


// you have to use index to iterate, otherwise will return undefined
// https://stackoverflow.com/questions/12324733/opacity-and-style-undefined-when-accesing-element-in-js-but-defined-in-css


document.onscroll = function(){ 
    var pos = getVerticalScrollPercentage(document.body);
    // document.body.innerHTML = "<span>" + Math.round(pos) + "%<span>"
    console.log(pos)
    var spacing = 10.1 * pos;
    for (let i = 0; i < paragraphs.length; i++){
        paragraphs[i].style.marginBottom = spacing + "px";
    }
}
function getVerticalScrollPercentage( elm ) {
    var p = elm.parentNode
    return (elm.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight ) * 100
}