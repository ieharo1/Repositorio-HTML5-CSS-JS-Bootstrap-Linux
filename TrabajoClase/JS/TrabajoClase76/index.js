var nombre="Juan Perez";
var codificado= encodeURIComponent(nombre);
var miURL="http:www.ejemplo.com/contacto/html?nombre="+codificado;
alert(miURL);