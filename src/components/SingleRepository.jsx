import React from 'react'
import { Linking, View, StyleSheet, Pressable, Text } from 'react-native'
import { useParams } from 'react-router-native'

import useRepository from '../hooks/useRepository';
import { RepositoryItem } from './RepositoryItem';

const styles = StyleSheet.create({
    button: {
        marginTop: 8,
        marginLeft: 120,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: 'black',
        width: 200,
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
  });

const SingleRepository = () => {
    const { id } = useParams(); 

    const { repository, loading } = useRepository(id);

    const openGithub = () => {
        return Linking.openURL(repository.url); 
    }

  return (
    <View>
        <RepositoryItem item={repository}/>
        <Pressable onPress={openGithub} style={styles.button}>
            <Text style={styles.text}>Open in Github</Text>
        </Pressable>
    </View>
  )
}

export default SingleRepository