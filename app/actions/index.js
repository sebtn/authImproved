import axios from 'axios'

const baseUrl = 'http://localhost:3090/#'

// export let signinUser = ({email, password}) => {
export let signinUser = (props) => {
  // submit email/pw to server
  
  // if rq good -> 
  // udpate state auth user
  // save jwt token so req can be followup
  // redirect '/feature'
  
  // if (err) {return console.log(err)}
  return (dispatch) => {
  // const request = axios.post(`${baseUrl}/signin`, {email, password})
    const request = axios.post(`${baseUrl}/signin`, props)
  //   return axios.post(`${baseUrl}/signin`, {email:email, password:password} )
  //     .then( (res) => {
  //       console.log('response ok', res)
  //       dispatch({type: "AUTH_USER"})
  //     })
  //     .catch( (err) => {
  //       console.log('Error: ', err)
  //     })
  }
  return {
    type: "AUTH_USER",
    payload: request
  }
}