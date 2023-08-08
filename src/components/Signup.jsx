import { Formik } from "formik";
import * as yup from 'yup'; 
import { useNavigate } from "react-router-native";

import SignupForm from "./SignupForm";
import useSignup from "../hooks/useSignup";

const initialValues = {
    username: '',
    password: '',
    passwordConfirmation: '',
}

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .min(5)
        .max(30)
        .required('Username is required!'),
    password: yup
        .string()
        .min(5)
        .max(30)
        .required('Password is required!'),
    passwordConfirmation: yup
        .string()
        .oneOf([yup.ref('password'), null])
        .required('Password confirmation is required')
})

const Signup = () => {

  const navigate = useNavigate();
    const [signUp, result] = useSignup(); 

    const onSubmit =  async (values) => {
        
        const {username, password} = values; 

        try {
            await signUp({
                username,
                password
            })
            navigate('/')

        } catch (error) {
            console.log('ErrorMessage: ', error)
        }
  }

  return (
    <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignupForm onSubmit={handleSubmit}/>}
    </Formik>
  )
}

export default Signup