function saludo() {
    let Nombre=prompt("Ingresa tu nombre");
    let Apellido=prompt("Ingrese su apellido (opcional)");
    if (Nombre == null || Nombre == "") {
      alert("Por favor, ingrese su nombre.");
    } else {
      alert("Bienvenido"+" "+ Nombre +" "+Apellido+ "!");
    }
  }
saludo()



/*function mostrarNombre (nombre){
    alert(nombre);
}

mostrarNombre("Ariel");

let Nombre=prompt("Ingresa tu nombre");
let Apellido=prompt("Ingrese su apellido");
alert("Hola"+" "+Nombre +" "+Apellido);
console.log(miNombre)
console.log(miApellido)
console.log(miEdad)
*/
