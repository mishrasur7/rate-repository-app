import { useMutation } from "@apollo/client"
import { useApolloClient } from "@apollo/client";

import { AUTHENTICATE } from "../graphql/mutations"
import { useAuthStorage } from "./useAuthStorage";

const useSignIn = () => {
    const [mutate, result] = useMutation(AUTHENTICATE);

    const authStorage = useAuthStorage(); 
    const apolloClient = useApolloClient(); 

    const signIn = async ({ username, password }) => {
        const credentials = { username, password }; 
        const { data } = await mutate({ variables: { credentials }});
        await authStorage.setAccessToken(data.authenticate.accessToken);
        apolloClient.resetStore();
    }

  return [ signIn, result ]; 
}

export default useSignIn