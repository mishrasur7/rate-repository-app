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

const SignupForm = ( { onSubmit }) => {
  return (
    <View style={styles.container}>
        <FormikTextInput name="username" placeholder="Username" style={styles.input}/>
        <FormikTextInput name="password" placeholder="Password" style={styles.input} secureTextEntry={true}/>
        <FormikTextInput name="passwordConfirmation" placeholder="Password confirmation" style={styles.input} secureTextEntry={true}/>
        <Pressable onPress={onSubmit}>
            <Text style={styles.button}>Sign up</Text>
        </Pressable>
    </View>
  )
}

export default SignupForm; 