import * as types from './types'

export const onMoveBlock = (blockPosition) => ({
  type: types.MOVE_BLOCK,
  payload: {
    blockPosition
  }
})

export const onSetGameBoard = (values) => ({
  type: types.SET_GAMEBOARD,
  payload: {
    values
  }
})

export const onResetTimer = () => ({
  type: types.RESET_TIMER
})

export const finita = () => ({
  type: types.FINITA
})

export const stopTimer = () => ({
  type: types.STOP_TIMER
})
