import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/mutations";

const useReview = () => {
    const [mutate, result] = useMutation(CREATE_REVIEW);

    const createReview = async ({ownerName, rating, repositoryName, text}) => {
        return await mutate({
            variables: {ownerName, rating, repositoryName, text}
        })
    }

    return [createReview, result]; 
}

export default useReview; 