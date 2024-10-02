const productos = [
    { nombre: "remera" , precio: 50 },
    { nombre: "gorra" , precio: 100 },
    { nombre: "camisa" , precio: 150 },
    { nombre: "pantalon" , precio: 200 },
    { nombre: "zapatillas" , precio: 250 },

] ;
let carrito = []

let seleccion = prompt("bienvenido ¿usted desea comprar algun producto? escriba por si o por no")

while(seleccion != "si" && seleccion !="no"){
    alert("ingrese si o no ")
    seleccion = prompt("¿usted desea comprar algo? si o no")
}

if(seleccion == "si"){
    alert ("le mostraremos nuestra lista de productos")
    let todosLosProductos = productos.map(
        (producto) => producto.nombre + "" + producto.precio + "$"
    );
    alert(todosLosProductos.join("-"))
} else if (seleccion == "no"){
    alert("gracias por visitar nuestra pagina")
}

while(seleccion != "no"){
    let producto = prompt("agrega un producto al carrito")
    let precio = 0

    if(producto == "remera" || producto == "gorra" || producto == "camisa" || producto == "pantalon" || producto == "zapatillas"){
        switch(producto){
            case "remera":
            precio = 50
            break;
            case "gorra":
                precio = 100
                break;
                case "camisa":
                    precio = 150
                    break;
                    case "pantalon":
                        precio = 200
                        break;
                        case "zapatillas":
                            precio = 250
                            break;
                            default:
                                break;
        }
        let unidades = parseInt(prompt("¿cuantas unidades desea llevar?"))

        carrito.push ({producto, unidades, precio})
        console.log(carrito)
    } else { 
        alert("el producto seleccionado no existe")
    }

    seleccion = prompt("¿usted desea seguir comprando?")

    while(seleccion == "no"){
        alert("¡gracias por su compra!")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break
    }
}

const total = carrito.reduce( (acc,el) => acc + el.precio * el.unidades, 0)
console.log (`el total a pagar es: ${total}`)
