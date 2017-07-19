import axios from 'axios'

const postUrl = 'localhost:3090/#/signin'

export let signinUser = (email, password) => {
// export let signinUser = (props) => {
  // submit email/pw to server
  // if rq good -> 
  // udpate state auth user
  // save jwt token so req can be followup
  // redirect '/feature'
  // if (err) {return console.log(err)}
  // return (dispatch) => {
    const request = axios.post(postUrl, {email, password})
  // }
  return {
    type: "AUTH_USER",
    payload: request
  }
}