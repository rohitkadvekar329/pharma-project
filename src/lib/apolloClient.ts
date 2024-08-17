// src/lib/apolloClient.ts
import { graphqlApiUrl } from '@/constant/env';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { NormalizedCacheObject } from '@apollo/client/cache';
import { ApolloProvider } from '@apollo/client/react';
import fetch from 'cross-fetch';

export function createApolloClient(): ApolloClient<NormalizedCacheObject> {
  return new ApolloClient({
    ssrMode: true, 
    link: new HttpLink({
      uri: graphqlApiUrl, 
      fetch,
    }),
    cache: new InMemoryCache(),
  });
}
