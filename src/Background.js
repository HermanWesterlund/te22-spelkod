import Layer from "./Layer"

export default class Background {
    constructor(game) {
        this.game = game
        this.width = 1280 // this.game.width * 2
        this.height = 720 // this.game.height
        
        this.bg = new Image()
        this.bg.src = "/images/bedroom background.png"

        this.backgroundLayers = [
            new Layer(this.game, this.width, this.height, 0, this.bg, 0, 0),
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