import React from 'react'
// import T from 'prop-types'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import {connect} from 'react-redux'
import RootContainer from './RootContainer'

export const App = ({onEnter}) =>
  <Router>
    <div>
      <Route path='/' component={RootContainer} />
    </div>
  </Router>

App.displayName = 'App'

App.propTypes = {
}

export const mapStateToProps = () => ({})

export const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(App)
