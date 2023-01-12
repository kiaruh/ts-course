//

let score: number | string = 33

score = 44 
score = '55'


type User = {
    name:string,
    id:number
}

type Admin = {
    username:string,
    id:number
}

let nico: User | Admin = {
    name: 'Nico',
    id: 11111
}

nico = {
    username: 'SuperNico',
    id:22222
}

function getDbId(id:number|string){
    //making some API calls
    // console.log(id)

    if(typeof id === 'string'){
        id.toLocaleLowerCase()
    }
}

//array

const data:(number|string)[]= [1,2,3,'4']
const data2:(number|string|boolean)[]= [1,2,3,'4',true]

let seat: 'aisle' | 'middle' | 'window'

seat = 'window'
seat = 'middle'