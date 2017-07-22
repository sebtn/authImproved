import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router'
import {connect} from 'react-redux'

 class Header extends Component {
  
/*----------------------------------------------------*/
  renderLinks = () => {
    const {authenticated} = this.props
    if(authenticated) {
      return(
        <li className="nav-item">
          <Link to='/signout'
            className="btn btn-link">
            sign out
          </Link>
        </li>
      )
    } else  {
      return[
        <li className="nav-item" key={1}>
          <Link to='/signin'
            className="btn btn-link">
            sign in
          </Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link to='/signup'
            className="btn btn-link">
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
