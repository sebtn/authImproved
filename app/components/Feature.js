import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {fetchMessage} from '../actions/index'
      

class Feature extends Component {
/*------------------------------------------------------*/
  componentWillMount = () => {
    this.props.fetchMessage()
  }

/*------------------------------------------------------*/
  render() {
    return (
      <div className="feature-container">
        <h3 className="title-feature">I'm feature</h3>
        <h3 className="message">{this.props.message}</h3>
      </div>
    )
  }
}

/*---------------------------------------------------------------------*/
// this relates to the main reducer
let mapStateToProps = (state) => {
  return { 
    message: state.auth.message
  }
}

export default connect(mapStateToProps , {fetchMessage})(Feature)