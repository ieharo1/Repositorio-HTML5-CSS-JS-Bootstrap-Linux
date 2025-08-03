var constructor = function( nombreinicial){
    var obj={
        nombre: nombreinicial,
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
var empleado= constructor("Juan");
empleado.mostrarnombre();