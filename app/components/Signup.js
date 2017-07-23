import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Field, reduxForm} from 'redux-form'
import {Link, SubmissionError} from 'react-router'

import {signupUser} from '../actions/index'      


class Signup extends Component {

/*----------------------------------------------------------*/
  handleFormSubmit = (email, password) => {
    return signupUser(email, password)
  }

/*----------------------------------------------------------*/
  renderAlert = () => {
    if(this.props.errorMessage) {
      return (
        <strong className="alert alert-danger" 
          role="alert">
          <span>no good!{this.props.errorMessage}</span>
        </strong> 
      )
    }
  }

/*----------------------------------------------------------*/
render() {
    const { handleSubmit, 
      submitting, 
      onSubmit, 
      submit
      } = this.props    
    return (
      <div className="wraper-container">
        <div className="form-container">
          <form onSubmit={ handleSubmit(this.handleFormSubmit)}>
            <div className="input-wrapper">
              <label>Email</label>
              <Field
                name="email"                  
                placeholder="Type a valid email"
                component={renderInput}         
                type="text"
                />                     
            </div> 
            <div className="input-wrapper">
              <label>Password</label>
              <Field
                name="password"                  
                placeholder="Type a valid password"
                component={renderInput}         
                type="password"
                />                     
            </div>            
            <div className="input-wrapper">
              <label>Confirm Password</label>
              <Field
                name="confirm"                  
                placeholder="Type a valid password"
                component={renderInput}         
                type="password"
                />                     
            </div>
            <div>
              {this.renderAlert()}
            </div>
            <button type="submit" 
              className="btn btn-primary button">
              Sign-Up
            </button>
            <Link to="/" 
              className="btn btn-link button">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    )
  }
}

/*---------------------------------------------------------------------*/
// Define stateless component to render input and errors
const renderInput  = ({
  placeholder,
  input,
  label,
  type,
  meta: { touched, error }
}) => (
  <div>
    <div className="alert-wrapper">
      { touched &&
        (( error &&      
          <strong className="alert alert-danger" 
            role="alert">
            <span>{error}</span>
          </strong> 
         ))
      }
    </div>
    <label>{label}</label>
    <input {...input} 
      placeholder={placeholder} 
      type={type} />
  </div>
)

/*---------------------------------------------------------------------*/
  const validate = values => {
    const errors = {}
    if (!values.email) {
      errors.email = 'Required'
    }
    if (!values.password ) { 
      errors.password = 'Required' 
    }     
    if (values.password !== values.confirm ) { 
      errors.password = "Password and confirm don't match"
      errors.confirm  = "Password and confirm don't match" 
    }     
    return errors
  }

/*---------------------------------------------------------------------*/
  // this relates to the main reducer
  let mapStateToProps = (state) => {
    return { 
      errorMessage: state.auth.error
    }
  }


export default reduxForm({
  form: 'Signup', 
  validate, 
  onSubmit: signupUser
}, mapStateToProps)(Signup)