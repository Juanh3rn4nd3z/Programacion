//const readline = require('readline');
import readline from 'readline'

// Crear la interfaz de readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Preguntar al usuario
//rl.question('¿En qué ciudad vives? ', (ciudad) => {
  //console.log( `Vive en : ${ciudad}`);
 // rl.close();
//});


// Solicitar al usuario su color favorito
//rl.question('¿Cuál es tu color favorito? ', (color) => {
  //console.log(`Tu color favorito es: ${color}`);
  //rl.close();
//});

//rl.question("Ingrese la primera palabra: ", (p1) =>{
    //rl.question("ingrese la segunda palabra: ", (p2)) => {
        //console.log(`${p1}) ${p2}`)
      //  rl.close();

    //})

//   rl.question("Ingrese primer número: ", (n1) => {
//  rl.question("Ingrese segundo número: ", (n2) => {
//    let suma = Number(n1) + Number(n2);
//    console.log("La suma es: " + suma);
//    rl.close();
//  })
//})

//Ejemplo


//rl.question("Ingrese un numero 1: ", (n1) => {
 // rl.question("Ingrese un segundo numero 2: ", (n2) => {
   // let num1= parseFloat(n1);
   //  let suma = num1+parseFloat(n2);
   //  console.log("El resultado de la suma:", suma);
   //  rl.close();
 //  })
// })

//Temperatura a celcius:

//rl.question("Ingrese una temperatura en Celsius: ", (celcius) => {
 // let tempParse = parseFloat(celcius);
 // let Fah = (tempParse * 9 / 5) + 32;
  //console.log("La conversión de la temperatura es:", Fah);
  //rl.close();
//});

//Area de un rectangulo:

rl.question("Ingrese la base del rectangulo: ", (Base) => {
  rl.question("Ingrese la altura del rectangulo: ", (Altura) => {
  let Area= (Base * Altura)
rl.close();
console.log("La Area del Rectangulo es:", Area);
  })
})
