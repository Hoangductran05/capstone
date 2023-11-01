import React from 'react'
import ReactDOM from 'react-dom/client'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import App from './App.jsx'
import './index.css'
import ProductProvider from './contexts/productContext.jsx'
import SidebarProvider from './contexts/sidebarContext.jsx'
import CartProvider from './contexts/cartContext.jsx'

const apikey = import.meta.env.VITE_STRIPEAPI
const stripePromise = loadStripe(apikey)

ReactDOM.createRoot(document.getElementById('root')).render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <Elements stripe={stripePromise}>
          <App />
          </Elements>
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
)
