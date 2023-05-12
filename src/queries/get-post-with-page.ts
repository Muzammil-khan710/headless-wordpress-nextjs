import { gql } from "@apollo/client"

export const GET_POST_WITH_PAGE = gql`
query MyQuery($slug: String = "hello-world") {
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
  postBy(slug: $slug) {
      link
      title
      slug
      excerpt
      uri
    }
  }`