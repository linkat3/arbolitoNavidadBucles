let listaEmpleados = [
  { nombre: "Carlos García", cantidadVendida: 14500, imagen: "./img/ima01.jpg" },
  { nombre: "Ana López", cantidadVendida: 7890, imagen: "./img/ima02_m.jpg" },
  { nombre: "Javier Fernández", cantidadVendida: 17350, imagen: "./img/ima03.jpg" },
  { nombre: "Laura Pérez", cantidadVendida: 6020, imagen: "./img/ima04_m.jpg" },
  { nombre: "María Sánchez", cantidadVendida: 18900, imagen: "./img/ima05_m.jpg" },
  { nombre: "Pedro Gómez", cantidadVendida: 7320, imagen: "./img/ima06.jpg" },
  { nombre: "Sofía Morales", cantidadVendida: 12450, imagen: "./img/ima07_m.jpg" },
  { nombre: "Miguel Torres", cantidadVendida: 9800, imagen: "./img/ima09.jpg" },
  { nombre: "Lucía Díaz", cantidadVendida: 15430, imagen: "./img/ima08_m.jpg" },
  { nombre: "David Romero", cantidadVendida: 11200, imagen: "./img/ima13.jpg" },
  { nombre: "Marta Ruiz", cantidadVendida: 6800, imagen: "./img/ima10_m.jpg" },
  { nombre: "Juan Navarro", cantidadVendida: 13400, imagen: "./img/ima11.jpg" },
  { nombre: "Carmen Gil", cantidadVendida: 5400, imagen: "./img/ima14_m.jpg" },
  { nombre: "Antonio Flores", cantidadVendida: 17650, imagen: "./img/ima12.jpg" },
  { nombre: "Elena Ortiz", cantidadVendida: 9200, imagen: "./img/ima15_m.jpg" },
  { nombre: "Andrés Herrera", cantidadVendida: 19500, imagen: "./img/ima16.jpg" },
  { nombre: "Clara Jiménez", cantidadVendida: 8550, imagen: "./img/ima18_m.jpg" },
  { nombre: "Fernando Castro", cantidadVendida: 14300, imagen: "./img/ima17.jpg" },
  { nombre: "Isabel Ríos", cantidadVendida: 7100, imagen: "./img/ima19_m.jpg" },
  { nombre: "José Medina", cantidadVendida: 19500, imagen: "./img/ima20.jpg" }
];

let arbol = document.getElementById('arbol');

function cargarImagenesEmpleados() {
  listaEmpleados.sort((a, b) => b.cantidadVendida - a.cantidadVendida); 
  // Crear las filas del árbol en forma de pirámide
  let fila = 0;
  let indiceImagen = 0;
  while (indiceImagen < listaEmpleados.length) {
    const row = document.createElement('div');
    row.classList.add('arbol-row');

    const numImagenesPorFila = (2+fila)*1;

    // Crear y añadir las imágenes a la fila
    for (let i = 1; i < numImagenesPorFila; i++) {
      if (indiceImagen < listaEmpleados.length) {
        const empleado = listaEmpleados[indiceImagen];
        const imagen = document.createElement('img');
        imagen.src = empleado.imagen;
        imagen.classList.add('foto-empleado');
        row.appendChild(imagen);
        indiceImagen++;
      }
    }

    arbol.appendChild(row);
    fila++;
  }
}

function dibujaArbolNavidad(altura) {
  const contenedor = document.createElement('div');
  contenedor.classList.add('arbol');
  // Crear las capas o niveles del árbol
  for (let i = 0; i <= altura; i++) {
    const row = document.createElement('div');
    row.classList.add('arbol-row');

    contenedor.appendChild(row);
  }

}

function baseTronco() {
  const logo = document.createElement('img');
  logo.src = "img/LogoEmpresa.jpeg";
  logo.classList.add('logo');
  arbol.appendChild(logo);
  // console.log(logo);

}

function estrella() {
  const estrella = document.createElement('img');
  estrella.src = "img/estrella.png";
  estrella.classList.add('tope-estrella');
  arbol.appendChild(estrella);
  console.log(estrella);
}

const boton = document.getElementById('dibujarArbol');


boton.addEventListener('click', () => {
  boton.style.display = 'none';
  arbol.style.display = 'block';
  estrella();
  cargarImagenesEmpleados();
  dibujaArbolNavidad(5);
  baseTronco();

});



