import Input from "./Input.js"
import Background from "./Background.js"
import Characters from "./Characters.js"
import dialogue from "./Dialogue.js"
import button from "./Button.js"
import SceneManager from "./SceneManager.js"

export default class game {     //skapar klassen
    constructor(canvas) {    //klassens konstruktor
        this.canvas = canvas
        this.width = canvas.width
        this.height = canvas.height
        this.Input = new Input(this)
        console.log("Ny instant av game", this.width)
        this.background = new Background(this)
        this.characters = new Characters(this)
        this.dialogue = new dialogue(this)
        this.SceneManager = new SceneManager(this)
        this.button = new button(this)
        this.dialogue.create(this.SceneManager.activeScene)
        this.button.create(this.SceneManager.activeScene)
    }

    update(deltaTime){
        
    }

    draw(ctx){
        this.background.draw(ctx)
        this.characters.draw(ctx)
    }
}