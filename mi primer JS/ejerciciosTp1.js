alert("un mensaje");

console.log("Ejercicio 2");

document.write("hello world ");

console.log("Ejercicio 3");
document.write(3+5);

console.log("Ejercicio 4");
let nombreUsuario = prompt("ingrese su nombre");
document.write(" Hola "+ nombreUsuario);

console.log("Ejercicio 5");
let numero1 = parseInt(prompt("Ingrese el primer numero"));
let numero2 = parseInt(prompt("Ingrese el segundo numero"));
document.write(" El resultado de la suma es : "+(numero1+numero2));

console.log("Ejercicio 6");
let num1 = parseInt(prompt("Ingrese el primer numero"));
let num2 = parseInt(prompt("Ingrese el segundo numero"));
if (num1>num2){
    document.write("El primer numero es el mas grande");
} else{
    document.write("El segundo numero es mas grande");
}

console.log("Ejercicio 7");
let nro1 = parseInt(prompt ("ingrese un numero"));
let nro2 = parseInt(prompt("ingrese otro numero"));
let nro3 = parseInt(prompt("ingrese un numero mas"));
if (nro1>=nro2 && nro1>=nro3){
    document.write("El primer numero es el mas grande");
}else if(nro2>=nro1 && nro2>=nro3){
    document.write("El segundo numero es el mas grande");
}else{
    document.write("El tercer numero es el mas grande");
}

let numero = parseInt(prompt("Ingrese un numero"));
if(numero % 2 === 0 ){
    document.write("El numero es divisible por 2");
}else{
    document.write("El numero no es divisible por 2");
}

let num = parseInt(prompt("Ingrese un numero"));
if(num % 2 === 0){
document.write(" El "+ num + " es divisible por 2");
}else if(num % 3 === 0){
document.write(" El "+ num + " es divisible por 3");
}else if(num % 5 === 0){
document.write(" El "+ num + " es divisible por 5");
}else if(num % 7 === 0){
 document.write(" El "+ num + " es divisible por 7");
}else{
document.write(" El "+ num + " No es divisible ni por 2 ni por 3 por 5 ni por 7");
}

 let n = parseInt(prompt("Ingrese un número"));
let mensaje = "El " + n;
let tieneDivisores = false;

if (n % 2 === 0) {
    mensaje += " es divisible por 2";
    tieneDivisores = true;
}

if (n % 3 === 0) {
    if (tieneDivisores) {
        mensaje += " y por 3";
    } else {
        mensaje += " es divisible por 3";
        tieneDivisores = true;
    }
}

if (n % 5 === 0) {
    if (tieneDivisores) {
        mensaje += " y por 5";
    } else {
        mensaje += " es divisible por 5";
        tieneDivisores = true;
    }
}

if (n % 7 === 0) {
    if (tieneDivisores) {
        mensaje += " y por 7";
    } else {
        mensaje += " es divisible por 7";
        tieneDivisores = true;
    }
}

if (!tieneDivisores) {
    mensaje += " no es divisible por 2, 3, 5 ni 7";
}

document.write(mensaje);

//ejercicio 9
let frase = prompt("Ingrese una frase");
let vocales = "";
for(let i = 0; i < frase.length; i ++){
    let caracter = frase.charAt(i).toLowerCase();
    if ("aeiou".includes(caracter)){
        vocales += caracter;
    }
}
document.write (" Las vocales son: "+ vocales)