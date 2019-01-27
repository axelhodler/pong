var test = require('tape')
import { Constraints, Paddle } from './code'
import { GameDisplay } from './display'

test('renders paddle in its row - 1', assert => {
  const c = new Constraints(0, 2)
  const p = new Paddle(c, 1)
  const game = new GameDisplay(c)
  const renderedGame = game.render(p)
  assert.equal(renderedGame, " \nI\n ")
  assert.end()
})

test('renders paddle in its row - 2', assert => {
  const c = new Constraints(0, 2)
  const p = new Paddle(c, 0)
  const game = new GameDisplay(c)
  const renderedGame = game.render(p)
  assert.equal(renderedGame, " \n \nI")
  assert.end()
})

test('renders paddle in its row - 3', assert => {
  const c = new Constraints(0, 2)
  const p = new Paddle(c, 2)
  const game = new GameDisplay(c)
  const renderedGame = game.render(p)
  assert.equal(renderedGame, "I\n \n ")
  assert.end()
})

test('renders paddle moving down', assert => {
  const c = new Constraints(0, 2)
  const p = new Paddle(c, 2)
  const game = new GameDisplay(c)
  const renderedGame = game.render(p.moveDown())
  assert.equal(renderedGame, " \nI\n ")
  assert.end()
})

test('renders paddle moving up', assert => {
  const c = new Constraints(0, 2)
  const p = new Paddle(c, 1)
  const game = new GameDisplay(c)
  const renderedGame = game.render(p.moveUp())
  assert.equal(renderedGame, "I\n \n ")
  assert.end()
})

test('moving up in two steps', assert => {
  const c = new Constraints(0, 2)
  let p = new Paddle(c, 0)
  p = p.moveUp()
  p = p.moveUp()
  const game = new GameDisplay(c)
  const renderedGame = game.render(p)
  assert.equal(renderedGame, "I\n \n ")
  assert.end()
})
