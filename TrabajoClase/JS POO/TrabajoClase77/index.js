var miobjeto={
    nombre: "Juan",
    edad: 30
};
var mensaje="Mi nombre es "+ miobjeto.nombre+"\r\n";
mensaje+="Tengo "+miobjeto["edad"] + "años";
alert(mensaje);