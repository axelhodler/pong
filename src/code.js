export default class Constraints {
  constructor(lowerBounds, upperBounds) {
    this.lowerBounds = lowerBounds
    this.upperBounds = upperBounds
  }
  isPositionViolatingConstrains(verticalPosition) {
    return verticalPosition <= this.lowerBounds || verticalPosition >= this.upperBounds
  }
}
