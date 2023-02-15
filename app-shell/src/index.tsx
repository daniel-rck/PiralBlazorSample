import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { createInstance, Piral, storage } from 'piral-core';
import { getPlugins } from './plugins';
import { components } from './components/Layout';
import { errorComponents } from './components/Errors';
import { Dashboard } from 'piral-dashboard';
import { Loading } from './components/Loading';
import { provider } from './provider';

// change to your feed URL here (either using feed.piral.cloud or your own service)
const feedUrl = 'https://feed.piral.cloud/api/v1/pilet/empty';

const AuthorizedApp = () => {

  // Token comes from Keycloak
  const token = "fakebearertoken";

  // Locale comes from keycloak and is set once
  const locale = 'de'  
  storage.setItem('locale', locale);
  
  const appInstance = createInstance({
    plugins: getPlugins(locale),
    requestPilets: () => {
      return fetch(feedUrl, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(res => res.json())
        .then(res => res.items)
    },
    state: {
      provider,
      components,
      errorComponents,
      routes: {
        "/": Dashboard,
      },
    },
  });

  return <Piral instance={appInstance} />;
}

const App = () => {
  return (
      <React.Suspense fallback={<Loading />}>
        <AuthorizedApp />
      </React.Suspense>
  );
};

const root = createRoot(document.querySelector('#app'));
root.render(<App />);
