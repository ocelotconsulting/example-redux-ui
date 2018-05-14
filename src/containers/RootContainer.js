import React from 'react'
import T from 'prop-types'
import {connect} from 'react-redux'
import setMessageLater from '../actions/setMessageLater'

export const Root = ({message}) =>
  <div className={`message ${message || ''}`}>{message}</div>

Root.displayName = 'Root'

Root.propTypes = {
  message: T.string.isRequired
}

export class RootWrapper extends React.Component {
  componentWillMount () {
    this.props.onEnter()
  }
  render () {
    return <Root {...this.props} />
  }
}

RootWrapper.propTypes = {
  onEnter: T.func.isRequired
}

RootWrapper.displayName = 'Root.componentWillMount'

export const mapStateToProps = ({message}) => ({
  message: message.value
})

export const mapDispatchToProps = dispatch => ({
  onEnter: () => {
    dispatch(setMessageLater('success', 2500))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(RootWrapper)
