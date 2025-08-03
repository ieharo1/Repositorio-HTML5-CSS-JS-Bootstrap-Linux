var constructor = function(){
    
    var nombre= "Juan";
    var edad= 30;
    var obj={
        mostrarnombre: function(){
            alert(this.nombre);
        },
        cambiarnombre: function(nombrenuevo){
            this.nombre=nombrenuevo;
        }
    };
    return obj;
};
var empleado1= constructor();
empleado1.mostrarnombre();