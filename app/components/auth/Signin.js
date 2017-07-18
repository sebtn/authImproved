import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Field, reduxForm} from 'redux-form'
import {Link, hashHistory} from 'react-router'

 class FormAuth extends Component {
  render() {
    const { handleSubmit, pristine, reset, submitting, onSubmit } = this.props    
    return (
      <div className="wraper-container">
        <div className="form-container">
          <form action="">
            <div >
              <label>Email</label>
              <Field
                name="email"                  
                placeholder="Type a valid email"
                component={renderInput}         
                type="text"
                />                     
            </div> 
            <div >
              <label>Password</label>
              <Field
                name="password"                  
                placeholder="Type a valid password"
                component={renderInput}         
                type="text"
                />                     
            </div>
            <button type="submit" className="btn btn-primary" >Submit</button>
            <Link to="/" className="btn btn-link b1-button">Cancel</Link>
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
    <div>
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
    if (!values.title) {
      errors.title = 'Required'
    }
    if (!values.categories) { 
      errors.categories = 'Required' 
    }     
    if (!values.content) { 
      errors.content = 'Required' 
    } 
    return errors
  }

/*---------------------------------------------------------------------*/
export default reduxForm({
  form: 'FormAuth',
  validate
}, null )(FormAuth)
