import { Formik } from 'formik'; 
import React from 'react'; 
import * as yup from 'yup'; 
import SignInForm from './SignInForm'; 
import useSignIn from '../hooks/useSignIn';

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
  const [signIn, result] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signIn({ username, password });
      result.data ? console.log('Access token: ', result.data.authenticate.accessToken) : null
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik
      initialValues={initialValues} 
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit}/>}
    </Formik>
  )
}; 

export default SignIn