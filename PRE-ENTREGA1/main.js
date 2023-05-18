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
    } while (( FechaElegida < 0 && FechaElegida > 8 ) );
    return FechaElegida
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

alert( "Tus datos de reserva son:" + NombreApellido  + FechaNac  + Telefono  + eleccion
)
 
/*
//Selecciona una tipo de habitación

let habit1 = "Habitación Deluxe"
let habit2 = "Habitación King"
let habit3 = "Suite Deluxe"
let habit4 = "Suite Honeymooner"


// Selecciona cuantos huespedes son


//Funcion seleccionar habitación


//DATOS RESERVA

alert( 'Tus datos de reserva son: " 
+ NombreApellido 
+ FechaNac 
+ Telefono
+ FechaElegida
) 




let FechaElegida = parseInt(prompt ())


if( FechaElegida > 0 && FechaElegida< 10){
    
    alert("Fecha disponible" )


} else {
    alert("Fecha no disponible.")
}








*/

