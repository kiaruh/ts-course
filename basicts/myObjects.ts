const User = {
    name : 'Nico',
    isPaid: true,
    email: 'hola@hola.com'
}

function createUser({name:string, isPaid: boolean}){

}

function createCourse():{name:string,price:number}{ //returns an obj
    return {name: 'TS-Course', price:300}
}

createUser({name: User.name, isPaid: User.isPaid})
createUser(User)

type Usuario = {
    name: string,
    email:string,
    isActive:boolean
}

function createUsario(tipodeusuario:Usuario):Usuario{
    return {name:'',email:'', isActive: true}
}

type UsuarioOtro = {
    readonly _id: string,
    name:string,
    email:string,
    isActive: boolean,
    creditCard?:boolean //optional
}

let miUsuarioOtro: UsuarioOtro = {
    _id: '12345',
    name: 'Nico',
    email: 'hola@hola.com',
    isActive: true
} 

type cardNumber = {
    cardNumber: number
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}


export {}

