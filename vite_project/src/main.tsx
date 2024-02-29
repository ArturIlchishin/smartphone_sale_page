import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/fonts/GothamBold.ttf'
import './assets/fonts/GothamLight.ttf'
import './assets/fonts/GothamMedium.ttf'

import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
          <App />
  </React.StrictMode>,
)
