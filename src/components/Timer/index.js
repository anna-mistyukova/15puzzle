import React, { Component } from 'react'
import moment from 'moment'
import './component_style.css'

class Timer extends Component {
  constructor () {
    super()

    this.state = {
      time: null,
      start: null,
      isOn: false,
      isValid: false
    }

    this.stopTimer = this.stopTimer.bind(this)
    this.startTimer = this.startTimer.bind(this)
    this.updateTimer = this.updateTimer.bind(this)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  componentDidUpdate (prevProps) {
    const { isOn, isValid } = this.props

    if (isOn && !this.state.isOn) {
      this.startTimer()
    }

    if ((!isOn && this.state.isOn) || (!isValid && this.state.isValid)) {
      this.stopTimer()
    }
  }

  stopTimer () {
    this.setState({
      time: null,
      start: null,
      isOn: false,
      isValid: false
    })
  }

  startTimer () {
    this.setState({
      start: moment(),
      isOn: true
    })

    this.timer = setInterval(() => this.updateTimer(), 100)
  }

  updateTimer () {
    this.setState({
      time: moment().diff(this.state.start)
    })
  }

  render () {
    const { time } = this.state

    return (
      <div className='timer'>
        { time ? moment.utc(time).format('HH:mm:ss') : '00:00:00' }
      </div>
    )
  }
}

export default Timer
