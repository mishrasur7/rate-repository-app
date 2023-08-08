import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutations";

const useSignup = () => {
    const [mutate, result] = useMutation(CREATE_USER); 

    const signUp = async ({ username, password }) => {
        const { user } = await mutate({
            variables: {username, password}
        })
        return user; 
    }

    return [signUp, result]; 
}

export default useSignup; 