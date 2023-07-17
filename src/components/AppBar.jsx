import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import AppBarTab from './AppBarTab'
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: Constants.statusBarHeight,
    paddingLeft: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackgroundColor,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
       <AppBarTab/>
      </ScrollView>
    </View>
  )
};

export default AppBar;