let nombre = "Ana";
let edad = 22;

const numeros = [3, 7, 12, 5, 2];
const cuadrados = numeros.map((num) => num * num);
const mayores = numeros.filter((num) => num > 5);
console.log(`Soy  ${nombre}  y tengo ${edad} años`);
console.log("Numeros al cuadrado" ,cuadrados);
console.log("Numeros mayores que cinco" ,mayores);