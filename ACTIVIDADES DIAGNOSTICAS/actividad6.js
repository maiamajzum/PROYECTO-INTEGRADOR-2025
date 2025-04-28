const productos = [
    { nombre: "Notebook", precio: 1200 }, 
    { nombre: "Mouse", precio: 20 }, 
    { nombre: "Teclado", precio: 50 }, 
    { nombre: "Monitor", precio: 300 },
    { nombre: "Auriculares", precio: 80 },];

const productosMayor100 = productos.filter(producto => producto.precio > 100);
console.log("Productos con precio mayor a 100:" ,productosMayor100);

const productosFormateados = productos.map(producto => `${producto.nombre}: $${producto.precio}`);
console.log("Productos por nombre y precio:" ,productosFormateados);

const totalPrecio = productos.reduce((total, producto) => total + producto.precio, 0);
console.log("Precio total:" ,totalPrecio);

const productosMenos100 = productos
    .filter(producto => producto.precio < 100)
    .map(producto => producto.nombre.toLowerCase());
console.log("productos con precio menor a 100:" ,productosMenos100);