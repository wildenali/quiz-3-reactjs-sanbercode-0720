import React from 'react'
import { LoginProvider } from './LoginContext'
import LoginForm from './LoginForm'

const Login = () => {
  return (
    <LoginProvider>
        <LoginForm></LoginForm>
    </LoginProvider>
  )
}

export default Login