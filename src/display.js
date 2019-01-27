export class GameDisplay {
  constructor(constraints) {
    this.constraints = constraints
  }
  render(paddle) {
    const gamespaces = Array(this.constraints.maxMovementRange()).fill(" ")
    gamespaces[paddle.getVerticalPosition()] = "I"
    return gamespaces.reverse().join("\n")
  }
}
