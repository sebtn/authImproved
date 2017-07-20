import React from 'react'
import { hashHistory, Route, Router } from 'react-router'

import Main from './../components/Main'
import Signin from './../components/auth/Signin'
import Feature from './../components/Feature'

export default (
  <Router history={hashHistory} > 
    <Route path='/' component={Main}>
      <Route path='/signin'component={Signin} />
      <Route path='/feature'component={Feature} />
    </Route>
  </Router>
)