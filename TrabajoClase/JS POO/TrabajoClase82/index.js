var miobjeto={
    nombre: "Juan",
    edad: 30,
    mostrardatos: function(){
        var mensaje = "Nombre: "+miobjeto.nombre+"\r\n";
        mensaje+="Edad: "+miobjeto.edad;
        alert(mensaje);
    },
    cambiarnombre: function(nombrenuevo){
        miobjeto.nombre=nombrenuevo;
    }
};
miobjeto.mostrardatos();
miobjeto.cambiarnombre("Jose");
miobjeto.mostrardatos();
