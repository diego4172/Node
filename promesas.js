const estatusPedido = () => Math.random() < 0.8;

const miPedido = new Promise((resolve, reject) => {
    setTimeout(()=>{
        if(estatusPedido()){
            resolve("Pedido Exitoso");
        }else{
            reject("Ocurrio un error, intente nuevamente");
        }
    },3000)
})

/*const manejarPedido = (mensajeConfirmacion) => console.log(mensajeConfirmacion);
const rechazarPedido = (mensajeError) => console.log(mensajeError);

miPedido.then(manejarPedido,rechazarPedido);*/

// lo siguiente es equivalente a lo de arriba

miPedido
    .then((mensajeConfirmacion) => console.log(mensajeConfirmacion))
    .then(null,(mensajeError) => console.log(mensajeError))

miPedido
    .then((mensajeConfirmacion) => console.log(mensajeConfirmacion))
    .catch((mensajeError) => console.log(mensajeError))
