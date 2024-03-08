const HamM = 6000;
const HamE = 9500;
const HamXL = 16000;
const PizzaS = 15000;
const PizaaM = 19900;
const PizzaG = 30000;
const ArrozO = 42000
const ChopSuey = 54000;
const ArrozOP = 8000;

let cantidad;

let Restaurant = (parseInt(prompt("Gracias por usar nuestra plataforma FastFood. Seleccione el restaurante en el cual desea pedir la comida: \n1. BurgerAlgo \n2. PizAll \n3. ChinatownRice")))

if(Restaurant === 1){
    let Menu1 = (parseInt(prompt("Bienvenido a BurgerAlgo, ¿que te gustaría comer hoy?\n Menú: \n1. Hamburguesa Mini \n2 Hamaburguesa Especial \n3. Hamburguesa XL")));
    if (Menu1 === 1){
        let cantidad= (parseInt(prompt("¿Cuantos articulos desea llevar?: ")))
        alert("Su pedido llegará pronto. El total a pagar es igual a: $" + ((cantidad*HamM) + 5000));

    }else if (Menu1 === 2){
        let cantidad = (parseInt(prompt("¿Cuantos articulos desea llevar?: ")))
        alert("Su pedido llegará pronto. El total a pagar es igual a: $" + ((cantidad*HamE) + 5000));

    }else if (Menu1 === 3){
        let cantidad = (parseInt(prompt("¿Cuantos articulos desea llevar?: ")))
        alert("Su pedido llegará pronto. El total a pagar es igual a: $" + ((cantidad*HamXL) + 5000));

    }else{
        alert("Por favor seleccione únicamente un número correspondiente al menú")
    }
    }

    if(Restaurant === 2){
        let Menu1 = (parseInt(prompt("Bienvenido a PizzAll, ¿que te gustaría comer hoy?\n Menú: \n1. Pizza Pequeña \n2 Pizza Mediana \n3. Pizza Familiar")));
        if (Menu1 === 1){
            let cantidad= (parseInt(prompt("¿Cuantos articulos desea llevar?: ")))
            alert("Su pedido llegará pronto. El total a pagar es igual a: $" + ((cantidad*PizzaS) + 5000));
    
        }else if (Menu1 === 2){
            let cantidad = (parseInt(prompt("¿Cuantos articulos desea llevar?: ")))
            alert("Su pedido llegará pronto. El total a pagar es igual a: $" + ((cantidad*PizaaM) + 5000 ));
    
        }else if (Menu1 === 3){
            let cantidad = (parseInt(prompt("¿Cuantos articulos desea llevar?: ")))
            alert("Su pedido llegará pronto. El total a pagar es igual a: $" + ((cantidad*PizzaG) + 5000));
    
        }else{
            alert("Por favor seleccione únicamente un número correspondiente al menú")
        }
        }

        if(Restaurant === 3){
            let Menu1 = (parseInt(prompt("Bienvenido a ChinatownRice, ¿que te gustaría comer hoy?\n Menú: \n1. Arroz Oriental Familiar \n2 Chop Suey Familiar \n3. Arroz Personal")));
            if (Menu1 === 1){
                let cantidad= (parseInt(prompt("¿Cuantos articulos desea llevar?: ")))
                alert("Su pedidido llegará pronto. El total a pagar es igual a: $" + ((cantidad*ArrozO) + 5000));
        
            }else if (Menu1 === 2){
                let cantidad = (parseInt(prompt("¿Cuantos articulos desea llevar?: ")))
                alert("Su pedidido llegará pronto. El total a pagar es igual a: $" + ((cantidad*ChopSuey) + 5000));
        
            }else if (Menu1 === 3){
                let cantidad = (parseInt(prompt("¿Cuantos articulos desea llevar?: ")))
                alert("Su pedidido llegará pronto. El total a pagar es igual a: $" + ((cantidad*ArrozOP) + 5000));
        
            }else{
                alert("Por favor seleccione únicamente un número correspondiente al menú")
            }
            }
else{
    alert("Por favor seleccione un restaurante")
}