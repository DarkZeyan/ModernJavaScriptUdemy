// Manipulacion del DOM

let element = document; // Se asigna al objeto document.

element = document.all; // Obsoleto, ya no se recomienda. Para extraer todo el objeto de document ahora se recomienda document.querySelectorAll("*") para traer un NodeList con todos los elementos del DOM.
element = document.head; // Se extrae la etiqueta head del document.
element = document.body; // Se extrae la etiqueta body (Cuerpo o sitio entero) del document.
element = document.domain; // Obsoleto por razones de seguridad.  Se recomienda utilizar el window.postMessage si se utiliza para tareas asincronas de tipo cross-origin comm.
element = document.forms; // Extrae un objeto de tipo HTMLCollection que extrae todos los formularios del sitio, es parecido a un array
element = document.forms[0];
element = document.forms[0].id;
element = document.forms[0].method;
element = document.forms[0].classList;
element = document.forms[0].action;

// se puede usar document.links para extraer todos los enlaces que tiene el proyecto. [Etiquetas a]
// document.links tambien devuelve un HTMLCollection, por ende se puede acceder a el como si fuese un arreglo.


element = document.links;
element = document.links[4].classList; // Devuelve una colleccion de tipo DOMTokenList, similar a un array.
element = document.links[4].className; // ClassName retorna una string con el nombre de la clase del elemento

// Saber cuantas imagenes tiene el sitio.

element =  document.images;

// Lo mismo con los scripts;

// element = document.scripts;


console.log(element);