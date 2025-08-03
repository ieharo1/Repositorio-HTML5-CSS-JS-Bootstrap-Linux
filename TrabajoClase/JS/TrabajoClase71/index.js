var contador =100;
var items=5;
function mifuncion(valor1, valor2){
    var total=valor1+valor2;
    if(total>100){
        return total;
    }
    else{
        return 0;
    }
}
var resultado = mifuncion(contador, items);
alert(resultado);