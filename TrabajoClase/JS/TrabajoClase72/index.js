var mifuncion= function(valor){
    valor = valor*2;
    return valor;
}
var total=2;
for(var f=0; f<10;f++){
    total=mifuncion(total);
}
alert("el total es "+ total);