console.log ("Archivo Mascotas.js cargado correctamente");

let nombredeusuario = "Roger";

alert("Bienvenidos a mis Mascotas");
alert("Tengo las mejores mascotas del mundo");
alert("Tengo las mejores mascotas del mundo " + nombredeusuario);
alert("Tengo las mejores mascotas del mundo");

let mascotaFavorita = prompt("Cual es tu mascota favorita?", "este dato es obligatorio");

console.log("El usuario quiere la mascota: " + mascotaFavorita);

let confirmarmascota = confirm("Estas seguro que quieres una mascota " + mascotaFavorita + "?");

if (confirmarmascota) {
    alert("Felicidades! Pronto tendras una mascota " + mascotaFavorita);
} else {
    alert("Que lastima! Pero igual te deseo lo mejor");
}