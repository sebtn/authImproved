import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router'
import {connect} from 'react-redux'

 class Header extends Component {
  
/*----------------------------------------------------*/
  renderLinks = () => {
    if(this.props.authenticated) {
      return(
        <li className="nav-item">
          <Link to='/signout'>
            sign out
          </Link>
        </li>
      )
    } else {
      return[
        <li className="nav-item" key={1}>
          <Link to='/signin'>
            sign in
          </Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link to='/signup'>
            sign up
          </Link>
        </li>
      ]
    }
  }

  /*----------------------------------------------------*/
  render() {
    return (
      <div className="nav-container">
        <nav>
          <li className="nav-item">
            Redux Auth
          </li>          
          {this.renderLinks()}
        </nav>
      </div>
    )
  }
}

/*------------------------------------------------*/
function mapStateToProps (state) {
  return {
    authenticated: state.auth.authenticated 
  }
}

export default connect(mapStateToProps)(Header)
