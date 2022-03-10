function selectColor(){
    let color = document.getElementById("colorbg").value
    document.body.style.backgroundColor = color;
    document.getElementById("currentColor").innerHTML = color
}

function randomColor(){
    let randomColor = "#"+Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
    document.getElementById("currentColor").innerHTML = randomColor
}