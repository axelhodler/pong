const test = require('tape')

class Paddle {
  constructor(verticalPosition) {
    this.verticalPosition = verticalPosition
  }
  moveUp() {
    return new Paddle(this.verticalPosition + 1)
  }
  moveDown() {
    return new Paddle(this.verticalPosition - 1)
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

test('moving down moves the paddle down', assert => {
  const p = new Paddle(4)
  const movedPaddle = p.moveDown()
  assert.equal(movedPaddle.getVerticalPosition(), 3)
  assert.end()
})
