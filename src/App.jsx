/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// pages
import Home from './pages/home'
import Cart from './pages/cart'
import Checkout from './pages/checkout'
import Detail from './pages/detail'
import Login from './pages/login'
import Register from './pages/register'
// components
import Header from './components/header'
import Footer from './components/footer'
import Sidebar from './components/sidebar'


function App() {
  const [token, setToken] = useState(localStorage.getItem('userToken') ?? null)
  

  return (
    <>
      <div className='overflow-hidden'>
        <Router>
          <Header setToken={setToken} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<Detail />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<Login token={token} setToken={setToken} />} />
            <Route path='/register' element={<Register token={token} setToken={setToken} />} />
          </Routes>
          <Sidebar />
          <Footer />
        </Router>
      </div>
    </>
  )
}

export default App
