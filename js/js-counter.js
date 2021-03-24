let number = 0;

function plus_click(){
    number++;
    let output = document.getElementById("field");
    output.value = number;
    style_number();
}

function minus_click(){
    number--;
    let output = document.getElementById("field");
    output.value = number;
    style_number();
}

function style_number(){
    let output = document.getElementById("field");
    if (output.value % 2 == 0){
        output.style.color = "red";
    }
    else {
        output.style.color = "black";
    }
    if (output.value % 3 == 0){
        output.style.fontWeight = "bold";
    }
    else {
        output.style.fontWeight = "normal";
    }
    if (output.value % 5 == 0){
        output.style.fontStyle = "italic";
    }
    else {
        output.style.fontweight = "normal";
    }
}