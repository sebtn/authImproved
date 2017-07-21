import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/index'

export let configure = ( initialState = {} ) => { 

/*------------------------------------------------------*/
	/*Middleware = add arg redux.compose*/

  // const createMiddleware = applyMiddleware(thunk)(createStore)
  // const devExtension = compose(window.devToolsExtension ? window.devToolsExtension() : f => f )
  let store = createStore(rootReducer, initialState,
    compose(applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))
	return store
}

// let store = require('./store/configureStore').configure()
