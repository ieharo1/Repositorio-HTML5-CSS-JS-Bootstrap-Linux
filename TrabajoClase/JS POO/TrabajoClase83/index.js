var miobjeto={
    nombre: "Juan",
    edad: 30,
    mostrardatos: function(){
        var mensaje = "Nombre: "+miobjeto.nombre+"\r\n";
        mensaje+="Edad: "+miobjeto.edad;
        alert(mensaje);
    },
    nombreactual:function(){
        var actual=miobjeto.nombre;
        return actual;
    },
    cambiarnombre: function(nombrenuevo){
        miobjeto.nombre=nombrenuevo;
        return nombrenuevo;
    }
};
console.log(miobjeto);
var actual=miobjeto.nombreactual();
alert("El nombre anterior era: "+actual);
miobjeto.cambiarnombre("Jose")
alert("El nombre actual era: " + miobjeto.cambiarnombre("Jose"));
console.log(miobjeto);
var actual=miobjeto.nombreactual();
alert("El nombre anterior era: "+actual);
console.log(miobjeto);
