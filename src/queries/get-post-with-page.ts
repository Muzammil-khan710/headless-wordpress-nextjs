import { gql } from "@apollo/client"

export const GET_POST_WITH_PAGE = gql`
query MyQuery($slug: ID = "hello-world") {
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
  post(id: $slug, idType: SLUG) {
    link
    title
    content
    uri
    slug
    seo {
      title
      metaDesc
      opengraphTitle
      opengraphDescription
      opengraphUrl
      opengraphType
      opengraphSiteName
      schema {
        raw
      }
      opengraphImage {
        mediaItemUrl
      }
    }
  }
}`