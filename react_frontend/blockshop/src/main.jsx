import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import BlockShopContext from './context/BlockShopContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <BlockShopContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BlockShopContext>
)
