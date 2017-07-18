import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router'
import {connect} from 'react-redux'

 class Header extends Component {
  render() {
    return (
      <div className="nav-container">
        <nav>
          <li className="nav-item">
              Sign-In
          </li>
        </nav>
      </div>
    )
  }
}

export default connect()(Header)
