import { gql } from "@apollo/client";

export const GET_MENUS = gql`
query MyQuery {
  header: getHeader {
    favicon
    siteTagLine
    siteTitle
  }
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
  posts {
    edges {
      node {
        title
        slug
      }
    }
  }
}`