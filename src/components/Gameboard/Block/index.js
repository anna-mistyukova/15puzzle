import React, { PureComponent } from 'react'
import './component_style.css'

class Block extends PureComponent {
  constructor (props) {
    super(props)

    this.x = props.x
    this.y = props.y

    this.onClick = this.onClick.bind(this)
  }

  onClick () {
    const { isEnabled, onClick } = this.props

    if (!isEnabled) {
      return
    }

    onClick({ x: this.x, y: this.y })
  }

  render () {
    const { isEnabled, isEmpty, value } = this.props

    const classes = isEnabled
      ? 'gameboard__block clickable-block'
      : isEmpty
        ? 'gameboard__block empty-block'
        : 'gameboard__block'

    return <div className={classes} onClick={this.onClick}>
      <div className='content'>
        { value }
      </div>
    </div>
  }
}

export default Block
