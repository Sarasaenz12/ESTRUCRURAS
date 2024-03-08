const PrecioBestsellers = 500
const PrecioLiteratura = 100
const Precioacadémicos = 0
precioTotal = 0
precio = 0 


let categoria = parseInt(prompt("Selecione una categoria \n1. Bestsellers \n2. Literatura \n.3 académicos "));
    if (categoria < 1 || categoria > 2)
    {
    alert("Esta categoria no esta disponible,eliga nuevamente");
    }
let libro = (parseInt(prompt("Ingrese el nombre del libro que desea leer dependeindo de la categoria que halla escogido anteriormente ")));
let Cantidad = parseInt(prompt("Elija la cantidad a llevar de libros entre mìnimo 1 y màximo 5"))
            if(Cantidad < 1 || Cantidad > 5)
            {
                alert("Esta cantidad no es valida, por favor ingrese  una cantidad entre el rango permitido")
            }
let Diasdelprestamo = (parseInt(prompt("Ingrese cuantos dias va a ocupar el libro")))
            if(Diasdelprestamo < 1 || Diasdelprestamo> 30)
            {
                alert("Por favor, ingrese un numero de dias que este en nuestro rango de dias de prestamos validos.")
            } else 
            {
                if(categoria === 1)precio = PrecioBestsellers;
                if(categoria === 2)precio = PrecioLiteratura;
                if(categoria === 3)precio = Precioacadémicos;
                
                
                if(Diasdelprestamos > 10)
                {
                   precioTotal = ((precio*Diasdelprestamo) - (precio*Diasdelprestamo)*0.1)  
                   console.log("Total: " + precio*Diasdelprestamo)
                   console.log("descuento: " + (precio*Diasdelprestamo)*0.1)
                }else
                { // sin descuento
                   precioTotal = ((precio*Diasdelprestamo))  
                   console.log("Total: " + precio*Diasdelprestamo)
                   alert("El total a pagar: "+ Diasdelprestamo)
                }          
            }




