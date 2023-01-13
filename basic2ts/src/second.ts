interface TakePhoto {
    camaraMode:string
    filter: string
    burst: number
}

interface Story{
    createStory():void
}

class Instagram implements TakePhoto{
    constructor(
        public camaraMode: string,
        public filter: string,
        public burst: number
    ){}
}

class Youtube implements TakePhoto, Story{
    constructor(
        public camaraMode: string,
        public filter: string,
        public burst: number,
        public short: string
    ){}

    createStory(): void {
        console.log('')
    }
}