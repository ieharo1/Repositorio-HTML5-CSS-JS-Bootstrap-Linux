var lista=[12,5,80,34,101];
var valido= lista.every(function(valor){
    return valor <=100;
});
if(valido){
    alert("Los valores no son mayores que 100");
}

var lista=[12,5,80,34];
var valido= lista.every(function(valor){
    return valor <=100;
});
if(valido){
    alert("Los valores no son mayores que 100");
}