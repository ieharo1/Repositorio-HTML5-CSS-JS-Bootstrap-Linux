var constructor = function(nombreincial){
    var obj={
        nombre: nombreincial,
        edad: 30,
        mostrarnombre: function(){
            alert(this.nombre);
        },
        cambiarnombre: function(nombrenuevo){
            this.nombre=nombrenuevo;
        }
    };
    return obj;
};
var empleado1= constructor("Juan");
var empleado2= constructor("Roberto");
var empleado3= constructor("Arturo");
alert(empleado1.nombre+", "+empleado2.nombre +", "+empleado3.nombre);