alert ("Bienvenido a Crossfit NUWA. ¿Que clase te gustaria tomar?")
let clase = prompt("selecciona la clase que te gustaria tomar: \n1. Crossfit \n2. Funcional \n3. Gap");

while(clase != "ESC"){
   switch (clase) {
      case "Crossfit":
        alert("Felicidades, reservaste una clase de Crossfit");
        break;
      case "Funcional":
        alert ("Felicidades, reservaste una clase de Funcional");
        break;
      case "Gap":
        alert("Felicidades, reservaste una clase de Gap")
        break;
        default:
         alert("debes ingresar una clase")   
   }
clase = prompt("Para continuar ingrese una clase")  
}