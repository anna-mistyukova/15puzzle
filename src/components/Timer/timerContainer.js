import { connect } from 'react-redux'
import Timer from './'
import { getIsTimerOn, getIsTimerValid } from '../../selectors'

const mapStateToProps = (state) => ({
  isOn: getIsTimerOn(state),
  isValid: getIsTimerValid(state)
})

export default connect(mapStateToProps)(Timer)
