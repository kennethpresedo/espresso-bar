import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import App from './pages/App/App'
import { BrowserRouter as Router } from 'react-router-dom'
// import Landing from './pages/Landing/Landing'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)