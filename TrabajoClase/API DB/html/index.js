var bd, cajadatos;

function iniciar(){
    cajadatos = document.getElementById('cajadatos');
    var boton = document.getElementById('grabar');
    boton.addEventListener('click', agregarobjeto);
    var solicitud = indexedDB.open('basededatos');
    solicitud.addEventListener('error', mostrarerror);
    solicitud.addEventListener('success', comenzar);
    solicitud.addEventListener('upgradeneeded', crearbd);
}

function crearbd(evento){
    var basededatos =evento.target.result;
    var almacen = basededatos.createObjectStore('peliculas',{keyPath:'id'});
    almacen.createIndex('BuscarFecha', 'fecha', {unique:false});
}

function comenzar(evento){
    bd = evento.target.result;
    mostrar();
}

function mostrarerror(evento){
    alert('Error'+evento.code + 'Mensaje: '+evento.message);
}

function agregarobjeto(){
    var clave = document.getElementById('clave').value;
    var texto = document.getElementById('texto').value;
    var fecha = document.getElementById('fecha').value;
    var transaccion = bd.transaction(['peliculas'] , 'readwrite');
    var almacen = transaccion.objectStore('peliculas');
    transaccion.addEventListener('complete', mostrar);

    var datos = almacen.add({id: clave, nombre: texto, fecha: fecha});
    document.getElementById('clave').value ="";
    document.getElementById('texto').value ="";
    document.getElementById('fecha').value ="";
}
function mostrar(){
    cajadatos.innerHTML="";
    var transaccion = bd.transaction(["peliculas"]);
    var almacen = transaccion.objectStore("peliculas");
    var indice = almacen.index("BuscarFecha");
    var puntero = indice.openCursor(null, "prev");
    puntero.addEventListener("success", mostrarLista);
}
function mostrarLista(evento){
    var datos= evento.target.result;
    if(datos){
        cajadatos.innerHTML += "<div>"+datos.value.id+"-"+datos.value.nombre+"-"+datos.value.fecha+"</div>";
        cajadatos.innerHTML += '<input type="button" onclick="eliminarobjeto(\''+datos.value.id+'\')" value="Borrar"></div>';
        datos.continue();
    }
}
function eliminarobjeto(clave){
    if(confirm("estas seguro que deseas borrar el objeto?")){
        var transaccion = bd.transaction(["peliculas"], "readwrite");
        var almacen = transaccion.objectStore("peliculas");
        transaccion.addEventListener("complete", mostrar);
        var solicitud = almacen.delete(clave);
    }
}

window.addEventListener('load',iniciar);