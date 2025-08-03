var miobjeto={
    nombre: "Juan",
    edad: 30,
    mostrardatos: function(){
        var mensaje = "Nombre: "+miobjeto.nombre+"\r\n";
        mensaje+="Edad: "+miobjeto.edad;
        alert(mensaje);
    },
    cambiarnombre: function(nombrenuevo){
        var nombreviejo=this.nombre;
        this.nombre=nombrenuevo;
        return nombreviejo;
    }
};
var anterior= miobjeto.cambiarnombre("Jose");
alert("El nombre anterior era: "+anterior);