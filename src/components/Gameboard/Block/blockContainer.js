import { connect } from 'react-redux'
import Block from './'
import { getBlockValue, getIsBlockEmpty, getIsBlockEnabled } from '../../../selectors'
import { onMoveBlock } from '../../../actions/'

const mapStateToProps = (state, props) => ({
  value: getBlockValue(state, props),
  isEmpty: getIsBlockEmpty(state, props),
  isEnabled: getIsBlockEnabled(state, props)
})

const mapDispatchToProps = (dispatch) => ({
  onClick: (blockPosition) => dispatch(onMoveBlock(blockPosition))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Block)
