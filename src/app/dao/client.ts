import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { environment } from '../../environments/environment';
export const client = new ApolloClient({
  link: new HttpLink({ uri: environment.apiUrl }),
  cache: new InMemoryCache()
});
