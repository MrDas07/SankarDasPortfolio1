import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/epilogue/400.css'
import '@fontsource/epilogue/600.css'
import '@fontsource/epilogue/700.css'
import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
