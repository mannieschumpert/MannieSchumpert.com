import { gql } from 'graphql-request'

export const watchlistQuery = gql`
  query GetWatchlistItems {
    watchListItems(orderBy: dateAdded_DESC) {
      id
      dateAdded
      link
      slug
      title
      content {
        html
      }
      twitter
    }
  }
`

export const latestWatchListItemQuery = gql`
  query GetWatchlistItems {
    watchListItems(orderBy: dateAdded_DESC, first: 1) {
      id
      dateAdded
      link
      slug
      title
      content {
        html
      }
      twitter
    }
  }
`