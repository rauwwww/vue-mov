import Vue from 'vue';
import VueApollo from 'vue-apollo';

import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { LocalStorageKeys } from '../store/auth/auth.types';
import { ApolloClient } from 'apollo-client';
import { setContext } from 'apollo-link-context';

Vue.use(VueApollo);
// Name of the localStorage item
const AUTH_TOKEN = 'apollo-token';

// You can use `https` for secure connection (recommended in production)
const httpLink = new HttpLink({
  uri: process.env.VUE_APP_GRAPHQL_HTTP || 'http://localhost:8080/v1/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(LocalStorageKeys.auth0Token) || null;

  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`
    }
  };
});

// Config
const defaultOptions = {
  // You can use `wss` for secure connection (recommended in production)
  // Use `null` to disable subscriptions
  wsEndpoint: process.env.VUE_APP_GRAPHQL_WS || 'ws://localhost:4000/graphql',
  // LocalStorage token
  tokenName: AUTH_TOKEN,
  // Enable Automatic Query persisting with Apollo Engine
  persisting: false,
  // Use websockets for everything (no HTTP)
  // You need to pass a `wsEndpoint` for this to work
  websocketsOnly: false,
  // Is being rendered on the server?
  ssr: false,

  // Override default apollo link
  // note: don't override httpLink here, specify httpLink options in the
  // httpLinkOptions property of defaultOptions.
  link: authLink.concat(httpLink),

  // Override default cache
  cache: new InMemoryCache(),

  connectToDevTools: true,

  loadingKey: 'loading'

  // Override the way the Authorization header is set
  // getAuth: (tokenName) => ...

  // Additional ApolloClient options
  // apollo: { ... }

  // Client local data (see apollo-link-state)
  // clientState: { resolvers: { ... }, defaults: { ... } }
};

export const apolloClient = new ApolloClient({
  ...defaultOptions
});

export function createProvider(options: any = {}) {
  // Create apollo client

  // apolloClient.wsClient = wsClient;

  // Create vue apollo provider
  const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
    defaultOptions: {
      $query: {
        fetchPolicy: 'cache-and-network',
        errorPolicy: 'all'
      }
    },
    errorHandler(error: any) {
      // eslint-disable-next-line no-console
      console.log('%cError', 'background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;', error.message);
    }
  });

  return apolloProvider;
}

// // Manually call this when user log in
// export async function onLogin(apolloClient: { wsClient: any; resetStore: () => void }, token: string) {
//   if (typeof localStorage !== 'undefined' && token) {
//     localStorage.setItem(AUTH_TOKEN, token);
//   }
//   if (apolloClient.wsClient) {
//     restartWebsockets(apolloClient.wsClient);
//   }
//   try {
//     apolloClient.resetStore();
//   } catch (e) {
//     // eslint-disable-next-line no-console
//     console.log('%cError on cache reset (login)', 'color: orange;', e.message);
//   }
// }

// // Manually call this when user log out
// export async function onLogout(apolloClient: { wsClient: any; resetStore: () => void }) {
//   if (typeof localStorage !== 'undefined') {
//     localStorage.removeItem(AUTH_TOKEN);
//   }
//   if (apolloClient.wsClient) {
//     restartWebsockets(apolloClient.wsClient);
//   }
//   try {
//     apolloClient.resetStore();
//   } catch (e) {
//     // eslint-disable-next-line no-console
//     console.log('%cError on cache reset (logout)', 'color: orange;', e.message);
//   }
// }
