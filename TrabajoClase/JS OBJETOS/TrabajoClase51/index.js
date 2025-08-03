var hoy = new Date(2017,0,20,10,35);
var futuro = new Date(2017,0,20,12,35);
hoy.setHours(0,0,0);
futuro.setHours(0,0,0);
if(futuro.getTime()==hoy.getTime()){
    alert("Las fechas son iguales");
}
else{
    alert("Las fechas son diferentes");
}