
const ordenarProducto = producto => {
    return new Promise((resolve, reject) => {
        console.log(`Ordenando ${producto} en la tienda...`);
        setTimeout(()=>{
            if(producto==='taza'){
                resolve("Ordenando una taza con logo en la tienda");
            }else{
                reject("NO hay inventario disponible");
            }
        }, 2000)
    })
}

const procesarPedido = respuestaOrdenarProducto => {
    return new Promise(resolve => {
        console.log("Procesado respuesta...");
        console.log(`la respuesta fue "${respuestaOrdenarProducto}"`)
        setTimeout(()=> resolve("Gracias por su compra"), 4000)
    })
}

/*ordenarProducto('lapiz')
    .then(respuesta=>{
        console.log(`respuesta recibida: "${respuesta}"`)
        return procesarPedido(respuesta)
    })
    .then(respuestaProcesada=>console.log(respuestaProcesada))
    .catch(err=>console.log(err))
*/

// lo siguiente es equivalente a lo de arriba

async function realizarPedido(producto){
    try {
        const respuesta = await ordenarProducto(producto);
        console.log(respuesta);
        const respuestaProcesada = await procesarPedido(respuesta);
        console.log(respuestaProcesada); 
    } catch (error) {
        console.log(error);
    }
}

realizarPedido('lapiz');