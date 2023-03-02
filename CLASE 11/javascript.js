/*ejercicio if (heladeria)*/
let topping;
let precio;
let precioFinal;
let helado = 5;

if (topping === "Oreo") {
  precio = 10;
} else if (topping === "KitKat") {
  precio = 15;
} else if (topping === "Kinder") {
  precio = 25;
} else {
  console.log("No tenemos este topping");
}
/*al no cumplirse ninguno de los condicionales anteriores que dan valor a la variable precio*/
/*esta no toma ningun valor por eso al sumar helado+precio en la variable precioFinal el resultado es NaN.*/
/*para solucionar eso se deberia dar un valor por default a topping pero esto va contra la consigna del ejercicio*/
precioFinal = helado + precio;
console.log("El helado cuesta $" + precioFinal);

/*ejercicio switch*/

let menu = "pescado";

switch (menu) {
  case "carne":
    console.log("Ofrecemos vino tinto con la carne");
    break;
  case "pescado":
    console.log("Ofrecemos vino blanco con el pescado");
    break;
  case "verdura":
    console.log("Ofrecemos agua con la verdura");
    break;
  default:
    console.log("Por favor, elija carne, pescado o verdura");
}

/*ejercicio for (array)*/
let Array1 = ["manzana", "pera", "banana", "naranja"];

for (let i = 0; i < Array1.length; i++) {
  let fruta = Array1[i];
  console.log("La " + fruta + " está en la posición " + i);
}
/* agrego uva y vuelvo a recorrer*/
Array1.push("uva");

for (let i = 0; i < Array1.length; i++) {
  let fruta = Array1[i];
  console.log("La " + fruta + " está en la posición " + i);
}

/*ejercicio while*/
let numero = 1;

while (numero < 11) {
  console.log("El número es más chico que 11");
  numero++;
}






























