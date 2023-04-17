let hoy = new Date();
let yearHoy = hoy.getFullYear();
let mes;



let yearNac = prompt("¿En qué año naciste?")
let diaNac = prompt("Escribe el día que naciste");
let mesNac = prompt("Escribe el número del mes en el que naciste (1-12)");
if (mesNac >= 1 && mesNac <= 12) {
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    mes = meses[mesNac - 1]
  } else {
    alert("El número ingresado no es válido");
  }
let horaNac = prompt("Escribe la hora que naciste");
  
años = yearHoy - yearNac

mes = mesNac - 1
let mesActual = hoy.getMonth();

if (mes === mesActual || mesActual < mes  ){
años = años - 1
}

let fechaNac = new Date(yearNac, mesNac - 1, diaNac, horaNac);

console.log(`Tu fecha de nacimiento es: ${fechaNac}`);
console.log(`Tu edad es: ${años}`);



/* console.log(yearHoy)
console.log(yearNac)
console.log(años)
console.log(mes)
console.log(diaNac)
console.log(horaNac)
console.log(mesActual) */

