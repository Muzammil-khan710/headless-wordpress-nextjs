import { gql } from "@apollo/client";

export const GET_BLOG_PAGE = gql`
query MyQuery ($perPage: Int, $offset: Int){
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
  posts(where: {offsetPagination: {offset: $offset, size: $perPage}}) {
    edges {
      node {
        title
        slug
        excerpt
      }
    }
    pageInfo {
      offsetPagination {
        total
      }
    }
  }
  postsCount:posts {
    pageInfo {
      offsetPagination {
        total
      }
    }
  }
}`


export const GET_TOTAL_POSTS_COUNT = gql`
  query GET_TOTAL_POSTS_COUNT {
  postsCount: posts {
      pageInfo {
        offsetPagination {
          total
        }
      }
    }
  }
`

export const GET_POST_SLUGS = gql`
 query GET_POST_SLUGS {
  posts: posts(last: 1) {
    nodes {
      id
      slug
    }
  }
 }
 `;
