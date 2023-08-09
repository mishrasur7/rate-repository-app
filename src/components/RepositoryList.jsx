import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import {useNavigate, } from 'react-router-native'; 

import { RepositoryItem } from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import OrderingSelection from './SelectOrder'
import { useState } from 'react';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const PressableRepo = ( {item, navigate}) => {

  const handlePress = () => {
    navigate(`/${item.id}`)
  }

  return (
    <Pressable onPress={handlePress}>
      <RepositoryItem item={item}/>
    </Pressable>
  )
}

export const RepositoryListContainer = ({ repositories, navigate, onPress }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => <PressableRepo item={item} navigate={navigate}/>}
      keyExtractor={item => item.id}
      ListHeaderComponent={<OrderingSelection onPress={onPress}/>}
    />
  );
}

const RepositoryList = () => {
  const[ordering, setOrdering] = useState({
    orderDirection: 'DESC',
    orderBy: 'CREATED_AT'
  })
  const {orderDirection, orderBy} = ordering; 

  const onPress = (ordering) => setVariables(ordering); 

  const { repositories} = useRepositories(orderDirection, orderBy);

  const navigate = useNavigate(); 

  return (
    <RepositoryListContainer repositories={repositories} navigate={navigate} onPress={onPress}/>
  )
};

export default RepositoryList;