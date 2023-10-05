import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProductProvider from './contexts/productContext.jsx'
import SidebarProvider from './contexts/sidebarContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <SidebarProvider>
  <ProductProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ProductProvider>
  </SidebarProvider>
)
