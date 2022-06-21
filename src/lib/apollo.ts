import {ApolloClient, InMemoryCache } from '@apollo/client'; 

export const client = new ApolloClient({
  uri:'https://api-sa-east-1.graphcms.com/v2/cl4o7ne9511g501xx036ueouu/master',
  cache: new InMemoryCache(),
});