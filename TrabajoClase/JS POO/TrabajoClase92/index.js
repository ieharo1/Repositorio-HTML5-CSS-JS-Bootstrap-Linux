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
var empleado2= Object.create(empleado1);
var empleado3= Object.create(empleado2);
empleado2.mostraredad = function(){
    alert(this.edad);
};
empleado3.edad=24;
empleado3.mostraredad();