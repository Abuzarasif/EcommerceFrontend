// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { GoogleOAuthProvider } from '@react-oauth/google';

// import { Auth0Provider } from '@auth0/auth0-react';


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <GoogleOAuthProvider clientId="1018617522323-kdtccp3vn2rd75q060gti7d2ubpunkka.apps.googleusercontent.com">
      
//     <App />
//       </GoogleOAuthProvider>;

//   </StrictMode>,
// )



import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';

import { Auth0Provider } from '@auth0/auth0-react';


createRoot(document.getElementById('root')).render(
<Auth0Provider
    domain="dev-omn6fzzd4jlxowyw.us.auth0.com"
    clientId="6qypoJywKqUFvoMqpsSRiN4eYHt6m7pH"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >      
    <App />
</Auth0Provider>
)
