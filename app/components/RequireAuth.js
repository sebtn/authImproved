import React, {Component} from 'react'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'

/*Higher order component function*/
export default function (ComposedComponent) {
  
  class Auth extends Component {
/*--------------------------------------------------*/
  componentWillMount = () => {
    if (!this.props.authenticated) {
      return hashHistory.push('/')
    }
  }

/*--------------------------------------------------*/
  componentWillUpdate = (nextProps) => {
    if(!nextProps.authenticated) {
      return hashHistory.push('/')
    }
  }
  
/*--------------------------------------------------*/
  render(){
    return <ComposedComponent {...this.props} />
  }
}

/*--------------------------------------------------*/
  let mapStateToProps = (state) => {
    return {
      authenticated: state.auth.authenticated
    }
  }

  return connect(mapStateToProps)(Auth)

}
