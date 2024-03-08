const PrecioClasico = 500000; 
const PrecioRunning = 800000; 
const PrecioBasket = 1000000;
let precioTotal = 0
let precio = 0

let ModeloZapato = parseInt(prompt("Seleccione el tipo de zapato que desea comprar \n1. Clásico \n2. Running \n3. Basket "))
if(ModeloZapato <1 || ModeloZapato >3 )
{
 alert("Opciòn Invàlida")    
} else 
{
    if(ModeloZapato===1)precio = PrecioClasico
    if(ModeloZapato===2)precio = PrecioRunning
    if(ModeloZapato===3)precio = PrecioBasket

    let SeleccionTalla = parseInt(prompt("Por favor elija su talla"))
        if(SeleccionTalla < 35 || SeleccionTalla > 44 )
        {
            alert("Opciòn Invàlida")
        } else 
        {
            let Cantidad = parseInt(prompt("Elija la cantidad a llevar de zapatos entre mìnimo 1 y màximo 5"))
            if(Cantidad < 1 || Cantidad > 5)
            {
                alert("Debe escoger entre 1 y 5 pares")
            } else 
            {
                //Calculamos el precio total con descuento
                if ( Cantidad >= 3)
                {
                    precioTotal = ((precio*Cantidad) - (precio*Cantidad)*0.1)  
                    console.log("Total: " + precio*Cantidad)
                    console.log("descuento: " + (precio*Cantidad)*0.1)
                }else
                {
                    precioTotal = ((precio*Cantidad))  
                    console.log("Total: " + precio*Cantidad)
                    alert("El total a pagar: "+ precioTotal)
                }
            }

        }

}