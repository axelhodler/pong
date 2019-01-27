export class Constraints {
  constructor(lowerBounds, upperBounds) {
    this.lowerBounds = lowerBounds
    this.upperBounds = upperBounds
  }
  isPositionViolatingConstrains(verticalPosition) {
    return verticalPosition < this.lowerBounds || verticalPosition > this.upperBounds
  }
}

export class Paddle {
  constructor(constraints, verticalPosition) {
    this.constraints = constraints
    this.verticalPosition = verticalPosition
  }
  _movePositionTo(position) {
    if (this.constraints.isPositionViolatingConstrains(position)) {
      return new Paddle(this.constraints, this.verticalPosition)
    } else {
      return new Paddle(this.constraints, position)
    }
  }
  moveUp() {
    const verticalPositionAfter = this.verticalPosition + 1
    return this._movePositionTo(verticalPositionAfter)
  }
  moveDown() {
    const verticalPositionAfter = this.verticalPosition - 1
    return this._movePositionTo(verticalPositionAfter)
  }
  getVerticalPosition() {
    return this.verticalPosition
  }
}

