var lista=[12,5,80,34];
var listanueva= lista.filter(function(valor){
    if(valor<=50){
        return true;
    }else{
        return false;
    }
});
alert(listanueva);