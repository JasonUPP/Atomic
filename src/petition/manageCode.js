const generarCodigo = () => {
    const codigo = Math.floor(Math.random() * (99999 - 10000)) + 10000;
    localStorage.setItem('codigo', codigo);    
    return codigo;
  }

export const getCodigo = () => {
    return localStorage.getItem('codigo');
}

export const generarBody = ({numero}) => {
    return JSON.stringify({
        to: `+52${numero}`,
        body: `Hola soy Jason, este es tu número de confirmación: ${generarCodigo()}`
    });    
}
// export const sendMessage = ({numero, loadOff}) => {
//     try{
//         fetch('/api/messages', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: generarBody()
//         })
//         .then(res => res.json())
//         .then(() => loadOff());
//     }
//     catch(e){
//         console.log(e);
//     }
// }