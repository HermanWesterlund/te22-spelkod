import Input from "./Input.js"
import Background from "./Background.js"
import Characters from "./Characters.js"

export default class game {     //skapar klassen
    constructor(width, height) {    //klassens konstruktor
        this.width = width
        this.height = height
        this.Input = new Input(this)
        console.log("Ny instant av game", this.width)
        this.background = new Background(this)
        this.characters = new Characters(this)
    }

    update(deltaTime){
   
    }

    draw(ctx){
        this.background.draw(ctx)
        this.characters.draw(ctx)
    }
}