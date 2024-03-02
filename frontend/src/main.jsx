import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as m4rkbellofullstack } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <m4rkbellofullstack>
      <App />
    </m4rkbellofullstack>
  </React.StrictMode>,
)
