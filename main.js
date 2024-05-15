const monedas = [
    { codigo: 'PEN', pais: 'Peru', tipoCambio: 3.8 },
    { codigo: 'CLP', pais: 'Chile', tipoCambio: 925 },
    { codigo: 'VEF', pais: 'Venezuela', tipoCambio: 39 },
    { codigo: 'COP', pais: 'Colombia', tipoCambio: 3812 },
    { codigo: 'ARS', pais: 'Argentina', tipoCambio: 1040 },
    { codigo: 'USD', pais: 'Estados Unidos', tipoCambio: 1 }
];


// Funcion de bienvenida
function saludar() {
    alert ("Bienvenido a nuestra casa de cambio Coder Change");
let nombreUsuario = prompt("estimado cliente, por favor ingrese su nombre");
if (nombreUsuario == "" ) {
alert("por favor ingresa datos validos")
return
}else
alert("bienvenido: " + nombreUsuario); 

iniciarIntercambio();
}
// Funcion de despedida
function despedida() {
let consulta = confirm("Necesitas realizar otro cambio?");

if(consulta == true){
    iniciarIntercambio();

}else{
    alert("Gracias por preferir Coder Change, feliz dia 😊")
};
}
// Funcion principal
const iniciarIntercambio = () => {
    let codigoMonedaDestino = prompt('Introduce el código de la moneda de destino (por ejemplo, PEN ARS VEF COP):').toUpperCase();
    let monedasFiltradas = filtrarMonedaPorCodigo(codigoMonedaDestino);
    
    if (monedasFiltradas.length === 0) {
        const agregarNueva = prompt('La moneda no se encontró. ¿Desea agregar una nueva moneda? (s/n)');
        if (agregarNueva.toLowerCase() === 's') {
            agregarNuevaMoneda();
            iniciarIntercambio();
        } else {
            alert('Operación cancelada.');
        }
    } else {
        let cantidadACambiar = parseFloat(prompt('Introduce la cantidad de USD a cambiar:'));
        cambiarMoneda(codigoMonedaDestino, cantidadACambiar);
    }
};

// Funcion para filtrar moneda por su código
let filtrarMonedaPorCodigo = (codigo) => {
    return monedas.filter(moneda => moneda.codigo.toUpperCase() === codigo.toUpperCase());
};

// Funcion para realizar el cambio de moneda
const cambiarMoneda = (a, cantidad) => {
    let monedaUSD = monedas.find(moneda => moneda.codigo === 'USD');
    let monedaA = monedas.find(moneda => moneda.codigo === a);
    
    if (!monedaA) {
        alert('La moneda seleccionada no está disponible.');
        return;
    }
    
    let cantidadARecibir = cantidad * (monedaA.tipoCambio / monedaUSD.tipoCambio);
    alert(`Recibirás ${cantidadARecibir.toFixed(2)} ${monedaA.codigo}`);
    despedida();
};

// Funcion constructora de monedas
const agregarNuevaMoneda = () => {
    let codigo = prompt('Introduce el código de la nueva moneda (ejemplo, USD):').toUpperCase();
    let pais = prompt('Introduce el pais de la nueva moneda (ejemplo, Estados Unidos):');
    let tipoCambio = parseFloat(prompt('Introduce el tipo de cambio de la nueva moneda respecto al dolar:'));
    
    monedas.push({ codigo, pais, tipoCambio });
    
    alert(`La moneda de ${pais} (${codigo}) se agrego correctamente.`);
};

saludar() ;
