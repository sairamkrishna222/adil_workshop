class Fruits {
    constructor() {
        this.name = "banana"
        this.colour = "yellow"
    }

    ripe() {
        console.log(`${this.name} is riping and constantly changing color to ${this.colour}`)

    }
    grow() {

        console.log(`${this.name} is growing`)
    }

}
class Apple extends Fruits {

    type = "fruit"
    variety = "basic"

    specialApple() {
        super.ripe()
        console.log(this.colour)
        console.log(this.type)
    }

    specialPineApple(number){
        console.log(`special pineapples are ${number} ${this.colour} in numbers`)
    }
}



let bunch = new Apple

bunch.specialApple()
bunch.specialPineApple(8)
