var variableGlobal=5;
function mifuncion(){
    var variableLocal="El valor es ";
    alert(variableLocal+variableGlobal);
}
mifuncion();
alert(variableLocal);