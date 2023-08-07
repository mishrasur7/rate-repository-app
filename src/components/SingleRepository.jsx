import React from 'react'
import { FlatList } from 'react-native'
import { useParams } from 'react-router-native'

import useRepository from '../hooks/useRepository';
import RepositoryInfo from './RepositoryInfo';
import ReviewItem from './ReviewItem';

const SingleRepository = () => {
    const { id } = useParams(); 

    const { repository, loading } = useRepository(id);

    const reviews = repository?.reviews.edges

    return (
      <FlatList
        data={reviews}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      />
    );
}

export default SingleRepository