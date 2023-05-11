import { gql } from "@apollo/client";

export const GET_ALL_POSTS = gql`
query MyQuery {
    posts {
      nodes {
        link
        title
        slug
        excerpt
      }
    }
  }
`