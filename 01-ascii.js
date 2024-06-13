let numero = (68, 55, 7);
for (i = 1; i <= numero.length; i++) {
  let caracter = String.fromCharCode(numero);
  console.log(caracter); // Output: A
}

let caracter2 = "Marramiau";
for (i = 1; i <= caracter2.length; i++) {

  let numero2 = caracter2.charCodeAt(i - 1);

  console.log(numero2);
}
