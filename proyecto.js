let nombre;
do {
  nombre = prompt("Ingrese su Nombre");
  if (!/^[A-Za-z]+$/.test(nombre)) {
    alert("Error.");
  }
  if (nombre === null) {
    console.log("Debe ingresar Nombre");
  }
} while (!/^[A-Za-z]+$/.test(nombre) || nombre === null);

let apellido;
do {
  apellido = prompt("Ingrese su Apellido");
  if (!/^[A-Za-z]+$/.test(apellido)) {
    alert("Error.");
  }
  if (apellido === null) {
    console.log("Debe ingresar Apellido");
  }
} while (!/^[A-Za-z]+$/.test(apellido) || apellido === null);

let dni = prompt("INGRESE SU DNI");
while (!/^\d+$/.test(dni)) {
  alert("Error, ingresaste letras.");
  dni = prompt("Ingrese su DNI nuevamente");
}

const saludo = () => alert("Hola " + nombre + ", ahora ingresa tu contraseña");
saludo();

let contrasenia;
let repetContrasenia;

do {
  contrasenia = prompt("Ingrese su Contraseña");
  repetContrasenia = prompt("Reingrese su contraseña");
 
  if (contrasenia === null || repetContrasenia === null) {
    alert("Debe ingresar su Contraseña");
  if (contrasenia === repetContrasenia){
      alert("Sus datos son correctos")
    };  
  } else if (contrasenia !== repetContrasenia) {
    alert("Las contraseñas no coinciden, intente nuevamente.");
  }
} while ((contrasenia === null || repetContrasenia === null) || contrasenia !== repetContrasenia);



console.log("Nombre: " + nombre + ", Apellido: " + apellido + ", DNI: " + dni + ", Contraseña: " + contrasenia);



