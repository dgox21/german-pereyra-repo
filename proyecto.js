class Reservas {
  constructor(nombreDeporte) {
    this.nombreDeporte = nombreDeporte;
  }

  mostrarDatos() {
    console.log("Reservas: " + this.nombreDeporte);
  }
}

class DatosPersonales {
  constructor(nombre, apellido, dni, contrasenia, repetContrasenia, fechaNacimiento, horario, reservas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.contrasenia = contrasenia;
    this.repetContrasenia = repetContrasenia;
    this.fechaNacimiento = fechaNacimiento;
    this.horario = horario;
    this.reservas = reservas;
  }

  usuario() {
    console.log("Usuario: " + ++Numero);
    console.log("Nombre: " + this.nombre);
    console.log("Apellido: " + this.apellido);
    console.log("DNI: " + this.dni);
    console.log("Reservas: " + this.reservas);
  }

  buscarPorApellido(apellido) {
    const apellidoBuscado = apellido.toUpperCase();
    const resultados = [];

    for (let i = 0; i < datosPersonalesArray.length; i++) {
      const persona = datosPersonalesArray[i];
      const apellidoPersona = persona.apellido.toUpperCase();

      if (apellidoPersona === apellidoBuscado) {
        resultados.push(persona);
      }
    }

    return resultados;
  }

  editarReserva(reservaIndex) {
    let nuevaActividad;
    do {
      nuevaActividad = prompt("Seleccione una nueva actividad: \n1. Futbol5 \n2. Futbol7 \n3. Paddle");

      switch (nuevaActividad) {
        case "1":
          this.reservas[reservaIndex].nombreDeporte = "Futbol5";
          break;
        case "2":
          this.reservas[reservaIndex].nombreDeporte = "Futbol7";
          break;
        case "3":
          this.reservas[reservaIndex].nombreDeporte = "Paddle";
          break;
        default:
          nuevaActividad = null;
          alert("Opción inválida. Seleccione nuevamente.");
          break;
      }
    } while (nuevaActividad === null);

    let nuevoHorario;
    do {
      nuevoHorario =
        prompt("Seleccione un nuevo horario: \n1. 9:00 hasta las 10:00\n2. 10:00 hasta las 11:00 \n3. 11:00 hasta las 12:00");

      switch (nuevoHorario) {
        case "1":
          this.reservas[reservaIndex].horario = "9:00 hasta las 10:00";
          break;
        case "2":
          this.reservas[reservaIndex].horario = "10:00 hasta las 11:00";
          break;
        case "3":
          this.reservas[reservaIndex].horario = "11:00 hasta las 12:00";
          break;
        default:
          nuevoHorario = null;
          alert("Opción inválida. Seleccione nuevamente.");
          break;
      }
    } while (nuevoHorario === null);

    console.log("Reserva actualizada:");
    console.log("Actividad: " + this.reservas[reservaIndex].nombreDeporte);
    console.log("Horario: " + this.reservas[reservaIndex].horario);
  }

  eliminarReserva(reservaIndex) {
    if (reservaIndex >= 0 && reservaIndex < this.reservas.length) {
      this.reservas.splice(reservaIndex, 1);
      console.log("Reserva eliminada");
    } else {
      console.log("Índice de reserva inválido");
    }
  }
}

let Numero = 0;
let datosPersonalesArray = [];

