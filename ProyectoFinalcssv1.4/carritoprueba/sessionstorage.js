function iniciar(){
    var boton= document.getElementById("grabar");
    boton.addEventListener("click", nuevoItem);
   
    var boton2 = document.getElementById("grabar2");
    boton2.addEventListener("click", nuevoIte);
    
    window.addEventListener("storage", mostrar);
    mostrar();
}
var aux =1, aux2=1;
function nuevoIte(){
    var clave = "veinte"+aux2;
    var valor = "26.99";
    sessionStorage.setItem(clave, valor);
    aux2++;
    mostrar();
}
function nuevoItem(){
    var clave = "nueve"+aux;
    var valor = "9.99";
    sessionStorage.setItem(clave, valor);
    aux++;
    mostrar();
}
function mostrar(){
    var cajadatos = document.getElementById("cajadatos");
    cajadatos.innerHTML = '<div><input type="button" onclick="borrarTodos()" value="Borrar Todo"></div>';
    for(var i=0; i<sessionStorage.length; i++){
        var clave = sessionStorage.key(i);
        var valor = sessionStorage.getItem(clave);
        cajadatos.innerHTML += "<div>"+clave+"-"+valor+"</div>";
        cajadatos.innerHTML += '<div><input type="button" onclick="borrarItem(\''+clave+'\')" value="Borrar Item"></div>'
    }
}

function borrarTodos(){
    if(confirm("Estas seguro que deseas borrar todos los datos?"))
    {
        sessionStorage.clear();
        mostrar();
    }
}
function borrarItem(clave){
    if(confirm("Estas seguro que deseas borrar el item seleccionado?")){
        sessionStorage.removeItem(clave);
        mostrar();
    }
}
window.addEventListener("load", iniciar);