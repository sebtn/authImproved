import axios from 'axios'
import {hashHistory} from 'react-router'
import { SubmissionError } from 'redux-form'

/*--------------------------------------------------------------*/
export let login = (email, password) => {
  return {
    type: "AUTH_USER",
    email,
    password,
  }
}

/*--------------------------------------------------------------*/
export let authError = (error) => {
  return {
    type: "AUTH_ERROR",
    payload: error
  }
}

/*--------------------------------------------------------------*/
export let signOut = (authenticated) => {
  localStorage.removeItem('token')
  return {
    type: "NON_AUTH_USER",
    payload: false
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
        console.log('sign-in error', error)
        throw new SubmissionError(error.validationErrors)        
      } else {
        dispatch( authError('See me? oops bad login info') )
        console.log('Other communication error')
      }
    })
}

/*--------------------------------------------------------------*/
/*Async signing*/
export let signupUser = (values, dispatch, props) => { 
// combination redux form and redux thunk made 
// separate refs to props and values
  const postUrl = 'http://localhost:3090'
  return axios.post(`${postUrl}/signup`, values)
    .then(res => {
      if(res.data.error) { 
        throw new SubmissionError(res.data.error)
      }
      dispatch( login() ) 
      localStorage.setItem('token', res.data.token)
      hashHistory.push('/feature')
    })
    .catch(res =>  {
      // if(error.validationErrors) {
      //   console.log('sign-up error', error)
      //   throw new SubmissionError(error.validationErrors)        
      // } 
        dispatch( authError(res.error) )
        // console.log('Other communication error')
    })
}