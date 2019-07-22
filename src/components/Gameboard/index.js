import React, { PureComponent } from 'react'
import Block from './Block/blockContainer'
import Timer from '../Timer/timerContainer'
import { generateNumericSequence, shuffleArray } from '../../utils/arrayUtils'
import './component_style.css'

const BOARD_LENGTH = 4
const BOARD_SIZE = BOARD_LENGTH * BOARD_LENGTH

const MODEL_SEQUENCE = generateNumericSequence(BOARD_SIZE)
  .slice(0, BOARD_SIZE - 1)
  .concat('')

class Gameboard extends PureComponent {
  constructor () {
    super()

    this.onRestart = this.onRestart.bind(this)
    this.generateBoard = this.generateBoard.bind(this)
  }

  componentDidMount () {
    this.onRestart()
  }

  onRestart () {
    const { onSetGameBoard } = this.props
    const values = this.generateBoard()

    onSetGameBoard(values)
  }

  generateBoard () {
    const shuffledSequence = shuffleArray(MODEL_SEQUENCE.slice())

    return Array(BOARD_LENGTH)
      .fill(0)
      .map((row, index) => shuffledSequence
        .slice(index * BOARD_LENGTH, index * BOARD_LENGTH + BOARD_LENGTH))
  }

  render () {
    const { movesCounter, finita } = this.props
    const blocks = Array(BOARD_SIZE)
      .fill(0)
      .map((value, index) => {
        const row = Math.floor(index / 4)
        const column = index - BOARD_LENGTH * row

        return <Block key={`${row}-${column}`} x={column} y={row} />
      })

    return <div className='game'>
      <div className='game__game-controls'>
        <button type='button' onClick={this.onRestart}>Размешать и начать</button>
      </div>
      <div className='game__game-timings'>
        <span>Количество ходов</span>
        <span className='bold'>{movesCounter || '\u2010'}</span>
        <span>Время</span>
        <span className='bold'>
          <Timer />
        </span>
      </div>
      <div className='game__gameboard-wrapper__gameboard'>
        { blocks }
      </div>
      { finita && <div className='congrats'>Успех!</div> }
    </div>
  }
}

export default Gameboard
