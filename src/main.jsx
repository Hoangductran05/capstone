import React from 'react'
import ReactDOM from 'react-dom/client'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import App from './App.jsx'
import './index.css'
import ProductProvider from './contexts/productContext.jsx'
import SidebarProvider from './contexts/sidebarContext.jsx'
import CartProvider from './contexts/cartContext.jsx'

const stripePromise = loadStripe('pk_test_51O79iBIavA56LkJMr3wbxdk6tLrlL2wfmuuHxJZANrhCSY5vMg5LiHRe55f4MqZvEZLeFuAPUuALgwsXgVcojlJ000416BZuyp')

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
