import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
      

class Feature extends Component {
  render() {
    return (
      <div className="feature-container">
        <h3 className="title-feature">I'm feature</h3>
      </div>
    )
  }
}

export default connect()(Feature)