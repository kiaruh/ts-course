function addTwo(num:number):number{ //return a number
    return num + 2
}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

function getValue(myVal:number):boolean {
    return true 
}

const getHello = (s:string):string => 'hello'

const heroes = ['Thor', 'Spiderman', 'Ironman']

let mapHeroes = heroes.map(hero => `the hero is ${hero}`)

function getMesg(msg:string): void{ 
    console.log(msg)
}

function fail(err:string):never{ //for errors handling
    throw new Error(err)
}


console.log(mapHeroes)

console.log(addTwo(5))

export {}