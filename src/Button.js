import game from "./Game"
import GameObject from "./GameObject"
import dialogue from "./Dialogue"

export default class button {
    constructor(game) {
        this.game = game
        this.dialogue = dialogue
        this.canvas = this.game.canvas
        this.posX = 100
        this.posY = 100
        this.path1 = false
        this.path2 = false
        this.options1 = ["Jag är jägare", "Dyr kavaj", "Sommar"]
        this.options2 = ["Välgörenhetsarbete", "Renpäls", "Vinter"]
        this.currentOption = -1
    }

    create(text) {

        const choiceBox = document.createElement("div")
        choiceBox.classList.add("optionsBox")
        const option1 = document.createElement("button")
        const option2 = document.createElement("button")

        option1.textContent = "Vegetariskt"
        option2.textContent = "Hovdjur"

        window.addEventListener("click", () => {
            console.log(this.game.dialogue.score)
            if (this.path1 == true || this.path2 == true) {
                if (this.path1 == true) {
                    if (this.game.dialogue.index < this.game.dialogue.maxIndex) {
                        this.game.dialogue.text = this.game.dialogue.dialogues[this.game.dialogue.setIndex][this.game.dialogue.index]
                        this.game.dialogue.index += 1
                        this.game.dialogue.change()
                    }
                    else {
                        this.path1 = false
                        this.path2 = false
                        this.game.dialogue.setIndex += 1
                        this.game.dialogue.index = 0
                        if (this.game.dialogue.dialogues.length > this.game.dialogue.setIndex) {
                            option1.style.visibility="visible"
                            option2.style.visibility="visible"
                        }
                    }
                }
                else {
                    if (this.game.dialogue.index < this.game.dialogue.maxIndex) {
                        this.game.dialogue.text = this.game.dialogue.dialogues2[this.game.dialogue.setIndex][this.game.dialogue.index]
                        this.game.dialogue.index += 1
                        this.game.dialogue.change()
                    }
                    else {
                        this.path1 = false
                        this.path2 = false
                        this.game.dialogue.setIndex += 1
                        this.game.dialogue.index = 0
                        if (this.game.dialogue.dialogues2.length > this.game.dialogue.setIndex) {
                            option1.style.visibility="visible"
                            option2.style.visibility="visible"
                        }
                    }
                }
            }
            else if (this.game.dialogue.dialogues2.length <= this.game.dialogue.setIndex) {
                if (this.game.dialogue.score > 1 && this.game.dialogue.score < 4) {
                    this.game.dialogue.text = "[Ending 1: Lyckad date] Rudolf tycker att du är värdig av hans kärlek. Om några år kommer ni att blicka tillbaka på den här dagen och vara tacksamma över er lyckade relation, eller?"
                }
                else if (this.game.dialogue.score > -4 && this.game.dialogue.score < 1) {
                    this.game.dialogue.text = "[Ending 2: Misslyckad date] Efter att ha spenderat den här daten med dig så har Rudolf insett att du inte är hans typ."
                }
                else if (this.game.dialogue.score >= 2) {
                     this.game.dialogue.text = "[Ending 4: Det perfekta paret] Rudolf ger dig ett obekvämt leende. Du hör dörrarna låsas bakom dig. Nu är det bara du och honom. Ni är ju ändå det perfekta paret."
                }
                else {
                    this.game.dialogue.text = "[Ending 3: Misär i stugan] Innan du vet ordet av det så känner du en varm ström av blod som rinner längst dina kläder. Du tittar ner och ser dina händer, nu avkapade, ligga på golvet. Rudolf har bestämmt sig för att utplåna dig, då du är ett hot mot hans ras."
                }
                this.game.dialogue.change()
            }
        })

        option1.addEventListener("click", () => {
            console.log("Blafaeni!")
            option1.style.visibility="hidden"
            option2.style.visibility="hidden"
            this.currentOption += 1
            option1.textContent = this.options1[this.currentOption]
            option2.textContent = this.options2[this.currentOption]
            this.game.dialogue.maxIndex = this.game.dialogue.dialogues[this.game.dialogue.setIndex].length
            this.game.dialogue.score += this.game.dialogue.happiness1[this.game.dialogue.setIndex]
            this.path1 = true
            console.log(this.game.dialogue)
        })
        option2.addEventListener("click", () => {
            console.log("Blafaeni!")
            option1.style.visibility="hidden"
            option2.style.visibility="hidden"
            this.currentOption += 1
            option1.textContent = this.options1[this.currentOption]
            option2.textContent = this.options2[this.currentOption]
            this.game.dialogue.maxIndex = this.game.dialogue.dialogues2[this.game.dialogue.setIndex].length
            this.game.dialogue.score += this.game.dialogue.happiness2[this.game.dialogue.setIndex]
            this.path2 = true
            console.log(this.game.dialogue)
        })

        choiceBox.appendChild(option1)
        choiceBox.appendChild(option2)
        this.canvas.parentNode.appendChild(choiceBox)
    }
}