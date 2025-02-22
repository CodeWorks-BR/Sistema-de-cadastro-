import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './login/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
  </StrictMode>,
)
