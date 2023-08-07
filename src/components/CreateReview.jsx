import { Formik } from "formik";
import * as yup from 'yup'; 

import ReviewForm from "./ReviewForm";
import useReview from "../hooks/useReview";
import { useNavigate } from "react-router-native";

const initialValues = {
    ownerName: '',
    repositoryName: '',
    rating: '',
    text: ''
}

const validationSchema = yup.object().shape({
    ownerName: yup
        .string()
        .required('Repository owner name is required!'),
    repositoryName: yup
        .string()
        .required('Repository name is required!'),
    rating: yup
        .number()
        .min(0)
        .max(100)
        .required('Rating is required!'),
    text: yup
        .string()
})

const CreateReview = () => {
    const [createReview ] = useReview(); 
    const navigate = useNavigate(); 

    const handleSubmit = async ( values ) => {
        const {ownerName, repositoryName, rating, text} = values; 

        try {
            const { review } = await createReview({
                ownerName,
                repositoryName,
                rating: Number(rating),
                text
            })
            navigate(`/${review.createReview.repositoryId}`)

        } catch (error) {
            console.log('ErrorMessage: ', error)
        }
    }

  return (
    <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}>
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit}/>}
    </Formik>
  )
}

export default CreateReview