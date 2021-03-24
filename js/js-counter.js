let number = 0;
// gen 2 funcion: let increment = function(){}
//gen 3 function: const decrement = () => {}
function plus_click(){
    number++;
    display(number);

}

function minus_click(){
    number--;
    display(number);
}
const display = () =>{
    let output = document.getElementById("field");
    output.value = number;
    style_number(number);
}

function style_number(nbr){
    let output = document.getElementById("field");
    output.value = nbr;
    output.style.color = (nbr % 2 == 0) ? "red" : "black";
    output.style.fontWeight = (nbr % 3 == 0) ? "bold" : "normal";
    output.style.fontStyle = (nbr % 5 == 0) ? "italic" : "normal";

}