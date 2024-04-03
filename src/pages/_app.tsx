import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';

// Determines if we are running on server or in client.
const isServerSideRendered = () => {
  return typeof window === 'undefined';
};

const httpLink = new HttpLink({
  uri: '/api/graphql',
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

/**
 * Accessibility tool - outputs to devtools console on dev only and client-side only.
 * @see https://github.com/dequelabs/axe-core-npm
 */
if (process.env.NODE_ENV !== 'production' && !isServerSideRendered()) {
  import('react-dom').then((ReactDOM) => {
    import('@axe-core/react').then((axe) => {
      axe.default(React, ReactDOM, 1000, {});
    });
  });
}

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <UserProvider>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </UserProvider>
  );
};

export default App;
