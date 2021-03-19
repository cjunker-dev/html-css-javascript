console.log("hello world");
function button_click(){
    let inCtrl = document.getElementById("input");
    let inValue = inCtrl.value;
    let outCtrl = document.getElementById("output");
    outCtrl.value = inValue;
}

function add1(n) {
    return n+1
}