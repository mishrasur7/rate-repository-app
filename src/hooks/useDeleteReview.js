import { useMutation } from "@apollo/client";

import { DELETE_REVIEW } from "../graphql/mutations";
import { GET_USER } from "../graphql/queries";

const useDeleteReview = () => {
    const [mutate, result] = useMutation(DELETE_REVIEW); 

    const deleteReview = async (reviewId) => {
        return await mutate({
            variables: {reviewId},
            refetchQueries: [{
                query: GET_USER,
                variables: {includeReviews: true}
            }]
        })
    }

    return [deleteReview, result]; 
}

export default useDeleteReview; 