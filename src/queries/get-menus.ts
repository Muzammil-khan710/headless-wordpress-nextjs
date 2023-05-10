import graphqlRequest from "@/lib/graphqlreq"

export async function getAllMenus() {
  const query = {
    query: `query MyQuery {
      headerMenu: menuItems(where: {location: HCMS_MENU_HEADER, parentId: "0"}) {
        edges {
          node {
            label
            id
            url
            path
            childItems {
              edges {
                node {
                  label
                  id
                  url
                  path
                }
              }
            }
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
  }

  const response  = await graphqlRequest(query)
  console.log(response)
  const allMenus = response?.data
  return allMenus
}