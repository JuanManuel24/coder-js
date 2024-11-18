// PRODUCTOS
const productos = [
    {
        id: "gorra-01",
        titulo: "gorra 01",
        imagen: "./carpeta-img/gorra01.webp",
        categoria: {
            nombre: "gorras",
            id: "gorras"
        },
        precio: 1000
    },
    {
        id: "gorra-02",
        titulo: "gorra 02",
        imagen: "./carpeta-img/gorra02.webp",
        categoria: {
            nombre: "gorras",
            id: "gorras"
        },
        precio: 1000
    },
    {
        id: "gorra-03",
        titulo: "gorra 03",
        imagen: "./carpeta-img/gorra03.webp",
        categoria: {
            nombre: "gorras",
            id: "gorras"
        },
        precio: 1000
    },
    {
        id: "gorra-04",
        titulo: "gorra 04",
        imagen: "./carpeta-img/gorra04.webp",
        categoria: {
            nombre: "gorras",
            id: "gorras"
        },
        precio: 1000
    },
    {
        id: "gorra-05",
        titulo: "gorra 05",
        imagen: "./carpeta-img/gorra05.png",
        categoria: {
            nombre: "gorras",
            id: "gorras"
        },
        precio: 1000
    },
    {
        id: "gorra-06",
        titulo: "gorra 06",
        imagen: "./carpeta-img/gorra06.png",
        categoria: {
            nombre: "gorras",
            id: "gorras"
        },
        precio: 1000
    },
    {
        id: "gorra-07",
        titulo: "gorra 07",
        imagen: "./carpeta-img/gorra07.png",
        categoria: {
            nombre: "gorras",
            id: "gorras"
        },
        precio: 1000
    },
    {
        id: "gorra-08",
        titulo: "gorra 08",
        imagen: "./carpeta-img/gorra08.webp",
        categoria: {
            nombre: "gorras",
            id: "gorras"
        },
        precio: 1000
    },
    {
        id: "gorra-09",
        titulo: "gorra 09",
        imagen: "./carpeta-img/gorra09.webp",
        categoria: {
            nombre: "gorras",
            id: "gorras"
        },
        precio: 1000
    },
];

const contenedorProductos = document.querySelector("#contenedor-productos");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numero = document.querySelector("#numero");

function cargarProductos() {
    productos.forEach(producto => {
        
        const div = document.createElement ("div");
        div.classList.add("producto");
        div.innerHTML = ` 
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
              <h3 class="producto-titulo">${producto.titulo}</h3>
              <p class="producto-precio">$${producto.precio}</p>
              <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
    console.log(botonesAgregar);

}

cargarProductos();
 
function actualizarBotonesAgregar() {
     botonesAgregar = document.querySelectorAll(".producto-agregar");

     botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
     });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
     productosEnCarrito = JSON.parse(productosEnCarritoLS);
     actualizarNumero();
} else {
    productosEnCarrito = [];
}


function agregarAlCarrito(e) {

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton)

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
       const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
       productosEnCarrito[index].cantidad++; 
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumero();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

}

function actualizarNumero() {
    let nuevoNumero = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numero.innerHTML = nuevoNumero;
}

