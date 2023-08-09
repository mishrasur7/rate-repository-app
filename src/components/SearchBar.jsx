import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';

const styles = StyleSheet.create({
    searchBar: {
        padding: 15
    }
})

const SearchBar = ({ searchKeyword, onChangeSearch}) => {

  return (
    <View style={styles.searchBar}>
    <Searchbar
      placeholder="Search repositories"
      onChangeText={onChangeSearch}
      value={searchKeyword}
    />
    </View>
  );
};

export default SearchBar;
