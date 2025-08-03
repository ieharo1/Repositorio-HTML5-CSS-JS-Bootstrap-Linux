var constructor = function(){
    var obj={
        nombre: "Juan",
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
var empleado= constructor();
empleado.mostrarnombre();