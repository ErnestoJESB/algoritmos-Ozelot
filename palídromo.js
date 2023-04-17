let palabra = prompt("Escribe una palabra");
palabra = palabra.toLowerCase().replace(/\s/g, "");
let arbalap = palabra.split("").reverse().join("");

if (palabra === arbalap){
    console.log("Tu palabra que ingresaste es un palídromo")
}else{
    console.log("Tu palabra que ingresaste no es un palídromo")
}

