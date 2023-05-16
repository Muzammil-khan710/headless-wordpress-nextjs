import { gql } from "@apollo/client";

export const GET_NEWS = gql`
query MyQuery ($first: Int, $after: String) {
    headerMenu: menuItems(where: {location: HCMS_MENU_HEADER, parentId: "0"}) {
        edges {
          node {
            label
            id
            url
            path
          }
        }
      }
      footerMenu: menuItems(where: {location: HCMS_MENU_FOOTER, parentId: "0"}) {
        edges {
          node {
            label
            id
            url
            path
          }
        }
      }
      footer: getFooter {
        copyrightText
        socialLinks {
          iconUrl
          iconName
        }
      }
      posts: posts(first: $first, after: $after) {
        edges {
          node {
            id
            title
            excerpt
            slug
          }
        }
        pageInfo {
          offsetPagination {
            total
          }
          hasNextPage
          endCursor
        }
      }
}`