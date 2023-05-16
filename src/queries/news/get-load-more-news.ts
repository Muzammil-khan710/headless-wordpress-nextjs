import { gql } from "@apollo/client";

export const GET_LOAD_MORE_NEWS  = gql`
query GET_LOAD_MORE_NEWS( $first: Int, $after: String ) {
    posts: posts(first: $first, after: $after) {
      edges {
        node {
          id
          title
          excerpt
          slug
        }
        cursor
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
}`