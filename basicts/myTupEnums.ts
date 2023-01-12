// const user: (string|number)[] = ['Nico',1]
let user: [string,number,boolean]

user = ['Nico',111,true]
user = [true,'Nico',111]

let rgb: [number,number,number]

type User = [number,string]

const newUser: User = [11111,'hola soy nuevo']

newUser[1] = 'Hola'

//enums - restrict options

// enum SeatChoice {
//     AISLE = 10,
//     MIDDLE = 213124,
//     WINDOW = 'window',
//     FOURTH = 44,
//     OTHER

// }

const enum SeatChoice { //another choice
    AISLE = 10,
    MIDDLE = 213124,
    WINDOW = 'window',
    FOURTH = 44,
    OTHER

}

let seat = SeatChoice.AISLE
seat = SeatChoice.WINDOW






