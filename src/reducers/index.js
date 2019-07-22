import * as types from '../actions/types'

const INITIAL_STATE = {
  values: [],
  isTimerOn: false,
  movesCounter: 0,
  isTimerValid: false,
  emptyBlockPosition: {},
  finita: false
}

function rootReducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.MOVE_BLOCK: return handleBlockMove(state, action)
    case types.SET_GAMEBOARD: return handleGameSet(state, action)
    case types.RESET_TIMER: return handleTimerReset(state)
    case types.FINITA: return handleFinita(state)
    case types.STOP_TIMER: return handleStopTimer(state)
    default:
      return state
  }
}

function handleStopTimer (state) {
  return {
    ...state,
    isTimerOn: false
  }
}

function handleFinita (state) {
  return {
    ...state,
    finita: true
  }
}

function handleTimerReset (state) {
  return {
    ...state,
    isTimerValid: false,
    isTimerOn: true
  }
}

function handleBlockMove (state, action) {
  const { blockPosition: { x, y } } = action.payload
  const blockValue = state.values[y][x]
  const newValues = Array(state.values.length).fill(0).map((val, index) => state.values[index].slice())

  newValues[state.emptyBlockPosition.y][state.emptyBlockPosition.x] = blockValue
  newValues[y][x] = ''

  return {
    ...state,
    values: newValues,
    movesCounter: state.movesCounter + 1,
    emptyBlockPosition: { x, y }
  }
}

function handleGameSet (state, action) {
  const { values } = action.payload
  const emptyBlockRow = values.findIndex(row => row.indexOf('') !== -1)
  const emptyBlockColumn = values[emptyBlockRow].findIndex(item => item === '')

  return {
    ...state,
    values,
    emptyBlockPosition: {
      y: emptyBlockRow,
      x: emptyBlockColumn
    },
    movesCounter: 0,
    isTimerValid: false,
    isTimerOn: false
  }
}

export default rootReducer
