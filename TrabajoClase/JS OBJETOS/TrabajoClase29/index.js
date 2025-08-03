var lista=[12,5,80,34,5];
var buscar = 5;
var ultimo =0;
var contador =0;
while(ultimo>=0){
    var ultimo = lista. indexOf(5, ultimo);
    console.log(ultimo);
    if(ultimo!=-1){
        ultimo++;
        console.log(ultimo);
        contador++;
    }
}
alert("Hay un total de "+contador+"numeros "+buscar)