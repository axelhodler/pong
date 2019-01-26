export class GameDisplay {
  render(paddle) {
    const gamespaces = [" ", " ", " "]
    gamespaces[paddle.getVerticalPosition()] = "I"
    return gamespaces.join("\n")
  }
}
