var texto = "Hola Mundo";
var mensaje = "";
var anterior="";
for (var f =0;  f <texto.length; f++){
     if(mensaje!= ""){
          anterior = texto[f-1];
          if(anterior!=" "&& texto[f]!=" "){
               mensaje+=".";
          }
     }
     mensaje+=texto[f];
}
alert(mensaje);