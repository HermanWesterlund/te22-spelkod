import GameObject from "./GameObject.js"
import Ball from "./Ball.js"
import Input from "./Input.js"
import Player from "./Player.js"

export default class game {     //skapar klassen
    constructor(width, height) {    //klassens konstruktor
        this.width = width
        this.height = height
        this.Input = new Input(this)
        this.Player = new Player(0, 0, 50, 50, "blue", 5, this)
        console.log("Ny instant av game", this.width)
        this.box = new GameObject (40, 50, 80, 80, "green", 1)
        this.box2 = new GameObject (40, 200, 80, 80, "yellow", 1)
        this.ball = new Ball(80, 390, 40, 40, "red", 1)
    }

    update(deltaTime){
        this.box.update(deltaTime)
        this.box2.update(deltaTime)
        this.ball.update(deltaTime)
        this.Player.update(deltaTime)
    }

    draw(ctx){
        this.box.draw(ctx)
        this.box2.draw(ctx)
        this.ball.draw(ctx)
        this.Player.draw(ctx)
    }
}