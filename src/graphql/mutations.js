import { gql } from '@apollo/client';

export const AUTHENTICATE = gql`
    mutation ($credentials: AuthenticateInput!) {
        authenticate(credentials: $credentials) {
        accessToken
        }
    }
`

export const CREATE_REVIEW = gql`
    mutation CreateReview ($ownerName: String! $rating: Int! $repositoryName: String! $text: String) {
        createReview (review: {ownerName: $ownerName rating: $rating repositoryName: $repositoryName text: $text}) {
            repositoryId
        }
    }
`