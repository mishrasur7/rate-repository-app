import { Text, View, StyleSheet, Image } from "react-native"
import { StatusBar } from 'expo-status-bar';

export const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image 
        source={{uri: item.ownerAvatarUrl}}
        style={styles.logo}
      />
      <Text style={styles.item}>Full Name: {item.fullName}</Text>
      <Text style={styles.item}>Description: {item.description}</Text>
      <Text style={styles.item}>Language: {item.language}</Text>
      <Text style={styles.item}>Stars: {item.stargazersCount}</Text>
      <Text style={styles.item}>Forks: {item.forksCount}</Text>
      <Text style={styles.item}>Reviews: {item.reviewCount}</Text>
      <Text style={styles.item}>Ratings: {item.ratingAverage}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        fontSize: 20
    },
    logo: {
      width: 75,
      height: 75,
    },
})
