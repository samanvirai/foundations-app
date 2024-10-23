import React from 'react';
import { useQuery, gql } from '@apollo/client';

// Define the GraphQL query
const HELLO_QUERY = gql`
  query GetHello {
    hello
  }
`;

const App: React.FC = () => {
  // Use Apollo's useQuery hook to make a query request
  const { loading, error, data } = useQuery(HELLO_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="App">
      <header className="App-header">
        <h1>GraphQL Apollo Client Example</h1>
        <p>{data.hello}</p> {/* Display the hello response from GraphQL API */}
      </header>
    </div>
  );
}

export default App;
