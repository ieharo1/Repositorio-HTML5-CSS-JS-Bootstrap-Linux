var hoy = new Date(2017,0,5);
var futuro = new Date(2017, 0, 20);
var intervalo = futuro-hoy;
var dias = intervalo/(24*60*60*1000);
alert(dias+" dias");