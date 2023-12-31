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
import Login2 from './components/LoginFireBase'
import Register2 from './components/Register2'
import AuthDetail from './components/AuthDetail'


function App() {
  
  

  return (
    <>
      <div className='overflow-hidden'>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<Detail />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<Login2  />} />
            <Route path='/register' element={<Register2  />} />
            <Route path='/login' element={<AuthDetail/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>
          <Sidebar />
          <Footer />
        </Router>
      </div>
    </>
  )
}

export default App
