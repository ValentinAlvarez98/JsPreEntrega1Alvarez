let usuarios = [];
let contrasenas = [];
let opcionMenu = 0;
let opcionProductos = 0;
let opcionMetodoPago = 0;
let disponible = 0;
let efectivo = 0;
let credito = 0;
let interes = 0;

function Producto(nombreProd, precioProd, categoriaProd, marcaProd, codigoProd) {
    this.nombreProd = nombreProd;
    this.precioProd = precioProd;
    this.categoriaProd = categoriaProd;
    this.marcaProd = marcaProd;
    this.codigoProd = codigoProd;

    this.productoSeleccionado = function () {
        alert(`Usted a seleccionado una unidad del producto: \n` +
            this.nombreProd + `\n`
            + `Al precio de: ` + "USD " + this.precioProd);
    }
}

const producto1 = new Producto("ZOTAC GEFORCE RTX 2060", 619, "TARJETAS DE VIDEO", "NVIDIA", "BFXZON02");
const producto2 = new Producto("AMD PROCESADOR RYZEN 5 5600", 224, "PROCESADORES", "AMD", "BFX56");
const producto3 = new Producto("GIGABYTE PLACA B450M DS3H V2", 93, "MOTHERBOARD", "GIGABYTE", "BFXGB45D");
const producto4 = new Producto("NETAC MEMORIA SHADOW DDR4 16GB PC3200 RED", 60, "MEMORIA RAM", "NETAC", "BFXNS16R");

console.log("Lista de productos existentes: ")
console.log("===============================")
console.log(producto1);
console.log(producto2);
console.log(producto3);
console.log(producto4);
console.log("===============================")

function carrito() {

    
    let precioAPagar = 0;
    
    do {
    opcionProductos = Number(prompt(`Seleccione los productos deseados: \n
    1) Tarjeta de video:` + " " + `ZOTAC GEFORCE RTX 2060 \n 
    USD 619,00 \n
    2) Procesador:` + " " + `AMD RYZEN 5 5600 \n
    USD 224,00 \n
    3) Motherboard:` + " " + `GIGABYTE B450M DS3H V2 \n
    USD 93,00 \n
    4) Memoria RAM:` + " " + `NETAC SHADOW DDR4 16GB 3200 RED \n
    USD 60,00 \n
    0) Salir \n`));
        
        switch (opcionProductos) {
        case 1:
                producto1.productoSeleccionado();
                precioAPagar = producto1.precioProd;
                alert("Usted deberá pagar: " + precioAPagar);
                pago(opcionMetodoPago);
            break;
        
        case 2:
                producto2.productoSeleccionado();
                precioAPagar = producto2.precioProd;
                alert("Usted deberá pagar: " + precioAPagar);
                pago(opcionMetodoPago);
            break;
            
        case 3:
                producto3.productoSeleccionado();
                precioAPagar = producto3.precioProd;
                alert("Usted deberá pagar: " + precioAPagar);
                pago(opcionMetodoPago);
            break;
            
        case 4:
                producto4.productoSeleccionado();
                precioAPagar = producto4.precioProd;
                alert("Usted deberá pagar: " + precioAPagar);
                pago(opcionMetodoPago);
            break;
        
        case 0:
            alert("¡Volviendo al menú de inicio!");
        }
        
    } while (opcionProductos != 0);


    function pago(opcionMetodoPago) {

        let disponible = Number(prompt(`Ingrese su dinero disponible: `));

        do {
        opcionMetodoPago = Number(prompt(`Seleccione el método de pago deseado: \n
        1) Efectivo \n 
        2) Crédito (5% Interés) \n
        0) Salir \n`));
        
        switch (opcionMetodoPago) {
            case 1:
                alert(`Usted a seleccionado: \n
                Efectivo`);
                efectivo = 1;
                calculadoraPago();
                opcionMetodoPago = 0;
                break;
            
            case 2:
                alert(`Usted a seleccionado: \n
                Crédito`);
                credito = 1;
                break;
            
            case 0:
                alert("¡Volviendo al menú de productos!");
                
        }
            
        } while (opcionMetodoPago != 0);

        function calculadoraPago() {
        
            if ((efectivo == 1) && (disponible >= precioAPagar)) {

                alert("¡Compra realizada!");
            
            } else if ((credito == 1) && (disponible >= precioAPagar)) {
            
            } else
                alert("Fondos insuficientes");
                pago(opcionMetodoPago);
            {

            }

        }

    }

}

alert("¡Bienvenido a Banifox!");

do {
    opcionMenu = Number(prompt(`Seleccione una opción: \n
    1) Ingresar \n
    2) Registrarse \n
    0) Salir \n
    (Aclaración: Solo puede registrar un único usuario)`));
    
    switch (opcionMenu) {
        case 1:
            let usuario = prompt("Ingrese su usuario: ");
            let contrasena = prompt("Ingrese su contraseña: ");
            if ((usuario == usuarios) && (contrasena == contrasenas)) {
                alert("¡Ingresaste correctamente!");
                carrito();
            } else {
                alert("El usuario y/o contraseña son incorrectos");
            }
            break;
        
        case 2:
            let nuevoUsuario = prompt("Ingrese su usuario: ");
            usuarios.push(nuevoUsuario);
            let nuevaContrasena = prompt("Ingrese su contraseña: ");
            contrasenas.push(nuevaContrasena);
            console.log("Su usuario es: " + usuarios + " Y su contraseña es: " + contrasenas );
            break;
        
        case 0:
            alert("¡Hasta luego!");
    }
}while (opcionMenu != 0);


