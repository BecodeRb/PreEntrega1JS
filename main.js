
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


let eleccion = seleccionaFecha()

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
        1 -Deluxe King
        2 -Deluxe Doble
        3 -Ocean View King
        4 -Ocean View Double
        5 -Ocean View Presidential
    
        `))
    } while (( HabElegida > 5 ));
    return HabElegida;
}

eleccionHab = seleccionaHab()

switch (eleccionHab) {
    case 1:
        eleccionHab = "Deluxe King"
     break;
    case 2:
        eleccionHab = "Deluxe Doble"
    break;
    case 3:
        eleccionHab = "Ocean View King"
    break;
     case 4:
        eleccionHab = "Ocean View Double"
    break;
    case 5:
        eleccionHab = "Ocean View Presidential"
    break;

    }


// Información de RESERVA

alert( "Tus datos de reserva son:      " + 
`Nombre: ` + NombreApellido            +
`Fecha nacimiento: `+ FechaNac         +
`Telefono: `+ Telefono                 +
`Fecha:   `+ eleccion                    +
`Habitación:  `+ eleccionHab
)






//NUEVO FILTROS Y BUSQUEDA


const HabitacionesBeco = [
    {nombre: 'Deluxe King', 
    precio: 15000},

    {nombre: 'Deluxe Doble', 
    precio: 22000},

    {nombre: 'Ocean View King', 
    precio: 24000},

    {nombre: 'Ocean View Double', 
    precio: 32000},

    {nombre: 'Ocean View Presidential', 
    precio: 38000},
]

//Buscador Habitación

const resultadoBuscar = HabitacionesBeco.find((el) => el.nombre === "Ocean View King")


console.log(resultadoBuscar) 

//Filtrado Habitaciones

const resultadoFiltro = HabitacionesBeco.filter((el) => el.nombre.includes('Ocean'))
const resultadoFiltro2 = HabitacionesBeco.filter((el) => el.precio < 35000)


console.log(resultadoFiltro)
console.log(resultadoFiltro2)

//REDUCE PARA SUMAR MAS DE UNA HABITACION de Resultado de Filtrado2?


total = resultadoFiltro2.reduce((acumulador, el) => acumulador + el.precio, 0)


console.log(total)




