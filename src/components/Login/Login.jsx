import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required } from '../../utils/validators/validator'
import { Input } from '../common/FormsControls/FormsControl'
import { connect } from 'react-redux'
import { login } from '../../redux/auth-reducer'
import { Redirect } from 'react-router'

import s from '../common/FormsControls/FormsControl.module.css'


const LoginForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
      <div>
        <Field name='email' placeholder='email' component={Input} validate={[required]}/>
      </div>
      <div>
        <Field name='password' placeholder='Password' type='password' component={Input} validate={[required]}/>
      </div>
      <div>
        <Field name='rememberMe' component={Input} type="checkbox"/> remember me
      </div>
      {
        props.error && <div className={s.formSummaryError}>
          {props.error}
      </div>
      }
      <div>
        <button>Login</button>
      </div>
    </form>
}

const LoginReduxForm =  reduxForm({
  form: 'login'
})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }

  if(props.isAuth) return <Redirect to='/profile'/>
  return <div>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit} />
  </div>
}

const mapStateToProps = (state) => {
  return {  
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, {login})(Login)