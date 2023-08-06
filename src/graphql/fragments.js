import { gql } from "@apollo/client";

export const REPOSITORY_BASE_DETAILS = gql`
  fragment RepositoryBaseDetails on Repository {
    id,
    name,
    ownerName,
    createdAt,
    fullName,
    reviewCount,
    ratingAverage,
    forksCount,
    stargazersCount,
    description,
    language,
    ownerAvatarUrl,
  }
`;