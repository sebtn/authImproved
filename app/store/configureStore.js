// import {} from  './../reducers/index'
let redux = require('redux')

export let configure = () => { 
/*------------------------------------------------------*/
	/*Combine reducers*/
	let reducer = redux.combineReducers({

	})

/*------------------------------------------------------*/
	/*Middleware = add arg redux.compose*/
 let store = redux.createStore(reducer, redux.compose(
		window.devToolsExtension ? window.devToolsExtension() : f => f 
	))

	return store
}
