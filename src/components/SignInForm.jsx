import React from 'react'
import { Pressable, Text, View, StyleSheet } from 'react-native'
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

const SignInForm = () => {
  return (
    <View style={styles.container}>
        <FormikTextInput name="username" placeholder="Username" style={styles.input}/>
        <FormikTextInput name="password" placeholder="Password" secureTextEntry={true} style={styles.input}/>
        <Pressable>
            <Text style={styles.button}>Submit</Text>
        </Pressable>
    </View>
  )
}

export default SignInForm