var miobjeto = {
    nombre: "Juan",
    edad: 30,
    mostrarnombre : function(){
        alert(this.nombre);
    },
    cambiarnombre: function(nombrenuevo){
        this.nombre=nombrenuevo;
    }
};
var empleado1= Object.create(miobjeto);
empleado1.edad=24;
miobjeto.mostraredad = function(){
    alert(this.edad);
};
empleado1.mostraredad();