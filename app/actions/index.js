import axios from 'axios'

let login = ({email, password}) => {
  return {
    type: "AUTH_USER",
    email,
    password
  }
}

export let signinUser = ({email, password}) => {
// export let signinUser = (props) => {
  // submit email/pw to server
  // if rq good -> 
  // udpate state auth user
  // save jwt token so req can be followup
  // redirect '/feature'
  // if (err) {return console.log(err)}
  // debugger
    const postUrl = 'http://localhost:3090'
    let request = axios.post(`${postUrl}/signin`, {email, password})
    return (dispatch) => {
      return dispatch( login(email, password) )
        .then( res  => {
          console.log('after res processeing here: ' , res)
          // hashHistory.push('/feature')
        })
        .catch( error => {
          console.log(error)
          console.log('FAILED!!!')
        })
  }
  // return {
  //   type: "AUTH_USER",
  //   payload: request
  // }

}