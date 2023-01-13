import { cA } from "chart.js/dist/chunks/helpers.core"

function detectType(val:number|string){
    if(typeof val === 'string'){
        return val.toLowerCase()
    }
    return val + 3
}

function provideId(id:string|null){
    if(!id){
        console.log('please provide an ID')
        return
    }
    id.toLowerCase()
}

//typeof TYPE GUARD

interface User{
    name:string,
    email:string
}

interface Admin{
    isAdmin:boolean,
    name:string,
    email:string
}

function isAdminAccount(acc:User|Admin){
    if('isAdmin' in acc){
        return acc.isAdmin
    }
    return false
}

function logValue(x:Date|string){
    if(x instanceof Date){
        console.log(x.toUTCString())
    }else{
        console.log(x.toUpperCase())
    }
}

type Fish = {swim:()=>void}
type Bird = {fly:()=>void}

function isFish(pet:Fish|Bird):pet is Fish{
   return (pet as Fish).swim!==undefined
}

function feed(pet:Fish|Bird){
    if(isFish(pet)){
        return 'fish food'
    }else{
        return 'bird food'
    }
}

interface Circle {
    kind: 'circle'
    radius: number
}

interface Square {
    kind: 'square'
    side:number
}

interface Rectangle {
    kind: 'rectangle'
    length:number
    height:number
}

type Shape = Circle|Square|Rectangle

function getTrueShape(shape:Shape){
    if(shape.kind==='circle'){
        return Math.PI * shape.radius **2
    }
    //return shape.side* shape.side
}

function getArea(shape:Shape){ //the never case
    switch(shape.kind){
        case 'circle':
            return Math.PI * shape.radius **2

        case 'square':
            return shape.side* shape.side

        case 'rectangle':
            return shape.length*shape.height
        
        default: //this code helps me to check the types
            const _defaultforshape:never=shape
            return _defaultforshape
    }
}