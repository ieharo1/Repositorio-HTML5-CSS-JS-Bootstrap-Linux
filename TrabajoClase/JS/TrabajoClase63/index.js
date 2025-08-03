var total=5;
function calcularValores(){
    total=total*2;
}
for(var f=0; f<10;f++){
    calcularValores();
}
alert("EL total es: " +total);