//1. En un formulario web pides al usuario su nombre completo y quieres
//asegurarte de que no haya espacios al inicio o final, y además quieres
//mostrar cuántos caracteres tiene el nombre sin contar los espacios.


import readline from 'readline';
const rl =readline.createInterface({
    input: process.stdin,
    output:process.stdout
})


//rl.question("Ingrese nombre completo del usuario: ", (nombre) => {
//  const nombreLimpio = nombre.trim();
  //const nombreSinEspacios = nombreLimpio.replaceAll(" ", "");
  //const numCaract = nombreSinEspacios.length;

  //console.log(`Nombre limpio: ${nombreLimpio}`);
  //console.log(`Nombre sin espacios: ${nombreSinEspacios}`);
  //console.log(`Cantidad de caracteres sin espacios: ${numCaract}`);




//2. Un sistema de registro de usuarios necesita guardar todos los correos
//electrónicos en minúsculas para evitar duplicados causados por
//diferencias en mayúsculas y minúsculas. Además, se requiere verificar si
//el correo pertenece al dominio @gmail.com antes de aceptarlo.



//rl.question("Ingrese su correo electrónico: ", (correo) => {
   //const correoNormalizado = correo.toLocaleLowerCase();
   //const dominioValido = correoNormalizado.includes("@gmail.com");

 //  if (dominioValido) {
     //console.log("Correo aceptado:", correoNormalizado);
 //  } else {
     //console.log("Error: el correo no pertenece al dominio @gmail..com");
   //}
 //});




// 3. de un código generado automáticamente solo se requiere mostrar los
//últimos 4 caracteres

//rl.question("Ingrese el código generado: ", (codigo) => {
  //const ultimos4 = codigo.slice(-4);

  //console.log("Últimos 4 caracteres del código:", ultimos4);

  //rl.close();
//);

//4. Un programador quiere saber en qué parte de su mensaje aparece la
//palabra error

rl.question("Ingrese el mensaje: ", (mensaje) => {
  const mensajeMinuscula = mensaje.toLowerCase();
  const posicion = mensajeMinuscula.indexOf("error");

  if (posicion !== -1) {
    console.log(`La palabra "error" aparece en la posición: ${posicion}`);
  } else {
    console.log('La palabra "error" no aparece en el mensaje.');
  }

  rl.close();
});
