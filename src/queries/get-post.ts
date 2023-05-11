import { gql } from "@apollo/client"

export const GET_POST = gql`
query MyQuery {
    posts(where: {title: "The standard Lorem Ipsum passage, used since the 1500s"}) {
        nodes {
        link
        title
        slug
        content
        }
    }
}`