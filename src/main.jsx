import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GeminiContextProvider from "./Context/context.jsx"
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <GeminiContextProvider>
    <App />
    </GeminiContextProvider>,
)
