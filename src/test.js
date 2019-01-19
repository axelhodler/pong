const test = require('tape')

class Paddle {
  constructor(verticalPosition) {
    this.verticalPosition = verticalPosition
  }
  moveUp() {
    return new Paddle(this.verticalPosition + 1)
  }
  getVerticalPosition() {
    return this.verticalPosition
  }
}

test('moving up moves the paddle up', assert => {
  const p = new Paddle(1)
  const movedPaddle = p.moveUp()
  assert.equal(movedPaddle.getVerticalPosition(), 2)
  assert.end()
})
