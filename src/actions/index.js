import * as creators from './creators'
import { getIsTimerOn, getGameBoard } from '../selectors'

export const onSetGameBoard = creators.onSetGameBoard
export const onResetTimer = creators.onResetTimer
export const finita = creators.finita
export const stopTimer = creators.stopTimer

export const _onMoveBlock = creators.onMoveBlock

export const onMoveBlock = (blockPosition) => (dispatch, getState) => {
  const state = getState()
  const isTimerOn = getIsTimerOn(state)

  if (!isTimerOn) {
    dispatch(onResetTimer())
  }

  dispatch(_onMoveBlock(blockPosition))

  dispatch(_checkResults())
}

const _checkResults = () => (dispatch, getState) => {
  const state = getState()
  const board = getGameBoard(state)

  const sequence = [].concat.apply([], board)
  const sortedSequence = sequence
    .slice()
    .sort((a, b) => a - b)
    .slice(1)
    .concat([''])

  const isSorted = sequence.every((value, index) => value === sortedSequence[index])

  if (isSorted) {
    dispatch(finita())
    dispatch(stopTimer())
  }
}
