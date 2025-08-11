//ejercicio 1
let edad = prompt("Ingrese su edad: ");
if (isNaN(edad) || edad.trim() === "") {
  document.write("Ingrese un numero valido");
} else {
  edad = parseInt(edad);

  if (edad >= 18) {
    document.write(" Usted puede conducir");
  } else {
    document.write(" Usted no puede conducir por ser menor de edad");
  }
}
//ejercicio 2
let nota = prompt("Ingrese una nota del 0 al 10: ");
if (isNaN(nota) || nota.trim() === "") {
  alert("Ingrese un numero valido");
} else {
  nota = parseInt(nota);
  if (nota < 0 || nota > 10) {
    alert("Numero erroneo");
  } else {
    switch (true) {
      case nota >= 0 && nota <= 2:
        alert("Muy deficiente");
        break;
      case nota >= 3 && nota <= 4:
        alert("Insuficiente");
        break;
      case nota >= 5 && nota <= 6:
        alert("Suficiente");
        break;
      case nota === 7:
        alert("Bien");
        break;
      case nota === 8 || nota === 9:
        alert("Notable");
        break;
      case nota === 10:
        alert("Sobresaliente");
        break;
      default:
        alert("Numero erroneo");
    }
  }
}
//ejercicio 3
let cadenas = [];
let continuar = true;
while (continuar) {
  let texto = prompt(" Ingrese un texto: ");
  if (texto.trim() !== "" && texto !== null) {
    cadenas.push(texto);
  }
  continuar = confirm("¿Desea agregar mas texto?");
}
let resultado1 = cadenas.join(" - ");
document.write("Texto unido: " + resultado1);

//ejercicio 4
let suma = 0;
let numero = prompt("Ingrese un número: ");
while (numero !== null) {
  numero = numero.trim();

  
  if (numero === "" || isNaN(numero)) {
    alert("Ingrese un número válido");
  } else {
    suma += parseInt(numero);
  }

  numero = prompt("Ingrese otro número o presione cancelar para detener el programa");
  if (numero === null) break;
}
alert("La suma total es: " + suma);
//ejercicio 5
let letras =["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
while(true){
  let dni = prompt("Ingrese su DNI");
  if (dni ===null){
    break;
  }
  dni = Number(dni);
  if (isNaN(dni)|| dni < 0 || dni > 99999999){
    alert("Ingrese un dni valido");
    continue;
  }
  let resto = dni % 23;
  let letra = letras[resto];
  alert("La letra corespondiente al dni "+ dni + " es: " + letra);
}
//ejercico 6
let i = 1; 
while (i <= 30) {      
  let linea = String(i).repeat(i); 
  console.log(linea);              
  i++;                             
}
//ejercicio 7
let nro = parseInt(prompt("Ingrese un numero no mayor a 50"));
if (nro > 50 || nro < 1 ){
  alert("Por favor introduzca un numero valido");

}else{
  while(nro >= 1){
    let linea = String(nro).repeat(nro);
    console.log(linea);
    nro --;
  }
}
//ejercicio 8
let num = parseInt(prompt("ingrese un numero no mayor a 50"));
if (num > 50 || num < 1){
  alert("Por favor ingrese un numero valido");
}else{
  let linea = "";
  for(let i = 1; i <= num; i ++){
    linea += i;
    console.log(linea);
  }
}
//ejercicio 9
for(let i = 1; i <= 500; i ++){
  let linea = i;
  if(i % 4 === 0){
    linea += "(multiplo de 4)";
  }
  if(i % 9 === 0){
    linea += "(multiplo de 9)";
  }
  console.log(linea);
  if(i  % 5 === 0){
    console.log("------------");
    
  }
  
}
//ejercicio 10
let filas = parseInt(prompt("Ingrese un numero para hacer filas"));
let columnas = parseInt(prompt("Ingrese un numero para hacer columnas"));
let actual = filas * columnas;
for(let i = 1; i <= filas; i ++){
  let linea = "";
  for(let j = 1; j <= columnas; j ++){
    linea += actual + "\t";
    actual --;
  }
  console.log(linea);
  
} 
//ejercicio 11
let nombre1 = prompt("Ingrese un nombre");
let edad1 = parseInt(prompt("Ingrese la edad de "+ nombre1));
let nombre2 = prompt("Ingrese otro nombre");
let edad2 = parseInt(prompt("Ingrese la edad de "+ nombre2));
let nombre3 = prompt("Ingrese un nuevo nombre");
let edad3 = parseInt(prompt("Ingrese la edad de "+ nombre3));
let mayor = Math.max(edad1,edad2,edad3);
let nombreMayor;
if(mayor === edad1){
  nombreMayor = nombre1;
}else if(mayor === edad2){
  nombreMayor = nombre2;
}else if(mayor === edad3){
  nombreMayor = nombre3;
}
document.write(" La persona con mayor edad es: "+nombreMayor + " con "+ mayor + " años.");
//ejercicio 12
let aleatorio = Math.floor(Math.random()*100);
alert("El numero es: "+ aleatorio);

//ejercicio 13
let texto = prompt("Ingrese un texto");
alert("su texto en mayusculas es: "+ texto.toUpperCase());

//ejercicio 14
let frase = prompt("Ingrese una frase");
let resultado = "";
for(let i = 0; i< frase.length; i ++){
  resultado += frase[i];
  if(i < frase.length -1){
    resultado += "-";
  }
}
alert(resultado);

//ejercicio 15
let frase1 = prompt("Ingrese una frase");
let contador = 0 ;
let vocales1 = "aeiouAEIOU";
for(let i = 0; i < frase1.length; i ++){
  if(vocales1.includes(frase1[i])){
    contador ++;
  }
}
alert("La frase contiene " + contador + " vocales.");

//ejercicio 16
let frase2 = prompt("Ingrese una frase");
let invertida = "";
for( let i = frase2.length -1; i>= 0; i --){
invertida += frase2[i];
}
alert(invertida);

//ejercico 17
let frase3 = prompt("Introduzca una frase");
let vocales = "aeiouAEIOU";
for(let i = 0; i< frase3.length; i ++){
  if(vocales.includes(frase3[i])){
    alert("Primera vocal es: "+frase3[i]+" posicion "+ i);
    break;
  }
}







