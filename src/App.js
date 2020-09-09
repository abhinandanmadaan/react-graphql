import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider} from 'react-apollo';
import Courses from './Courses';
import './App.css';

const client = new ApolloClient({
  uri: "http://localhost:8091/rest/books"
  // https://countries.trevorblades.com
})

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <Courses/>
    </div>
  </ApolloProvider>
)

export default App;
