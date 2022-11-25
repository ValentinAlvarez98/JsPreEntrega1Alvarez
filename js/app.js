let usuarios = [];
let contrasenas = [];
let opcionMenu = 0;


const producto1 = new Producto("ZOTAC GEFORCE RTX 2060", 619, "TARJETAS DE VIDEO", "NVIDIA", "BFXZON02");
const producto2 = new Producto("AMD PROCESADOR RYZEN 5 5600", 224, "PROCESADORES", "AMD", "BFX56");
const producto3 = new Producto("GIGABYTE PLACA B450M DS3H V2", 93, "MOTHERBOARD", "GIGABYTE", "BFXGB45D");
const producto4 = new Producto("NETAC MEMORIA SHADOW DDR4 16GB PC3200 RED", 60, "MEMORIA RAM", "NETAC", "BFXNS16R");

function Producto(nombreProd, precioProd, categoriaProd, marcaProd, codigoProd) {
    this.nombreProd = nombreProd;
    this.precioProd = precioProd;
    this.categoriaProd = categoriaProd;
    this.marcaProd = marcaProd;
    this.codigoProd = codigoProd;
}

console.log(producto1);
console.log(producto2);
console.log(producto3);
console.log(producto4);

alert("¡Bienvenido a Banifox!");

do {
    opcionMenu = Number(prompt(`Seleccione una opción: \n
    1) Ingresar \n
    2) Registrarse \n
    0) Salir`));
    
    switch (opcionMenu) {
        case 1:
            let usuario = prompt("Ingrese su usuario: ");
            let contrasena = prompt("Ingrese su contraseña: ");
            if ((usuario == usuarios) && (contrasena == contrasenas)) {
                alert("¡Ingresaste correctamente!");
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
}
while (opcionMenu != 0);




