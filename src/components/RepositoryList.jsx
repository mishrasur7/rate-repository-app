import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import {useNavigate, } from 'react-router-native'; 

import { RepositoryItem } from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import OrderingSelection from './SelectOrder'
import { useState } from 'react';
import SearchBar from './SearchBar';

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

export const RepositoryListContainer = ({ repositories, navigate, onPress, searchKeyword, onChangeSearch }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <>
    <SearchBar searchKeyword={searchKeyword} onChangeSearch={onChangeSearch}/>
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => <PressableRepo item={item} navigate={navigate}/>}
      keyExtractor={item => item.id}
      ListHeaderComponent={<OrderingSelection onPress={onPress}/>}
    />
    </>
  );
}

const RepositoryList = () => {
  const[ordering, setOrdering] = useState({
    orderDirection: 'DESC',
    orderBy: 'CREATED_AT'
  })
  const[searchKeyword, setSearchKeyword] = useState(''); 
  const onChangeSearch = query => setSearchKeyword(query); 

  const {orderDirection, orderBy} = ordering; 

  const onPress = (ordering) => setOrdering(ordering); 

  const { repositories} = useRepositories(orderDirection, orderBy, searchKeyword);

  const navigate = useNavigate(); 

  return (
    <RepositoryListContainer 
    repositories={repositories} 
    navigate={navigate} onPress={onPress}
    searchKeyword={searchKeyword}
    onChangeSearch={onChangeSearch}/>
  )
};

export default RepositoryList;