// Bienvenida

alert(`Bienvenidos a Beco Dimare Hotel Boutique
Realiza tu reservación`);


// Ingresa tus datos personales

let NombreApellido = prompt ("Ingresa tu nombre completo");
console.log(NombreApellido)
let FechaNac = prompt ("Ingresa tu fecha de nacimiento (DD/MM/AAAA)");
console.log(FechaNac) 
let Telefono = parseInt(prompt ("Ingresa número telefonico")); 
console.log(Telefono)





// Selecciona una fecha


function seleccionaFecha(){
    let FechaElegida;

    do {
        FechaElegida = parseInt(prompt(`Selecciona una fecha:
        1 -21/05/2023 
        2 -22/05/2023
        3 -23/05/2023
        4 -24/05/2023
        5 -25/05/2023
        6 -26/05/2023
        7 -27/05/2023
        `))
    } while (( FechaElegida > 7 ));
    return FechaElegida;
}

eleccion = seleccionaFecha()

switch (eleccion) {
    case 1:
        eleccion = "21/05/2023"
     break;
    case 2:
        eleccion = "22/05/2023"
    break;
    case 3:
        eleccion = "23/05/2023"
    break;
     case 4:
        eleccion = "24/05/2023"
    break;
    case 5:
        eleccion = "25/05/2023"
     break;
    case 6:
        eleccion = "26/05/2023"
    break;
    case 7:
        eleccion = "27/05/2023"
    break;

}


// Selecciona una habitación

function seleccionaHab(){
    let HabElegida;

    do {
        HabElegida = parseInt(prompt(`Selecciona una fecha:
        1 -Habitación Deluxe
        2 -Habitación King
        3 -Suite Deluxe
        4 -Suite Hooneymooner
        5 -Suite Presidencial
    
        `))
    } while (( HabElegida > 5 ));
    return HabElegida;
}

eleccionHab = seleccionaHab()

switch (eleccionHab) {
    case 1:
        eleccionHab = "Habitación Deluxe"
     break;
    case 2:
        eleccionHab = "Habitación King"
    break;
    case 3:
        eleccionHab = "Suite Deluxe"
    break;
     case 4:
        eleccionHab = "Suite Honeymooner"
    break;
    case 5:
        eleccionHab = "Suite Presidencial"
    break;

    }


// Información de RESERVA

swal( "Tus datos de reserva son:"             
                                        + 
`Nombre: ` + NombreApellido            +
`Fecha nacimiento: `+ FechaNac         +
`Telefono: `+ Telefono                 +
`Fecha: `+ eleccion                    +
`Habitación: `+ eleccionHab
)

