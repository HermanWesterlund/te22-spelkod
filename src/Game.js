import GameObject from "./GameObject.js"

export default class game {     //skapar klassen
    constructor(width, height) {    //klassens konstruktor
        this.width = width
        this.height = height
        console.log("Ny instant av game", this.width)
        this.box = new GameObject (40, 100, 80, 80, "green")
    }

    update(deltaTime){
        this.box.update(deltaTime)
    }

    draw(ctx){
        this.box.draw(ctx)
    }
}