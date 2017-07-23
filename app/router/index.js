import React from 'react'
import { hashHistory, Route, Router, IndexRoute } from 'react-router'

import Main from './../components/Main'
import Signin from './../components/auth/Signin'
import Feature from './../components/Feature'
import Signout from './../components/Signout'
import Signup from './../components/Signup'
import Welcome from './../components/Welcome'
import RequireAuth from './../components/RequireAuth' //hoc

export default (
  <Router history={hashHistory} > 
    <Route path='/' component={Main}>
      <IndexRoute component={Welcome} />
      <Route path='/signin'component={Signin} />
      <Route path='/signup'component={Signup} />
      <Route path='/signout'component={Signout} />
      <Route path='/feature'component={RequireAuth(Feature)} />
    </Route>
  </Router>
)