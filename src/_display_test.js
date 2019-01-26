var test = require('tape')
import { Constraints, Paddle } from './code'

class GameDisplay {
  render(paddle) {
    const gamespaces = [" ", " ", " "]
    gamespaces[paddle.getVerticalPosition()] = "I"
    return gamespaces.join("\n")
  }
}

test('renders paddle in its row - 1', assert => {
  const c = new Constraints(0, 2)
  const p = new Paddle(c, 1)
  const game = new GameDisplay()
  const renderedGame = game.render(p)
  assert.equal(renderedGame, " \nI\n ")
  assert.end()
})

test('renders paddle in its row - 2', assert => {
  const c = new Constraints(0, 2)
  const p = new Paddle(c, 0)
  const game = new GameDisplay()
  const renderedGame = game.render(p)
  assert.equal(renderedGame, "I\n \n ")
  assert.end()
})
