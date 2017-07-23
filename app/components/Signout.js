import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { hashHistory} from 'react-router'


import {signOut} from '../actions/index'

import Header from './Header'

class Signout extends Component {
/*---------------------------------------------------------*/

  componentWillUpdate = (nextProps) => {
    if(!nextProps.authenticated) {
      return hashHistory.push('/')
    }
  }

  componentWillMount = () => {
   return this.props.signOut()
  }

/*---------------------------------------------------------*/
  render() {
    return (
      <div className="out-container">
        <h3 className="title">Come back soon...</h3>
      </div>
    )
  }
}

/*---------------------------------------------------------*/
let  mapStateToProps = (state) => {
  return {
    authenticated: state.auth.authenticated 
  }
}

export default connect(mapStateToProps, {signOut})(Signout)