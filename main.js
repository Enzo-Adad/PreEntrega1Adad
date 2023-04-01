

function login(){
    alert("¡Bienvenid@ a la página web oficial de Cabalgatas -Puesto Los Amigos- ! Aquí encontrará y tendrá acceso a todo nuestros servicios.")
    alert("Las cabalgatas pueden ser abonadas en efectivo o transferencia.")
    let busqueda = prompt("¿Qué tipo de cabalgata desea realizar? (Cabalgata dos horas, Cabalgata tres horas, Cabalgata cuatro horas)").toUpperCase()
    if (busqueda == "Cabalgata dos horas"){
        alert("El precio de la cabalgata por persona es de 4000 pesos")
        let cantidad = prompt("¿Cuántas personas desean realizar la cabalgata?")
        preciofinal = PrecioCabalgataDosHoras * cantidad
        alert("El precio final de su compra será de " + preciofinal.toFixed())

        continuar = prompt("¿Desea continuar con su compra? (sí/no)")
        if(continuar == "sí"){
            transferencia = prompt("Enviar transferencia al cvu:000000000045862155752 o alias:enzo1234")
            preciofinal = PrecioCabalgataDosHoras * cantidad
            alert("El precio final será de " + preciofinal.toFixed())
            confirmacion = prompt("¿Desea continuar con la operación? (sí/no)")
            if (confirmacion == "sí"){
                alert("¡Muchas gracias por su confianza, que lo disfrute!")
            }else{
                alert("¡No hay problema! puede seguir navegando por nuestra página y realizar consultas cuando guste.")
            }

        }else{
            alert("¡No hay problema! puede seguir navegando por nuestra página y realizar consultas cuando guste.")
        }
    }else if(busqueda == "Cabalgata tres horas"){
        alert("El precio de la cabalgata por persona es de 6000 pesos")
        let cantidad = prompt("¿Cuántas personas desean realizar la cabalgata?")
        preciofinal = PrecioCabalgataTresHoras * cantidad
        alert("El precio final de su compra será de " + preciofinal.toFixed())

        continuar = prompt("¿Desea continuar con su compra? (sí/no)")
        if(continuar == "sí"){
            transferencia = prompt("Enviar transferencia al cvu:000000000045862155752 o alias:enzo1234")
            preciofinal = PrecioCabalgataTresHoras * cantidad
            alert("El precio final será de " + preciofinal.toFixed())
            confirmacion = prompt("¿Desea continuar con la operación? (sí/no)")
            if (confirmacion == "sí"){
                alert("¡Muchas gracias por su confianza, que lo disfrute!")
            }else{
                alert("¡No hay problema! puede seguir navegando por nuestra página y realizar consultas cuando guste.")
            }

        }else{
            alert("¡No hay problema! puede seguir navegando por nuestra página y realizar consultas cuando guste.")
        }
    }else if(busqueda == "Cabalgata cuatro horas"){
        alert("El precio de la cabalgata por persona es de 8000 pesos")
        let cantidad = prompt("¿Cuántas personas desean realizar la cabalgata?")
        preciofinal = PrecioCabalgataCuatroHoras * cantidad
        alert("El precio final de su compra será de " + preciofinal.toFixed()) 

        continuar = prompt("¿Desea continuar con su compra? (sí/no)")
        if(continuar == "sí"){
            transferencia = prompt("Enviar transferencia al cvu:000000000045862155752 o alias:enzo1234")
            preciofinal = PrecioCabalgataCuatroHoras * cantidad
            alert("El precio final será de " + preciofinal.toFixed())
            confirmacion = prompt("¿Desea continuar con la operación? (sí/no)")
            if (confirmacion == "sí"){
                alert("¡Muchas gracias por su confianza, que lo disfrute!")
            }else{
                alert("¡No hay problema! puede seguir navegando por nuestra página y realizar consultas cuando guste.")
            }

        }else{
            alert("¡No hay problema! puede seguir navegando por nuestra página y realizar consultas cuando guste.")
        }
    }else{
        alert("No contamos con la disposicion de dicho servicio")
    }
}