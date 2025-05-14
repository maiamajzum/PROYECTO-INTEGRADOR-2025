function resolver(tiempo){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(`Pasaron ${tiempo} milisegundos`);
        },tiempo);
    });
}



resolver(2500).then((msj) => {
    console.log(msj);
});