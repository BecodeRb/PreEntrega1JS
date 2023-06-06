

// Bienvenida

alert(`Bienvenidos a Beco Dimare Hotel Boutique
@@ -37,7 +38,8 @@ function seleccionaFecha(){
    return FechaElegida;
}

eleccion = seleccionaFecha()

let eleccion = seleccionaFecha()

switch (eleccion) {
    case 1:
@@ -72,11 +74,11 @@ function seleccionaHab(){

    do {
        HabElegida = parseInt(prompt(`Selecciona una fecha:
        1 -Habitación Deluxe
        2 -Habitación King
        3 -Suite Deluxe
        4 -Suite Hooneymooner
        5 -Suite Presidencial
        1 -Deluxe King
        2 -Deluxe Doble
        3 -Ocean View King
        4 -Ocean View Double
        5 -Ocean View Presidential
    
        `))
    } while (( HabElegida > 5 ));
@@ -87,32 +89,83 @@ eleccionHab = seleccionaHab()

switch (eleccionHab) {
    case 1:
        eleccionHab = "Habitación Deluxe"
        eleccionHab = "Deluxe King"
     break;
    case 2:
        eleccionHab = "Habitación King"
        eleccionHab = "Deluxe Doble"
    break;
    case 3:
        eleccionHab = "Suite Deluxe"
        eleccionHab = "Ocean View King"
    break;
     case 4:
        eleccionHab = "Suite Honeymooner"
        eleccionHab = "Ocean View Double"
    break;
    case 5:
        eleccionHab = "Suite Presidencial"
        eleccionHab = "Ocean View Presidential"
    break;

    }


// Información de RESERVA

alert( "Tus datos de reserva son:"             
                                        + 
alert( "Tus datos de reserva son:      " + 
`Nombre: ` + NombreApellido            +
`Fecha nacimiento: `+ FechaNac         +
`Telefono: `+ Telefono                 +
`Fecha: `+ eleccion                    +
`Habitación: `+ eleccionHab
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



