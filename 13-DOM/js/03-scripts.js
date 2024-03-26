// Seleccion de ID's

/*

    Como buena practica solamente debe de utilizarse un id para un solo elemento en todo el documento.

    getElementById solo trae el primer elemento que encuentre con el id;

*/

const formulario = document.getElementById('formulario');
console.log(formulario);

const noExiste = document.getElementById('no-existe');
console.log(noExiste) // A diferencia de getElementsByClassName este retorna null directamente si el objeto no existe;