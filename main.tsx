import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ReactTogether } from 'react-together'
import { BrowserRouter as Router } from 'react-router-dom'
import 'src/index.css'
import { UserProvider } from '@contexts/UserProvider'

import App from '@App'

// Having the two args below will make React Together immediately connect
// to a new session. Remove them if you want users to start "offline"
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReactTogether
      sessionParams={{
        appId: import.meta.env['VITE_APP_ID'],
        apiKey: import.meta.env['VITE_API_KEY'],
        name: import.meta.env['VITE_SESSION_NAME'],
        password: import.meta.env['VITE_SESSION_PASSWORD'],
      }}
    >
      <UserProvider>
        <Router>
          <App />
        </Router>
      </UserProvider>
    </ReactTogether>
  </StrictMode>
)
