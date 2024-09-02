import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Desktop from './index.jsx'
import './style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Desktop />
  </StrictMode>,
)
