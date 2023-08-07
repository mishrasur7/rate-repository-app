import { View, Text, StyleSheet } from "react-native"
import { format } from 'date-fns'; 

import theme from '../theme'

const styles = StyleSheet.create({
    container: {
        padding: 20,
        display: 'flex',
        flexDirection: 'row',
        columnGap: 70
    },
    rating: {
        width: 60,
        height: 60,
        borderRadius: "50%",
        borderWidth: 4,
        borderColor: theme.colors.button,
        justifyContent: "center",
        alignItems: "center",
    },
    ratingNumber: {
        color: theme.colors.button,
        fontWeight: 'bold',
        fontSize: 20
    },
    detailSection: {
        flexDirection: 'column',
        rowGap: 20,
    },
    fullName: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 10
    },
    date: {
        fontWeight: '300'
    }, 
})

const ReviewItem = ({ review }) => {

    if(!review) {
      return null
    }

    const date = format(new Date(review.node.createdAt), 'dd-MM-yyyy')
  
    return (
      <View style={styles.container}>
        <View style={styles.rating}>
            <Text style={styles.ratingNumber}>{review.node.rating}</Text>
        </View>
        <View style={styles.detailSection}>
            <View>
                <Text style={styles.fullName}>{review.node.user.username}</Text>
                <Text style={styles.date}>{date}</Text>
            </View>
            <View>
                <Text>{review.node.text}</Text>
            </View>
        </View>
      </View>
    )
  }

  export default ReviewItem