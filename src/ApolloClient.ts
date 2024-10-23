import { ApolloClient, InMemoryCache } from '@apollo/client';

// Create an Apollo Client instance
const client = new ApolloClient({
  uri: 'http://localhost:4000', // URL of the GraphQL API (backend)
  cache: new InMemoryCache(),
});

export default client;
