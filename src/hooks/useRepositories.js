import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (orderDirection, orderBy, searchKeyword) => {
  const [repositories, setRepositories] = useState();

  const {data, loading} = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: {
      orderDirection,
      orderBy,
      searchKeyword
    }
  })

  useEffect(() => {
    if(data) {
      setRepositories(data.repositories)
    }
  }, [data]);

  return { repositories, loading };
};

export default useRepositories;