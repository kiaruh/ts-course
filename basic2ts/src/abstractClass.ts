abstract class TakePic {
    constructor(
        public camaraMode:string,
        public filter:string
    ){}

    abstract getSepia():void
    getReelTime():number{
        return 8
    }
}


class Instag extends TakePic{
    constructor(
        public camaraMode:string,
        public filter:string,
        public burst:number
    ){
        super(camaraMode,filter)
    }

    getSepia(): void {
        console.log('sepia')
    }

}

const nco = new Instag('test','test',11)

nco.getReelTime()