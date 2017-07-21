export let authReducer = ( state = {}, action ) => {
  switch(action.type) {
    case "AUTH_USER":
      return {  ...state, authenticated: true } 
    case "NON_AUTH_USER":
      return {  ...state, authenticated: false }     
      case "AUTH_ERROR":
      return {  ...state, error: payload.error } 
    default:
      return state      
  }
}