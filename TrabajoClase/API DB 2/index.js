var cajadatos, bd;
function iniciar(){
    cajadatos= document.getElementById("cajadatos");
    var boton = document.getElementById("buscar");
    boton.addEventListener("click", buscar);
    var solicitud = indexedDB.open("basededatos");
    solicitud.addEventListener("error", mostrarerror);
    solicitud.addEventListener("success", comenzar);
    solicitud.addEventListener("upgradeneeded", crearbasededatos);
}
function mostrarerror(evento){
    alert("error: "+evento.code +" mensaje del error: "+evento.message);

}
function comenzar(evento){
    bd= evento.target.result;
}
function crearbasededatos(evento){
    var bd = evento.target.result;
    var almacendatos= bd.createObjectStore("peliculas",{keyPath: "id"});
    almacendatos.createIndex("BuscarFecha", "fecha", {unique: false}); 
}
function buscar(){
    cajadatos.innerHTML="";
    var buscar = document.getElementById("fecha").value;
    var transaccion = bd.transaction(["peliculas"]);
    var almacen = transaccion.objectStore("peliculas");
    var indice = almacen.index("BuscarFecha");
    var rango = IDBKeyRange.only(buscar);
    var puntero = indice.openCursor(rango);
    puntero.addEventListener("success", mostrardatos);
}
function mostrardatos(evento){
    var puntero = evento.target.result;
    if(puntero){
        cajadatos.innerHTML+="<div>"+puntero.value.id+"-"+puntero.value.nombre+"-"+puntero.value.fecha+"</div>"
        puntero.continue();
    }
}
window.addEventListener("load", iniciar);