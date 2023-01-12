
interface User {
    readonly dbId: number
    email:string,
    userId:number,
    googleId?:string
    // startTrial: () => string
    startTrial(): string //another way 
    getCoupon(couponname:string,value:number):number
}

const nicolas: User ={
    dbId:111,
    email:'nico@ni.co',
    userId:1234,
    startTrial: () => 'trail started',
    getCoupon: (name: 'Guest',off: 10) => off,
    githubToken: 'ghtoken'
    }

nicolas.email = 'ni@c.o'

interface User {
    githubToken: string
}

interface Admin extends User{
    role: 'admin'|'ta'|'student'
}


