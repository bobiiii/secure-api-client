import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import ContextData from './components/ContextData'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextData>
        <App />
      </ContextData>
    </BrowserRouter>
  </React.StrictMode>,
)
