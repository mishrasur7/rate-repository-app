import { Alert, View } from "react-native"; 
import { Button } from "react-native-paper"; 
import { StyleSheet } from "react-native"; 
import { useNavigate } from "react-router-native";

import theme from "../theme"; 
import useDeleteReview from '../hooks/useDeleteReview'; 

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        flexDirection: 'row',
        columnGap: 50
    }
})

const ReviewButtons = ({ review }) => {
    const id = review.node.id; 
    const navigate = useNavigate();
    const [deleteReview] = useDeleteReview(); 

    console.log('review from buttons', review)

    const navigateToSingleRepo = () => {
        navigate(`/${review.node.repository.id}`)
    }

    const deleteCurrentReview = () => {
        Alert.alert('Delete Review', 'Are you sure you want to delete this review?', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => deleteReview(id)},
          ]);
    }

    return(
        <View style={styles.button}>
            <Button 
                mode="contained" 
                onPress={navigateToSingleRepo}
                buttonColor={theme.colors.button}
                textColor='white'>
                View repository
            </Button>
            <Button 
                mode="contained" 
                buttonColor="red"
                textColor="white"
                onPress={deleteCurrentReview}>
                Delete review
            </Button>
        </View>
    )
}

export default ReviewButtons