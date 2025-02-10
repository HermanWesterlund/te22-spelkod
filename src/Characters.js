import Layer from "./Layer"

export default class Characters {
    constructor(game) {
        this.game = game
        this.width = 1280 // this.game.width * 2
        this.height = 720 // this.game.height
        
        this.rudolf = new Image()
        this.rudolf.src = "./src/assets/rudolf_rod_mule_transparent.png"
        this.dialogueSqr = new Image()
        this.dialogueSqr.src = "src/assets/dialogue window.png" 

        this.backgroundLayers = [
            new Layer(this.game, this.width, this.height, 0, this.rudolf, -235, 0),
            new Layer(this.game, 640, 180, 0, this.dialogueSqr, 0, 540),
        ]
    }
  
    update(deltaTime) {
      this.backgroundLayers.forEach(layer => {
        layer.update(deltaTime)
      })
    }
  
    draw(ctx) {
      this.backgroundLayers.forEach(layer => {
        layer.draw(ctx)
      })
    }
  
  }