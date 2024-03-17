// Construccion de objetos con Object constructor y objeto literal.


// Objeto literal

const producto = {
    nombre:"Monitor 20 Pulgadas",
    precio: 300,
    disponible:true
}

// Haciendo uso de Object Constructor

function Producto(nombre, precio){
    this.nombre =  nombre;
    this.precio = precio
    this.disponible = true;
}
const producto2 =  new Producto("Monitor 24 Pulgadas", 500)

console.log(producto2);