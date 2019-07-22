import { connect } from 'react-redux'
import * as selectors from '../../selectors'
import { onSetGameBoard } from '../../actions/index.js'
import GameBoard from './'

const mapStateToProps = (state) => ({
  values: selectors.getGameBoard(state),
  movesCounter: selectors.getMovesCounter(state),
  finita: selectors.getStatus(state)
})

const mapDispatchToProps = (dispatch) => ({
  onSetGameBoard: (values) => dispatch(onSetGameBoard(values))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameBoard)
