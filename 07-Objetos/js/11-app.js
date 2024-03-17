// No se pueden usar funciones fecha dentro de funciones de objetos para acceder a las propiedades del mismo objeto.

//El this debe utilizarse unicamente para acceder a los recursos del objeto en casos donde el contexto de las variables no sea claro.


const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio:300,
    disponible:true,
    mostrarInfo:function(){
        console.log(`El producto ${this.nombre} tiene un precio de: $${this.precio}`);
    }
}
const producto2 = {
    nombre: 'Tablet',
    precio:3000,
    disponible:true,
    mostrarInfo:function(){
        console.log(`El producto ${this.nombre} tiene un precio de: $${this.precio}`);
    }
}
producto.mostrarInfo()
producto2.mostrarInfo()