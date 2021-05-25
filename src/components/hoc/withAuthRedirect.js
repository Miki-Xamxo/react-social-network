import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

export const withRedirect = (Component) => {
  class RedirectComponent extends React.Component{
    render(){
      if(!this.props.isAuth) return <Redirect to='/login' />
      return <Component {...this.props} />
    }
  }

  let mapStateToPropsForRedirect = (state) => {
    return{
      isAuth: state.auth.isAuth
    }
  }

  let ConnectRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

  return ConnectRedirectComponent
}