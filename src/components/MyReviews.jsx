import { useQuery } from "@apollo/client";
import { FlatList } from "react-native";

import { GET_USER } from "../graphql/queries";
import ReviewItem from "./ReviewItem";

const MyReviews = () => {
    const includeReviews = true; 

    const { data } = useQuery(GET_USER, {
        fetchPolicy: 'cache-and-network',
        variables: {
            includeReviews
        }
    })

    const reviews = data?.me.reviews.edges; 

    return (
        <FlatList 
            data={reviews}
            renderItem={({item}) => <ReviewItem review={item}/>}
            keyExtractor={({id}) => id}
        />
    )
}

export default MyReviews; 