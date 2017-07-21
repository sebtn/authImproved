import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import Header from './Header'

class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <h3 className="title">you can always see me</h3>
        <div className="row sub-container">
          <div className="col-md-1 col-lg-3"></div>
          <div className="col-md-10 col-lg-6">
            <Header />
            {this.props.children}
          </div>
          <div className="col-md-1 col-lg-3"></div>
        </div>
      </div>
    )
  }
}

export default connect()(Main)