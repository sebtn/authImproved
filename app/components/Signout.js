import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {signOut} from '../actions/index'

import Header from './Header'

class Signout extends Component {

  componentWillMount = () => {
   this.props.signOut()
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

export default connect(null, {signOut})(Signout)