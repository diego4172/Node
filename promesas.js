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

const manejarPedido = (mensajeConfirmacion) => console.log(mensajeConfirmacion);
const rechazarPedido = (mensajeError) => console.log(mensajeError);

miPedido.then(manejarPedido,rechazarPedido);