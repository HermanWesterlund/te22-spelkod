import GameObject from "./GameObject";

export default class Player extends GameObject {
    constructor(x, y, width, height, color, speed, game) {
        super(x, y, width, height, color, speed, game)
        this.game = game

        this.speedX = 0
        this.maxSpeedX = 0.25
        this.speedY = 0
        this.maxSpeedY = 14
        this.gravity = 15
    }

    update(deltaTime) {
        if (this.game.Input.keys.has("ArrowLeft")) {
            console.log("JAHOOO")
            this.speedX -= this.maxSpeedX
        }
        if (this.game.Input.keys.has("ArrowRight")) {
            console.log("JAHOOO")
            this.speedX += this.maxSpeedX
        }
        if (!this.game.Input.keys.has("ArrowRight") && !this.game.Input.keys.has("ArrowLeft")) {
            this.speedX = 0
        }
        if (this.game.Input.keys.has("ArrowUp")) {
            console.log("JAHOOO")
            this.speedY -= this.maxSpeedY
            this.gravity = 15
        }
        else {
            this.gravity = 0.25
        }

        this.x += this.speedX
        this.y += this.speedY

        if (this.y > 320) {
            this.speedY = 0
            this.y = 320
          } 
         else {
            this.speedY += this.gravity
        }
    }
}