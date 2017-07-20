import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

import  '././styles/app.scss'
import reducers from './reducers'
import router from './router/index' 

const createMiddleware = applyMiddleware(thunk)(createStore)
const devExtension = compose(window.devToolsExtension ? window.devToolsExtension() : f => f )

'use strict'

ReactDOM.render(
  <Provider store={ createMiddleware(reducers, devExtension) }>
    {router} 
  </Provider>
,document.getElementById('root'))