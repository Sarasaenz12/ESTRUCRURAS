function cotizarEscobas() {
    let tipoEscoba = prompt("Ingrese el tipo de escoba (Escoba dura, Escoba suave o Cepillo):")
    
    let tipoMaterial = prompt("Ingrese el tipo de material (Cerdas sintéticas o Cerdas naturales):")
    
    let mangoLargo = false;
    let ganchoPunta = false;
    let opcionesAdicionales = prompt("¿Desea agregar opciones adicionales? (Mango largo, Gancho en punta o Ninguna)")
    if (opcionesAdicionales === "mango largo") 
    {
        mangoLargo = true;
    } else if (opcionesAdicionales === "gancho en punta") 
    {
        ganchoPunta = true;
    } else if (opcionesAdicionales !== "ninguna") 
    {
        alert("Opción adicional inválida.");
        return;
    }

    let cantidadEscobas = parseInt(prompt("Ingrese la cantidad de escobas a cotizar (entre 3 y 30):"));

    if (isNaN(cantidadEscobas) || cantidadEscobas < 3 || cantidadEscobas > 30) 
    {
        alert("La cantidad de escobas ingresada no es válida.");
        return;
    }
    
    let precioBase;
    switch(tipoEscoba) 
    {
        case "escoba dura":
            precioBase = tipoMaterial === "cerdas sintéticas" ? 8000 : 10000;
            break;
        case "escoba suave":
            precioBase = tipoMaterial === "cerdas sintéticas" ? 8000 : 10000;
            break;
        case "cepillo":
            precioBase = tipoMaterial === "cerdas sintéticas" ? 12000 : 15000;
            break;
        default:
            alert("Tipo de escoba inválido.");
            return;
    }
    
    let precioAdicional = 0;
    if (mangoLargo) 
    {
        precioAdicional += 2000;
    }
    if (ganchoPunta) 
    {
        precioAdicional += 500;
    }
    
    let precioTotal = (precioBase + precioAdicional) * cantidadEscobas;
    
    alert("El precio total de la cotización es: $" + precioTotal);
}

cotizarEscobas();