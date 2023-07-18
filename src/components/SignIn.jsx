import { Formik } from 'formik'
import React from 'react'
import SignInForm from './SignInForm'

const initialValues = {
  username: '',
  password: ''
}

const SignIn = () => {
  return (
    <Formik initialValues={initialValues} onSubmit={(values) => console.log(values)}>
      <SignInForm />
    </Formik>
  )
}

export default SignIn