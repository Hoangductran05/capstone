/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/home'
import Cart from './pages/cart'
import Checkout from './pages/checkout'
import Detail from './pages/detail'
import Login from './pages/login'
import Signup from './pages/signup'



function App() {
  

  return (
    <>
      <div className='overflow-hidden'>
        Ecommerce store
      </div>
    </>
  )
}

export default App
