import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import {useNavigate, } from 'react-router-native'; 

import { RepositoryItem } from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

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

export const RepositoryListContainer = ({ repositories, navigate }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => <PressableRepo item={item} navigate={navigate}/>}
      keyExtractor={item => item.id}
    />
  );
}

const RepositoryList = () => {
  const { repositories } = useRepositories();
  const navigate = useNavigate();

  return (
    <RepositoryListContainer repositories={repositories} navigate={navigate}/>
  )
};

export default RepositoryList;