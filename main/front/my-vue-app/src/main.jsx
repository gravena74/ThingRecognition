import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Info from './info.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Info />
  </StrictMode>,
)
