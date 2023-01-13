const score: Array<number> = []
const names:Array<string>=[]

function identityOne(val:boolean|number):boolean|number{
    return val
}

function identityTwo(val:any):any{
    return val
}

function identityThree<Type>(val:Type):Type{ //it locks the type of the val
    return val
}

identityThree(true)
identityThree(3)


function identityFour<T>(val:T):T{ //same as iden3
    return val
}

interface Bootle{
    brand?:string,
    type?:number
}

identityFour<Bootle>({})

function getSearchProducts<T>(products:T[]):T{
    //do some db operations
    const myIndex = 3
    return products[myIndex]
}

const getMoreSearchProducts = <T>(products: T[]):T=> {
    //some db ops
    const myIndex = 4
    return products[myIndex]
} 

interface Respuesta<T>{
    type:string,
    success:boolean,
    msg:T
}

let payload1: Respuesta<string> ={
    type: 'post',
    success:true,
    msg: 'Cuerpo del mensaje'
}

let payload2: Respuesta<object> ={
    type:'post',
    success:false,
    msg:{code:404, err:'error pepito'}
}

interface DataBase {
    connection?:string,
    username?: string,
    password?:string
}

function anotherFunction<T,U extends DataBase>(valOne:T,valTwo:U):object{
    return{valOne,valTwo}
}

anotherFunction(3,{})

interface Quiz{
    name:string,
    type: String
}

interface Course{
    name:string,
    author:string,
    subject:string
}

class Sellable<T>{
    public cart:T[]=[]

    addToCart(products:T){
        this.cart.push(products)
    }
}
