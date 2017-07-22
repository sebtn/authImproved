import React from 'react'
import { hashHistory, Route, Router } from 'react-router'

import Main from './../components/Main'
import Signin from './../components/auth/Signin'
import Feature from './../components/Feature'
import Signout from './../components/Signout'
import Signup from './../components/Signup'

export default (
  <Router history={hashHistory} > 
    <Route path='/' component={Main}>
      <Route path='/signin'component={Signin} />
      <Route path='/signup'component={Signup} />
      <Route path='/signout'component={Signout} />
      <Route path='/feature'component={Feature} />
    </Route>
  </Router>
)