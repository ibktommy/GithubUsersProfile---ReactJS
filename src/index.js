import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';

// dev - loa3ld - d.us.auth0.com
// zQBGlUcHwwC9DgKSixA1aamDJYqOHcRw

ReactDOM.render(
  <Auth0Provider 
    domain="dev-loa3ld-d.us.auth0.com"
    clientId="zQBGlUcHwwC9DgKSixA1aamDJYqOHcRw"
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
    <GithubProvider>
      <App />
    </GithubProvider>
  </Auth0Provider>,
  document.getElementById('root')
);
