import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

// const defaultOptions = {
//   watchQuery: {
//     fetchPolicy: "cache-and-network",
//     errorPolicy: "ignore",
//   },
//   query: {
//     fetchPolicy: "cache-and-network",
//     errorPolicy: "all",
//   },
// };

// const cache = new InMemoryCache({
//   resultCaching: false,
// });

// const link = createHttpLink({
//   uri: `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/graphql`
// })

const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/graphql`,
  cache: new InMemoryCache(),
});

export default client;
