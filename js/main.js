alert("Bienvenido a Crossfit NUWA");

function reservarClase() {
  let input;
  do {
    input = parseInt(prompt("selecciona el numero de la clase que te gustaria tomar: \n1. Crossfit \n2. Funcional \n3. Gap"));
    if (input > 3) {
      alert("ingrese un numero valido")
    }
  } while (input > 3)
  return input;
}

let claseUno = reservarClase();


do {
  if (claseUno == 1) {
    alert ("Felicidades, reservaste una clase de Crossfit") 
  } else if (claseUno == 2) {
    alert ("Felicidades, reservaste una clase de Funcional")
  } else {
    alert ("Felicidades, reservaste una clase de Gap")
  } 
} while (claseUno <= 4);


