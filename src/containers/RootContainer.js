import React from 'react'
import T from 'prop-types'
import {connect} from 'react-redux'

export const Root = ({message}) =>
  <div className='message'>{message}</div>


Root.displayName = 'Root'

Root.propTypes = {
  message: T.string.isRequired
}

export const mapStateToProps = ({message}) => ({
  message: message.value
})

export const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Root)