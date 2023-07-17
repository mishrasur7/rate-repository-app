import { Text, StyleSheet, View } from "react-native"
import theme from "../theme"
import { Link } from "react-router-native"

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
  },
  tab: {
    padding: 10
  },
  tabText: {
    fontSize: theme.fontSizes.tab,
    color: theme.colors.tabTextColor,
    fontWeight: theme.fontWeights.tab,
  }
})

const AppBarTab = () => {
  return (
    <View style={styles.bar}>
      <Link to='/' style={styles.tab}>
        <Text style={styles.tabText}>Repositories</Text>
      </Link>
      <Link to='/sign-in' style={styles.tab}>
        <Text style={styles.tabText}>Sign in</Text>
      </Link>
    </View>
    
  )
}

export default AppBarTab