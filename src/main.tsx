import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { NotyProvider } from './context/Context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <NotyProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </NotyProvider>
)
