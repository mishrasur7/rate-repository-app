import { Linking } from "react-native";
import { Pressable, Text, View, StyleSheet } from "react-native";

import { RepositoryItem } from "./RepositoryItem";

const styles = StyleSheet.create({
  button: {
      marginTop: 8,
      marginLeft: 120,
      padding: 10,
      flexDirection: 'row',
      justifyContent: 'center',
      borderRadius: 8,
      backgroundColor: 'black',
      width: 200,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

const RepositoryInfo = ({ repository }) => {

    const openGithub = () => {
      return Linking.openURL(repository.url); 
  }
  
  return (
    <View>
        <RepositoryItem item={repository}/>
        <Pressable onPress={openGithub} style={styles.button}>
            <Text style={styles.text}>Open in Github</Text>
        </Pressable>
    </View>
  )
  }

  export default RepositoryInfo; 