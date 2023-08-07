import { gql } from '@apollo/client';

import { REPOSITORY_BASE_DETAILS } from './fragments';

export const GET_SINGLE_REPOSITORY = gql`
  ${REPOSITORY_BASE_DETAILS}
  query Repository ($repositoryId: ID!) {
    repository (id: $repositoryId) {
      ...RepositoryBaseDetails
      url
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`

export const GET_REPOSITORIES = gql`
  ${REPOSITORY_BASE_DETAILS}
  query Repositories {
    repositories {
      edges {
        node {
          ...RepositoryBaseDetails
        }
      }
    }
  }
`;

export const GET_USER = gql`
  query Me {
    me {
      id
      username
    }
  }
`
