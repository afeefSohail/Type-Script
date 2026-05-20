//----------------- Abstract Class ----------------
abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia(): void // define method cant be override
    getReelTime(): number { //we can override this method in his extended class
        return 8
    }

}

//const myPhoto = new TakePhoto("potrait", "normal") // You cant create object of abstract class

// abstract class reponsiablilty of class who extend him
class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("Sepia")
    }

    override getReelTime(): number {
        return 10
    }
}
 
const afeef = new Instagram("potrait", "normal", 3)
console.log(afeef.getReelTime())