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
    
    readonly city:string = ''
    constructor(
        public email:string,
        public name:string
        // private userID:string
        ){
    
        this.email = email,
        this.name = name
    }
}

const nico = new User('n@i.co','nico')