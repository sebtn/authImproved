export let authReducer = ( state = {}, action ) => {
  switch(action.type) {
    case "AUTH_USER":
      return {  ...state, authenticated: true } 
    case "NON_AUTH_USER":
      return {  ...state, authenticated: false } 
    default:
      return state      
  }
}