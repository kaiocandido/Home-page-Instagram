import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles from "./Styles/GlobalStyles"
import Home from './Container/Home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <Home />
  </StrictMode>,
)
