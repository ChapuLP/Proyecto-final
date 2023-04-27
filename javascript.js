// funcion 
const invertir = (monto,periodo) => {
    let ganancia = periodo * 10;
    if (monto <= 99){
        alert("El capital minimo a invertir debe ser 100");
    } else if (monto >= 10001){
        alert("El capital maximo a invertir debe ser 10000");
    } else {
        alert(`Usted esta por invertir ${monto}`);
        console.log(`Invirtiendo...`);
    };
    let resultado = ganancia * monto / 100;
    let monto_final = resultado + monto;
    console.log(`El total ganado en esta inversion es de ${resultado}`);
    console.log(`Saldo total en cuenta: ${monto_final}`);
    alert(`Saldo total:${monto_final}`);
    return monto_final;
 };
    
// Variables y constantes
let monto = parseFloat(prompt("Ingrese el capital a invertir."));
let periodo = parseFloat(prompt("Ingrese el tiempo que desea invertir su capital."));
let intereses = periodo * 10;
console.log(`el monto a invertir es ${monto}`);
console.log(`Por un periodo de ${periodo} meses`);
console.log(`Ganancia estipulada de %${intereses}`);

let monto_final= invertir(monto, periodo);
let interes_Compuesto = prompt(`¿Desea re invertir el total de su capital por el mismo periodo? Capital:${monto_final}`);
if(interes_Compuesto === "no"){
        alert(`Muchas gracias por invertir en Coin Base, su saldo total es de ${monto_final}`);
} else if (interes_Compuesto === "si"){
    do{ invertir(monto_final, periodo);} while(interes_Compuesto === "si"){
};
}



    