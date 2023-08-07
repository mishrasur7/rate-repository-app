import React from 'react'
import { Pressable, Text, View, StyleSheet, } from 'react-native'
import FormikTextInput from './FormikTextInput'
import theme from '../theme';

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 16
    },
    input: {
      borderStyle: 'solid',
      borderColor: 'grey',
      borderWidth: 2,
      borderRadius: 7,
      padding: 12,
      marginBottom: 16,
    },
    button: {
      backgroundColor: theme.colors.button,
      padding: 20,
      borderRadius: 7,
      color: 'white',
      textAlign: 'center'
    }
  });

const ReviewForm = ( { onSubmit }) => {
  return (
    <View style={styles.container}>
        <FormikTextInput name="ownerName" placeholder="Repository owner name" style={styles.input}/>
        <FormikTextInput name="repositoryName" placeholder="Repository name" style={styles.input}/>
        <FormikTextInput name="rating" placeholder="Rating between 0 and 100" style={styles.input}/>
        <FormikTextInput name="text" placeholder="Review" style={styles.input} multiline={true}/>
        <Pressable onPress={onSubmit}>
            <Text style={styles.button}>Create a review</Text>
        </Pressable>
    </View>
  )
}

export default ReviewForm; 