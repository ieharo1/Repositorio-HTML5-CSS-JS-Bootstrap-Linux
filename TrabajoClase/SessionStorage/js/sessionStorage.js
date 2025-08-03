function iniciar(){
    var boton = document.getElementById("grabar");
    boton.addEventListener("click", nuevoItem);
    window.addEventListener("storage", mostrar);
    mostrar();
}
function nuevoItem(){
    var clave = document.getElementById("clave").value;
    var valor = document.getElementById("valor").value;
    sessionStorage.setItem(clave, valor);
    document.getElementById("clave").value="";
    document.getElementById("valor").value="";
    mostrar();
}
function mostrar(){
    var cajadatos= document.getElementById("cajadatos");
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