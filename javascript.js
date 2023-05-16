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

//Objetos y arrays

let dolares_user = parseFloat(prompt(`Ingrese su cantidad de dolares: `));

let euros_user = parseFloat(prompt(`Ingrese su cantidad de Euros: `));

let reales_user = parseFloat(prompt(`Ingrese su cantidad de reales: `)); 

const divisas = {
  Dolares:dolares_user,
  Euros: euros_user,
  Reales: reales_user,
}; //objetos divisas

console.log(divisas);

let microsoft_user = parseFloat(prompt("Ingrese la cantidad de dolares invertidos en Microsoft:"));

let apple_user = parseFloat(prompt("Ingrese la cantidad de dolares invertidos en Apple:"));

const acciones = { 
  Microsoft: microsoft_user,
  Apple: apple_user,
}; //Objeto acciones

let spx500_user = parseFloat(prompt("Ingrese la cantidad de dolares invertidos en S&P 500:"));

let nas100_user = parseFloat(prompt("Ingrese la cantidad de dolares invertidos en Nasdaq 100:"));

const indices = {
  spx500 : spx500_user,
  nas100 : nas100_user,
}; // objeto indices

console.log(indices);
console.log("Creando billetera del usuario...");

const activos = [divisas, acciones, indices];

console.log("Billetera creada, activos del usuario:");
console.log(activos);

//cuando podamos relacionar el HTML junto el el JS lo que hare es poner un buscador donde su objetivo seria ver si el usuario posee el activo a encontrar y seria:

console.log(activos.includes(divisas));


// Variables y constantes
let monto = parseFloat(prompt("Ingrese el capital a invertir."));

let periodo = parseFloat(prompt("Ingrese el tiempo que desea invertir su capital."));

let intereses = periodo * 10;

console.log(`el monto a invertir es ${monto}`);

console.log(`Por un periodo de ${periodo} meses`);

console.log(`Ganancia estipulada de %${intereses}`);

let monto_final= invertir(monto, periodo);

let interes_Compuesto = prompt(`¿Desea reinvertir el total de su capital por el mismo periodo? Capital:${monto_final}`);

if (interes_Compuesto === "no") {

  alert(`Muchas gracias por invertir en Coin Base, su saldo total es de ${monto_final}`);

} else if (interes_Compuesto === "si") {

  do {

    monto_final = invertir(monto_final, periodo);

    interes_Compuesto = prompt(`¿Desea reinvertir el total de su capital por el mismo periodo? Capital:${monto_final}`);
    
    if (interes_compuesto = "no"){

        alert(`Muchas gracias por invertir en Coin Base, su saldo total es de ${monto_final}`);

    }

  } while (interes_Compuesto === "si");

}



    