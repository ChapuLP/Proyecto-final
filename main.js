// funcion 
const invertir = (monto,periodo) => {

    let ganancia = periodo * 10;

    if (monto <= 99){
        alert("El capital minimo a invertir debe ser 100");
    } else if (monto >= 10001){
        alert("El capital maximo a invertir debe ser 10000");
    } else {
        alert(`Usted esta por invertir ${monto} por un total de ${periodo} meses`);
        console.log(`Invirtiendo...`);
    };
    console.log(monto);
    console.log(periodo);
    console.log(ganancia);

    let resultado = ganancia * monto / 100;

    let monto_final = resultado + monto;

    console.log(`El total ganado en esta inversion es de ${resultado}`);

    console.log(`Saldo total en cuenta: ${monto_final}`);

    alert(`Saldo total:${monto_final}`);

    return monto_final;
 };


//Variables DOM 
let btnEU = document.getElementById("btnEU");
let montoEuro = document.getElementById("entryEuro");

let btnUSD = document.getElementById("btnUSD")
let montoDolar = document.getElementById("entryUSD");

let montoSPX = document.getElementById("entrySPX");
let btnSPX = document.getElementById("btnSPX");

// Variables y constantes

let monto;
let periodo;
let monto_final;
let intereses = periodo * 10;
let confirmacion;

//obejtos 
const divisas = {
    Dolares : 0,
    Euros : 0,
    Reales : 0,
};
// Almacenamiento, Local Storage
localStorage.setItem("Divisas",JSON.stringify(divisas));

//evento buttons comprar divisas
btnEU.addEventListener("click", () => {
    monto = parseFloat(montoEuro.value);
    confirmacion = confirm(`Usted esta por comprar ${montoEuro.value} Euros.`)
    if (confirmacion === true){
        console.log(confirmacion);
        divisas.Euros = divisas.Euros + parseFloat(montoEuro.value);
        console.log(`Sumando compra a su billetera de divisas...`);
        alert(`Compra realizada,usted posee ${divisas.Euros} Euros, muchas gracias.`);
        localStorage.setItem("Divisas",JSON.stringify(divisas));
        montoEuro.value = 0; 
    } else if (confirmacion === false){ 
        console.log(confirmacion);
        alert("Compra cancelada, muchas gracias.");
        montoEuro.value = 0;
    };
 });

 btnUSD.addEventListener("click", () => {
    monto = parseFloat(montoDolar.value);
    confirmacion = confirm(`Usted esta por comprar ${montoDolar.value} USD.`)
    if (confirmacion === true){
        console.log(confirmacion);
        divisas.Dolares = divisas.Dolares + parseFloat(montoDolar.value);
        console.log(`Sumando compra a su billetera de divisas...`);
        alert(`Compra realizada,usted posee ${divisas.Dolares} USD, muchas gracias.`);
        montoDolar.value = 0; 
    } else if (confirmacion === false){ 
        console.log(confirmacion);
        alert("Compra cancelada, muchas gracias.");
        montoDolar.value = 0;
    };
 });

 btnReal.addEventListener("click", () => {
    monto = parseFloat(montoEuro.value);
    confirmacion = confirm(`Usted esta por comprar ${montoEuro.value} Euros.`)
    if (confirmacion === true){
        console.log(confirmacion);
        divisas.Euros = divisas.Euros + parseFloat(montoEuro.value);
        console.log(`Sumando compra a su billetera de divisas...`);
        alert(`Compra realizada,usted posee ${divisas.Euros} Euros, muchas gracias.`);
        montoEuro.value = 0; 
    } else if (confirmacion === false){ 
        console.log(confirmacion);
        alert("Compra cancelada, muchas gracias.");
        montoEuro.value = 0;
    };
 });

 //Evento buttons invertir indices y acciones (faltan 2)
 btnSPX.addEventListener("click", () => {
    monto = parseFloat(montoSPX.value);
    periodo = parseFloat(prompt("Ingrese su periodo de inversion: "));
    monto_final = invertir(monto, periodo);
 });


