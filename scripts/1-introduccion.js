// Primer módulo
alert("Práctica número 1! ");

let persona = {
    nombre: "Facundo",
    apellido: "Vinitzca",
    edad: parseInt(prompt("Ingrese su edad: "))
}


escribirAlert(persona.edad);

console.log(persona);
console.log(persona.edad);
console.log({persona});


/* Funciones */
// Módulo 1:
function escribirAlert(edad) {
    edad >= 18 ? alert("La persona es mayor de edad!") : alert("La persona es menor de edad!");
    console.log("La persona tiene [" + edad + "] años");
}