import { createSelector } from 'reselect'

export const getGameBoard = (state) => state.values
export const getMovesCounter = (state) => state.movesCounter
export const getIsTimerValid = (state) => state.isTimerValid
export const getIsTimerOn = (state) => state.isTimerOn
export const getStatus = (state) => state.finita

export const getBlockValue = (state, props) => (
  state.values && state.values.length
    ? state.values[props.y][props.x]
    : 0
)

export const getIsBlockEmpty = (state, props) => createSelector(
  getEmptyBlockPosition,
  emptyBlockPosition => (
    props.x === emptyBlockPosition.x &&
    props.y === emptyBlockPosition.y
  )
)(state, props)

export const getEmptyBlockPosition = (state) => state.emptyBlockPosition

export const getIsBlockEnabled = (state, props) => createSelector(
  getEmptyBlockPosition,
  emptyBlockPosition => {
    const { x, y } = props

    let xs = x - emptyBlockPosition.x
    let ys = y - emptyBlockPosition.y

    xs *= xs
    ys *= ys

    return Math.abs(Math.sqrt(xs + ys)) === 1
  }
)(state, props)
