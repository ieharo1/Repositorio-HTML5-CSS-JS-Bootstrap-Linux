function MiObjeto(nombreinicial, edadincial){
    this.nombre= nombreinicial;
    this.edad= edadincial;
    this.mostrarnombre = function(){
        alert(this.nombre);
    };
    this.cambiarnombre= function(nombrenuevo){
            this.nombre=nombrenuevo;
    }
};
var empleado1= new MiObjeto("Roberto", 55);
empleado1.mostrarnombre();