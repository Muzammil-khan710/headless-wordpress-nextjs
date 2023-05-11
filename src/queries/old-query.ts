import { gql } from "@apollo/client";

export const GET_MENUS = gql`
query MyQuery {
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
}`