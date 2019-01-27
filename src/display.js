export class GameDisplay {
  constructor(constraints) {
    this.constraints = constraints
  }
  render(paddle) {
    const gamespaces = [" ", " ", " "]
    gamespaces[paddle.getVerticalPosition()] = "I"
    return gamespaces.reverse().join("\n")
  }
}
