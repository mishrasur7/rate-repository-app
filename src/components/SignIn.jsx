import { Formik } from 'formik'; 
import React from 'react'; 
import * as yup from 'yup'; 
import SignInForm from './SignInForm'; 

const initialValues = {
  username: '',
  password: ''
}; 

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required!'),
  password: yup
    .string()
    .required('Password is required!')
})

const SignIn = () => {
  return (
    <Formik
      initialValues={initialValues} 
      onSubmit={(values) => console.log(values)}
      validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit}/>}
    </Formik>
  )
}; 

export default SignIn