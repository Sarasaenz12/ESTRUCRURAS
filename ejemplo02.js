const matricula = 7000000
const porcentaje = 0.05
const completo = matricula-(matricula*porcentaje)
const descuento = (matricula-completo)

const doscuotas = (matricula/2)
const interes1 = (doscuotas+0.02)

const trescuotas = (matricula/2)
const interes2 = (trescuotas+0.02)

let opcionesdepago = parseInt(prompt("selecciones el tipo de pago \n1. Pago completo (5% descuento) \n2. Pago 2 cuotas \n3. Pago 3 cuotas"))

switch (opcionesdepago) {
    case(1):
    console.log("Ha elegido el metodo de pago completo")
    console.log(`Su pago con descuento es: ${descuento}`);
    break;
    case(2):
    console.log("Ha elegido el pago a dos cuotas")
    console.log(`Su pago a dos cuotas mas interes del 2% es igual a: ${interes1}`);
    break;
    case(3):
    console.log("Ha elegido el pago tres cuotas") 
    console.log(`Su pago a tres cuotas mas interes del 2% es igaul a: ${interes2}`);
    break;
    default:
        console.log("Por facor, seleccione uno de los tres metodos de pago");
}