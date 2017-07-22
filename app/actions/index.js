import axios from 'axios'
import {hashHistory, SubmissionError} from 'react-router'

/*--------------------------------------------------------------*/
export let login = (email, password) => {
  return {
    type: "AUTH_USER",
    email,
    password,
  }
}

/*--------------------------------------------------------------*/
export let authError = (err) => {
  return {
    type: "AUTH_ERROR",
    payload: err
  }
}
/*--------------------------------------------------------------*/
export let signOut = (authenticated) => {
  localStorage.removeItem('token')
  return {
    type: "NON_AUTH_ERROR",
    authenticated: !authenticated
  }
}

/*--------------------------------------------------------------*/
/*Async validation*/
export let signinUser = (values, dispatch, props) => { 
// combination redux form and redux thunk made 
// separate refs to props and values
  const postUrl = 'http://localhost:3090'
  return axios.post(`${postUrl}/signin`, values)
    .then(res => {
      if(res.data.error) { 
        throw new SubmissionError(res.data.error)
      }
      dispatch( login() ) 
      localStorage.setItem('token', res.data.token)
      hashHistory.push('/feature')
    })
    .catch((error) =>  {
      if(error.validationErrors) {
        console.log('signup error', error)
        throw new SubmissionError(error.validationErrors)        
      } else {
        dispatch( authError('See me? oops bad login info') )
        console.log('Other communication error')
      }
    })
}