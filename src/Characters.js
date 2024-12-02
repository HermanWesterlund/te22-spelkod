import Layer from "./Layer"

export default class Characters {
    constructor(game) {
        this.game = game
        this.width = 1280 // this.game.width * 2
        this.height = 720 // this.game.height
        
        this.rudolf = new Image()
        this.rudolf.src = "./src/assets/rudolf_rod_mule_transparent.png"

        this.backgroundLayers = [
            new Layer(this.game, this.width, this.height, 0, this.rudolf, -235, 0),
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