import {scenes} from "./Scenes"

export default class SceneManager {
    constructor(game) {
        this.game = game
        this.scenes = scenes
        this.activeSceneId = 1
        this.activeScene = this.get()
    }

    change(id) {
        this.activeSceneId = id
        this.activeScene = this.get()
    }

    get() {
        return this.scenes.find(scene => scene.id === this.activeSceneId)
    }

}