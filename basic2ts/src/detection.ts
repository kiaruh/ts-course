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