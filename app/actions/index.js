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
export let signinUser = (values, dispatch, props) => { 
// combination redux form and redux thunk made 
// separate refs to props and values
  const postUrl = 'http://localhost:3090'
  return axios.post(`${postUrl}/signin`, values)
    .then(res => {
      if(res.data.errors) { 
        throw new SubmissionError(response.data.errors)
      }
      dispatch( login() ) 
      localStorage.setItem('token', res.data.token)
      hashHistory.push('/feature')
    })
    .catch(errors =>  {
      console.log('signup error', errors)
      throw new SubmissionError(errors.errors || { _error: 'Sign up failed!!' })
    })
}