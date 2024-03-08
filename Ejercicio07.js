const General = 50000;
const Preferencial = 150000;
const VIP = 300000;
const CargoServicio = 5000;
const impuesto = 0.1

let cantidadBoletas;

let Localidades = (parseInt(prompt("Bienvenido a la taquilla, Seleccione la localidad del escenario a la cual desea acceder:  \n1. General \n2. Preferencial \n3. VIP")));

if(Localidades === 1){
    let cantidadBoletas = (parseInt(prompt("¿Cuántas boletas desea comprar? Puede comprar un máximo de 5 boletas")));
    alert("Su total a pagar es:\n" +
    "- Valor de la localidad: $" + General + "\n" +
    "- Cantidad de Boletas: " + cantidadBoletas +  "\n" +
    "- Cargo por servicio: $" + CargoServicio + "\n" +
    "- Impuesto del 10 % : $" + (cantidadBoletas*General)*impuesto + " \n" +
    "- Total a pagar: $" + ((cantidadBoletas*(General + 5000) + CargoServicio)))

}else if (Localidades === 2){
    let cantidadBoletas = (parseInt(prompt("¿Cuántas boletas desea comprar? Puede comprar un máximo de 5 boletas")));
    alert("Su total a pagar es:\n" +
    "- Valor de la localidad: $" + Preferencial + "\n" +
    "- Cantidad de Boletas: " + cantidadBoletas +  "\n" +
    "- Cargo por servicio: $" + CargoServicio + "\n" +
    "- Impuesto del 10 % : $" + (cantidadBoletas*Preferencial)*impuesto + " \n" +
    "- Total a pagar: $" + (((cantidadBoletas* (Preferencial + 15000) + CargoServicio))))

}else if (Localidades === 3){
    let cantidadBoletas = (parseInt(prompt("¿Cuántas boletas desea comprar? Puede comprar un máximo de 5 boletas")));
    alert("Su total a pagar es:\n" +
    "- Valor de la localidad: $" + VIP + "\n" +
    "- Cantidad de Boletas: " + cantidadBoletas +  "\n" +
    "- Cargo por servicio: $" + CargoServicio + "\n" +
    "- Impuesto del 10 % : $" + (cantidadBoletas*VIP)*impuesto + " \n" +
    "- Total a pagar: $" + ((cantidadBoletas* (VIP + 30000) + CargoServicio)))

}else{
    alert("Opción incorrecta, debe elegir una de las tres Localidades para continuar con su compra")
}

