/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState, useNavigate } from 'react'
import { SidebarContext } from '../contexts/sidebarContext'
import { Cartcontext } from '../contexts/cartContext'
import {BsBag} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Logo from '../img/Untitled-1.png'
import Login from '../pages/login'
import { FaUserAlt } from 'react-icons/fa'
import {TbLogout} from 'react-icons/tb'

const Header = ({setToken}) => {
  const [isActive, setIsActive] = useState(false)
  const {isOpen, setIsOpen} = useContext(SidebarContext)
  const {itemAmount} = useContext(Cartcontext)
 
  

  const handleLogout = () => {
    // Clear user information from localStorage
    localStorage.removeItem('userToken');
    setToken('')
    // Set isLoggedIn to false
    // setIsLoggedIn(false);
    console.log('loggedout')
    // // Redirect to the login page after logout
    // navigate('/login');
  }

  useEffect(() => {
    window.addEventListener('scroll', ()=> {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    })
  })
  return (
    <header className={`${isActive? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all `}>
      <div className='container mx-auto flex items-center justify-between h-full '>
      {/* logo */}
      <Link to={'/'}>
        <div>
          <img className='w-[40px]' src={Logo} alt="" />
        </div>
      </Link>



      {/* login register */}
      <Link to={'/login'}>
      <div className='cursor-pointer flex relative hover:text-stone-600'><FaUserAlt className=' text-2xl'/></div>
      </Link>

      {/* logout */}
      <div>
          <button
          className='cursor-pointer flex relative hover:text-stone-600'
          onClick={handleLogout}><TbLogout className=' text-2xl'/></button>
        </div>
      

      {/* cart */}
      <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative hover:text-stone-600'>
        <BsBag className='text-2xl'/>
        <div className='bg-neutral-400 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>
          {itemAmount}</div>
      </div>
      </div>
    </header>
  )
}

export default Header