alert("Bienvenido a Nuwa, box de CROSSFIT");
alert(
  "En NUWA podés encontrar múltiples entrenamientos y programaciones pensadas para que logres tus objetivos sin dejar de entrenar en grupo."
);

let nombreIngresado;
do {
  nombreIngresado = prompt(
    "Porfavor, ingrese su nombre y apellido para continuar."
  );
  if (!isNaN(nombreIngresado)) {
    alert("Por favor ingrese un nombre valido");
  } else {
    alert(
      nombreIngresado +
        " elegí tu objetivo, cada vez que vengas a entrenar te vamos a recomendar la combinación perfecta de nuestros entrenamientos para que alcances tu objetivo. "
    );
  }
} while (nombreIngresado === null || !isNaN(nombreIngresado));

function reservarClase() {
  let input;
  do {
    input = parseFloat(
      prompt(
        "Selecciona que clase te gustaria reservar: \n1. Crossfit \n2. Funcional \n3. Gap"
      )
    );
    if (input <= 3) {
      alert("Clase registrada con exito");
    } else if (isNaN(input) || parseFloat(input)) {
      alert("ingrese un numero valido");
    }
  } while (isNaN(input) || input > 3);
  return input;
}
let claseUno = reservarClase();

let reservaDias = [];

let diaReservado;
let clasesReservadas;

do {
  diaReservado = prompt(
    'Ingresa el dia que te gustaria reservar, para finalizar ingresa "SALIR" .'
  );
  if (!isNaN(diaReservado) || diaReservado === null) {
    alert("ingrese un dia valido");
  } else if (diaReservado.toUpperCase() !== "SALIR") {
    clasesReservadas = parseInt(prompt("Ingresa la cantidad de clases que te gustaria reservar en el mes"));
    
    let nuwaReservas = {
      dia: diaReservado,
      clases: clasesReservadas,
    };
    reservaDias.push(nuwaReservas);
    console.log(reservaDias);
  }
} while (diaReservado.toUpperCase() !== "SALIR" ||diaReservado === null ||!isNaN(diaReservado) ||clasesReservadas == NaN);

console.log("Nuevo usuario registrado: " + nombreIngresado);

if (claseUno == 1) {
  console.log(
    nombreIngresado + "tu clase de Crossfit fue registrada con exito"
  );
} else if (claseUno == 2) {
  console.log(
    nombreIngresado + " tu clase de Funcional fue registrada con exito"
  );
} else if (claseUno == 3) {
  console.log(nombreIngresado + " tu clase de Gap fue registrada con exito");
}

