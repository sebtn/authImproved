import React from 'react'
import { hashHistory, Route, Router } from 'react-router'

import Main from './../components/Main'
import Signin from './../components/auth/Signin'

export default (
  <Router history={hashHistory} > 
    <Route path='/' component={Main}>
      <Route path='/signin'component={Signin} />
    </Route>
  </Router>
)