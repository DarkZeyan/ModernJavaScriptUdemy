// Seleccion de elementos por nombres de clase;

let header = document.getElementsByClassName('header');

console.log(header);

let hero = document.getElementsByClassName('hero');
console.log(hero);


// getEleemntsByClassName retorna HTMLCollection;

const containers = document.getElementsByClassName('contenedor');

console.log(containers)

// Si una clase no existe

const noExiste = document.getElementsByClassName('no-existe');

console.log(noExiste); // Sigue retornando un HTMLCollection pero este esta vacio.


