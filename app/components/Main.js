import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import Header from './Header'

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
          <h1 className="title">Hi from Main no hook yet!</h1>
         {this.props.children}
      </div>
    )
  }
}

export default connect()(Main)