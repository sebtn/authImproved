import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import Header from './Header'

class Main extends Component {
  render() {
    return (
      <div>
        <h3 className="title">you can always see me</h3>
        <Header />
         {this.props.children}
      </div>
    )
  }
}

export default connect()(Main)