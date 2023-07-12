import { Pressable, Text, StyleSheet } from "react-native"
import theme from "../theme"

const styles = StyleSheet.create({
  tab: {
    fontSize: theme.fontSizes.tab,
    color: theme.colors.tabTextColor,
    fontWeight: theme.fontWeights.tab,
  }
})

const AppBarTab = () => {
  return (
    <Pressable>
        <Text style={styles.tab}>Repositories</Text>
    </Pressable>
  )
}

export default AppBarTab