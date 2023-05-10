import graphqlRequest from "@/lib/graphqlreq"

export async function getAllPosts() {
  const query = {
    query: `query MyQuery {
      posts {
        nodes {
          link
          title
          slug
          excerpt
        }
      }
    }`
  }

  const res = await graphqlRequest(query);
  const allPosts  = res.data.posts;

  return allPosts
}