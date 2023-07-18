import { Text, View, StyleSheet, Image, Button, Pressable } from "react-native"
import theme from "../theme"

const styles = StyleSheet.create({
  container: {
      padding: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  section1: {
    flexDirection: 'row',
  },
  details: {
    paddingLeft: 30,
  },
  fullname: {
    fontSize: 20,
  },
  description: {
    fontSize: 20,
  },
  button: {
    marginTop: 8,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: theme.colors.button,
    width: 90,
  },
  buttonText: {
    color: 'white'
  },
  moreDetails: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    
  },
  data: {
    fontWeight: 'bold',
    paddingBottom: 10
  }
})

export const RepositoryItem = ({ item }) => {

  const formatValues = (value) => {
    return value >= 1000
    ? `${Number.parseFloat(value/1000).toFixed(1)}K`
    : value
  }

  return (
    <View style={styles.container}>
        <View style={styles.section1}>
          <Image 
            source={{uri: item.ownerAvatarUrl}}
            style={styles.image}
          />
          <View style={styles.details}>
            <Text style={styles.fullname}>{item.fullName}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>{item.language}</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.moreDetails}>
          <View>
            <Text style={styles.data}>{formatValues(item.stargazersCount)}</Text>
            <Text>Stars</Text>
          </View>
          <View>
            <Text style={styles.data}>{formatValues(item.forksCount)}</Text>
            <Text>Forks</Text>
          </View>
          <View>
            <Text style={styles.data}>{formatValues(item.reviewCount)}</Text>
            <Text>Reviews</Text>
          </View>
          <View>
            <Text style={styles.data}>{formatValues(item.ratingAverage)}</Text>
            <Text>Ratings</Text>
          </View>
        </View>
    </View>
  )
}