while (true) {
  const datosPersonales = new DatosPersonales('', '', '', '', '', '', '', []);

  // Validación de nombre
  do {
    datosPersonales.nombre = prompt("INGRESA TUS DATOS PARA REALIZAR UNA RESERVA", "Ingrese su Nombre");

    if (!/^[A-Za-z]+$/.test(datosPersonales.nombre)) {
      alert("Error. Ingrese solo letras.");
    } else if (datosPersonales.nombre === null) {
      alert("Debe ingresar un Nombre.");
    }
  } while (!/^[A-Za-z]+$/.test(datosPersonales.nombre) || datosPersonales.nombre === null);

  // Validación de apellido
  let apellidoValido = false;
  do {
    datosPersonales.apellido = prompt("Ingrese su Apellido");

    if (!/^[A-Za-z]+$/.test(datosPersonales.apellido)) {
      alert("Error. Ingrese solo letras.");
    } else if (datosPersonales.apellido === null) {
      alert("Debe ingresar un Apellido.");
    } else {
      apellidoValido = true;
    }
  } while (!apellidoValido);

  // Validación de DNI
  do {
    datosPersonales.dni = prompt("Ingrese su DNI");

    if (!/^\d+$/.test(datosPersonales.dni)) {
      alert("Error. Ingrese solo dígitos.");
    }
  } while (!/^\d+$/.test(datosPersonales.dni));

  // Validación de fecha de nacimiento
  let fechaValida = false;
  do {
    datosPersonales.fechaNacimiento = prompt("Ingrese su Fecha de Nacimiento (formato: dd/mm/yyyy)");

    // Comprobar si la fecha tiene el formato correcto (dd/mm/yyyy)
    const fechaRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!fechaRegex.test(datosPersonales.fechaNacimiento)) {
      alert("Error. Ingrese la fecha de nacimiento en el formato correcto (dd/mm/yyyy).");
    } else {
      fechaValida = true;
    }
  } while (!fechaValida);

  // Saludo y validación de contraseña
  const saludo = () => alert("Hola " + datosPersonales.nombre + ", ahora ingresa tu contraseña");
  saludo();

  do {
    datosPersonales.contrasenia = prompt("Ingrese su Contraseña");
    datosPersonales.repetContrasenia = prompt("Reingrese su contraseña");

    if (datosPersonales.contrasenia !== datosPersonales.repetContrasenia) {
      alert("Las contraseñas no coinciden. Intente nuevamente.");
    } else if (datosPersonales.contrasenia === null || datosPersonales.repetContrasenia === null) {
      alert("Debe ingresar una contraseña.");
    }
  } while (datosPersonales.contrasenia !== datosPersonales.repetContrasenia || datosPersonales.contrasenia === null || datosPersonales.repetContrasenia === null);

  // Actividades
  let deporteSeleccionado;
  do {
    deporteSeleccionado = prompt("Seleccione una actividad: \n1. Futbol5 \n2. Futbol7 \n3. Paddle");

    switch (deporteSeleccionado) {
      case "1":
        datosPersonales.reservas.push(new Reservas("Futbol5"));
        break;
      case "2":
        datosPersonales.reservas.push(new Reservas("Futbol7"));
        break;
      case "3":
        datosPersonales.reservas.push(new Reservas("Paddle"));
        break;
      default:
        deporteSeleccionado = null;
        break;
    }

    if (deporteSeleccionado === null) {
      alert("Opción inválida. Seleccione nuevamente.");
    }
  } while (deporteSeleccionado === null);

  datosPersonalesArray.push(datosPersonales);

  // Horarios disponibles
  let horarioSeleccionado;
  do {
    horarioSeleccionado =
      prompt("Seleccione un horario: \n1. 9:00 hasta las 10:00\n2. 10:00 hasta las 11:00 \n3. 11:00 hasta las 12:00");

    switch (horarioSeleccionado) {
      case "1":
        datosPersonales.reservas[datosPersonales.reservas.length - 1].horario = "9:00 hasta las 10:00";
        break;
      case "2":
        datosPersonales.reservas[datosPersonales.reservas.length - 1].horario = "10:00 hasta las 11:00";
        break;
      case "3":
        datosPersonales.reservas[datosPersonales.reservas.length - 1].horario = "11:00 hasta las 12:00";
        break;
      default:
        horarioSeleccionado = null;
        break;
    }

    if (horarioSeleccionado === null) {
      alert("Opción inválida. Seleccione nuevamente.");
    }
  } while (horarioSeleccionado === null);

  for (let i = 0; i < datosPersonalesArray.length; i++) {
    datosPersonalesArray[i].usuario();
  }

  let continuar = confirm("¿Desea ingresar una nueva reserva?");
  if (!continuar) {
    break;
  }
}

let apellidoBuscado;
let resultadosBusqueda = [];

do {
  apellidoBuscado = prompt("Ingrese el apellido a buscar:");

  if (apellidoBuscado !== null) {
    resultadosBusqueda = new DatosPersonales().buscarPorApellido(apellidoBuscado);
    if (resultadosBusqueda.length === 0) {
      alert("Este apellido no se encuentra registrado. Por favor, ingrese nuevamente el apellido.");
    }
  }
} while (apellidoBuscado !== null && resultadosBusqueda.length === 0);

if (apellidoBuscado === null) {
  alert("Se ha cancelado la búsqueda.");
} else {
  for (let i = 0; i < resultadosBusqueda.length; i++) {
    const persona = resultadosBusqueda[i];
    alert(
      "Nombre: " + persona.nombre +
      "\nDNI: " + persona.dni +
      "\nFecha de Nacimiento: " + persona.fechaNacimiento +
      "\nHorario: " + persona.horario +
      "\nReservas: " + persona.reservas.map(reserva => reserva.nombreDeporte).join(", ")
    );

    let opcion;
    do {
      opcion = prompt("Seleccione una opción: \n1. Editar reserva \n2. Eliminar reserva");

      switch (opcion) {
        case "1":
          const reservaIndex = prompt("Ingrese 2 para editar");
          persona.editarReserva(reservaIndex);
          break;
        case "2":
          const reservaEliminarIndex = prompt("Ingrese 1 para eliminar");
          persona.eliminarReserva(reservaEliminarIndex);
          break;
        default:
          opcion = null;
          alert("Opción inválida. Seleccione nuevamente.");
          break;
      }
    } while (opcion === null);
  }
}
