const mostrarTema=tema=>console.log(`estoy aprendiendo ${tema}`);
const sumar=(a,b)=>console.log(a+b);

setTimeout(mostrarTema,2000,'Nodejs');
setTimeout(sumar,4000,3,5);