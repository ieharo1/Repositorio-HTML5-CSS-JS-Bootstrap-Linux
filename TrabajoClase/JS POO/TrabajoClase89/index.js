function MiObjeto(){
    this.nombre= "Juan";
    this.edad= 30;
    this.mostrarnombre = function(){
        alert(this.nombre);
    };
    this.cambiarnombre= function(nombrenuevo){
            this.nombre=nombrenuevo;
    }
};
var empleado1= new MiObjeto();
empleado1.mostrarnombre();