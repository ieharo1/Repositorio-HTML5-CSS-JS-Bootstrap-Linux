var lista=[2,4,6,8];
var total=0;
for(var f=0; f<4; f++){
    var numero = lista[f];
    if(numero==6){
        break;
    }
    total+= numero;
}
alert("El total es: "+total);