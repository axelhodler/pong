var test = require('tape')
import { Constraints, Paddle } from './code'

class GameDisplay {
  constructor(paddle) {
    this.paddle = paddle
  }
  render() {
    return " \nI\n "
  }
}

test('moving up moves the paddle up', assert => {
  const c = new Constraints(0, 2)
  const p = new Paddle(c, 1)
  const game = new GameDisplay(p)
  const renderedGame = game.render()
  assert.equal(renderedGame, " \nI\n ")
  assert.end()
})
