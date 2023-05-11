import { gql } from "@apollo/client"

export const GET_POST_D = gql`
query MyQuery($slug: String = "hello-world") {
    postBy(slug: $slug) {
        link
        title
        slug
        excerpt
        uri
    }
  }`