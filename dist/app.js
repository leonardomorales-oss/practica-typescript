"use strict";
function calcularEdad(fechaNacimiento) {
    const nacimiento = new Date(fechaNacimiento);
    const hoy = new Date();
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mesActual = hoy.getMonth();
    const mesNacimiento = nacimiento.getMonth();
    if (mesActual < mesNacimiento ||
        (mesActual === mesNacimiento && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }
    return edad;
}
const fecha = "1995-12-20";
const edad = calcularEdad(fecha);
console.log(`La persona tiene ${edad} años.`);
