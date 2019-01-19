const test = require('tape')

class Constraints {
  constructor(lowerBounds) {
    this.lowerBounds = lowerBounds
  }
  isPositionViolatingConstrains(verticalPosition) {
    return verticalPosition <= this.lowerBounds
  }
}

class Paddle {
  constructor(constraints, verticalPosition) {
    this.constraints = constraints
    this.verticalPosition = verticalPosition
  }
  moveUp() {
    return new Paddle(this.constraints, this.verticalPosition + 1)
  }
  moveDown() {
    const verticalPositionAfter = this.verticalPosition - 1
    if (this.constraints.isPositionViolatingConstrains(verticalPositionAfter)) {
      return new Paddle(this.constraints, this.verticalPosition)
    } else {
      return new Paddle(this.constraints, verticalPositionAfter)
    }
  }
  getVerticalPosition() {
    return this.verticalPosition
  }
}

test('moving up moves the paddle up', assert => {
  const c = new Constraints(0)
  const p = new Paddle(c, 1)
  const movedPaddle = p.moveUp()
  assert.equal(movedPaddle.getVerticalPosition(), 2)
  assert.end()
})

test('moving down moves the paddle down', assert => {
  const c = new Constraints(0)
  const p = new Paddle(c, 4)
  const movedPaddle = p.moveDown()
  assert.equal(movedPaddle.getVerticalPosition(), 3)
  assert.end()
})

test('paddle is not moved out of constraints', assert => {
  const c = new Constraints(0)
  const p = new Paddle(c, 0)
  const movedPaddle = p.moveDown()
  assert.equal(movedPaddle.getVerticalPosition(), 0)
  assert.end()
})
