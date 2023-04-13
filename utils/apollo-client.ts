import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { removeLastTrailingSlash } from './removeLastTrailingSlash';

let client: ApolloClient<NormalizedCacheObject>;

export const getApolloClient = () => {
  if (!client) {
    client = _createApolloClient();
  }
  return client;
};

export const _createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: removeLastTrailingSlash(process.env.GRAPHQL_ENDPOINT as string),
    }),

    cache: new InMemoryCache({
      typePolicies: {
        RootQuery: {
          queryType: true,
        },
        RootMutation: {
          mutationType: true,
        },
      },
    }),
  });
};
