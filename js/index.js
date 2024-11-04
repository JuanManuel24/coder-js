// const productos = [
//     { nombre: "remera" , precio: 50 },
//     { nombre: "gorra" , precio: 100 },
//     { nombre: "camisa" , precio: 150 },
//     { nombre: "pantalon" , precio: 200 },
//     { nombre: "zapatillas" , precio: 250 },

// ] ;
// let carrito = []

// let seleccion = prompt("bienvenido ¿usted desea comprar algun producto? escriba por si o por no")

// while(seleccion != "si" && seleccion !="no"){
//     alert("ingrese si o no ")
//     seleccion = prompt("¿usted desea comprar algo? si o no")
// }

// if(seleccion == "si"){
//     alert ("le mostraremos nuestra lista de productos")
//     let todosLosProductos = productos.map(
//         (producto) => producto.nombre + "" + producto.precio + "$"
//     );
//     alert(todosLosProductos.join("-"))
// } else if (seleccion == "no"){
//     alert("gracias por visitar nuestra pagina")
// }

// while(seleccion != "no"){
//     let producto = prompt("agrega un producto al carrito")
//     let precio = 0

//     if(producto == "remera" || producto == "gorra" || producto == "camisa" || producto == "pantalon" || producto == "zapatillas"){
//         switch(producto){
//             case "remera":
//             precio = 50
//             break;
//             case "gorra":
//                 precio = 100
//                 break;
//                 case "camisa":
//                     precio = 150
//                     break;
//                     case "pantalon":
//                         precio = 200
//                         break;
//                         case "zapatillas":
//                             precio = 250
//                             break;
//                             default:
//                                 break;
//         }
//         let unidades = parseInt(prompt("¿cuantas unidades desea llevar?"))

//         carrito.push ({producto, unidades, precio})
//         console.log(carrito)
//     } else { 
//         alert("el producto seleccionado no existe")
//     }

//     seleccion = prompt("¿usted desea seguir comprando?")

//     while(seleccion == "no"){
//         alert("¡gracias por su compra!")
//         carrito.forEach((carritoFinal) => {
//             console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
//         })
//         break
//     }
// }

// const total = carrito.reduce( (acc,el) => acc + el.precio * el.unidades, 0)
// console.log (`el total a pagar es: ${total}`)

const productos = [
{
    id: "gorra 01",
    titulo: "gorra 01",
    Imagen: "./carpeta-img/gorra01.jpg",
    categoria:{
        nombre:"gorras",
        id:"gorras"
    },
    precio:1000
},
{
    id:"gorra 02",
    titulo: "gorra 02",
    imagen:"./carpeta-img/gorra01.jpg",
    categoria:{
        nombre:"gorras",
        id:"gorras"
    },
    precio: 1000
},
{
    id:"gorra 03",
    titulo: "gorra goorin",
    imagen:"./carpeta-img/gorra01.jpg",
    categoria:{
        nombre:"gorras",
        id:"gorras"
    },
    precio: 1000
},
{
    id:"gorra 04",
    titulo: "gorra tnf",
    imagen:"./carpeta-img/gorra01.jpg",
    categoria:{
        nombre:"gorras",
        id:"gorras"
    },
    precio: 1000
},
];

const contenedorProductos = document.querySelector("#contenedor-productos");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numero = document.querySelector("#numero");

function cargarProductos() {

    productos.forEach(producto => {

      const div = document.createElement("div");
      div.classList.add("producto");
      div.innerHTML = `
          <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
          <div class="producto-detalles">
           <h3 class="producto-titulo">${producto.titulo}</h3>
           <p class="producto-precio">$${producto.precio}</p>
           <button class="producto-agregar" id="${producto.id}">Agregar al carrito</button>
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