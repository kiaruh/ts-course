const body = document.body
body.innerHTML = '<style> body{background-color:#313131 } </style>'

// class User {
//     public email:string
//     private name:string //and also you can use # -> #name
//     readonly city:string = ''
//     constructor(email:string, name:string){
//         this.email = email,
//         this.name = name
//     }
// }

class User { //same code

    protected _courseCount = 1 //if its private, child extended classes cannot access to the property
    
    readonly city:string = ''
    constructor(
        public email:string,
        public name:string
        // private userID:string
        ){
    
        this.email = email,
        this.name = name
    }

    private deleteToken(){
        console.log('token deleted')
    }

    get getAppleEmail():string{
        return `apple@s${this.email}`
    }

    get courseCount():number{
        return this._courseCount
    }
    set courseCount(courseNum){
        if(courseNum<=1){
            throw new Error('Course count should be more than 1')
        }
        this._courseCount = courseNum
    }

}

const nico = new User('n@i.co','nico')

class SubUser extends User {
    isFamily: boolean = true
    changeCourseCountr(){
        this._courseCount = 4
    }

}