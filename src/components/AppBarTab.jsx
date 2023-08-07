import { Text, StyleSheet, View } from "react-native"
import { Link } from "react-router-native"
import { useApolloClient, useQuery } from "@apollo/client"

import { GET_USER } from "../graphql/queries"
import theme from "../theme"
import { useAuthStorage } from "../hooks/useAuthStorage"

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    height: 75
  },
  tab: {
    padding: theme.padding.tab
  },
  tabText: {
    fontSize: theme.fontSizes.tab,
    color: theme.colors.tabTextColor,
    fontWeight: theme.fontWeights.tab,
  }
})

const AppBarTab = () => {
  const apolloClient = useApolloClient(); 
  const authStorage = useAuthStorage(); 

  const { data } = useQuery(GET_USER, {
    fetchPolicy: 'cache-and-network',
  });

  console.log('data', data)

  const handleSignOut = async () => {
    await authStorage.removeAccessToken(); 
    apolloClient.resetStore(); 
  }

  return (
    <View style={styles.bar}>
      <Link to='/' style={styles.tab}>
        <Text style={styles.tabText}>Repositories</Text>
      </Link>
      {data?.me && 
        <Link to='/create-review' style={styles.tab}>
          <Text style={styles.tabText}>Create Review</Text>
        </Link>
      }
      {data?.me ? 
        <Link to='/sign-in' style={styles.tab} onPress={handleSignOut}>
          <Text style={styles.tabText}>Sign Out</Text>
        </Link> :
        <Link to='/sign-in' style={styles.tab}>
          <Text style={styles.tabText}>Sign In</Text>
        </Link>
      }
    </View>
    
  )
}

export default AppBarTab