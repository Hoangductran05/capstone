/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {FiTrash2} from 'react-icons/fi'
import {IoMdArrowForward} from 'react-icons/io'
import Cartitems from './cartitems'
import { SidebarContext } from '../contexts/sidebarContext'
import { Cartcontext } from '../contexts/cartContext'


const Sidebar = () => {
  const {isOpen, handleClose} = useContext(SidebarContext)
  const {cart, clearCart, total, itemAmount} = useContext(Cartcontext)
  
  return (
    <div className={`${isOpen ? 'right-0' : '-right-full'} 
    w-full bg-white fixed top-0  h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
      <div className='flex items-center justify-between py-6 border-b'>
        <div className='uppercase text-sm font-semibold'>Shopping bag (0)</div>
        <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
          <IoMdArrowForward className='text-2xl' />
        </div>
      </div>
      <div className='flex flex-col gap-y-2 h-[520px] lg:h-[520px] overflow-y-auto overflow-x-hidden border-b'>{cart.map((item) => {
        return <Cartitems item={item} key={item.id} />
      })}</div>
      <div className=' flex flex-col gap-y-3 py-4 mt-4'>
        <div className=' flex w-full justify-between items-center'>
          {/* total */}
          <div className='uppercase font-semibold'>
            <span className='mr-2'>Total:</span> $ {parseFloat(total).toFixed(2)}
          </div>
          {/* clear cart */}
          <div onClick={clearCart} className='cursor-pointer py-4 bg-stone-500 text-white w-12 h-12 flex justify-center items-center text-xl'>
            <FiTrash2/>
          </div>
        </div>
        <Link to={'/cart'} className='flex bg-gray-200 p-4 justify-center  items-center text-primary w-full font-medium'>View Cart</Link>
        <Link to={'/checkout'} className='flex bg-primary p-4 justify-center  items-center text-white w-full font-medium'>Check Out</Link>
      </div>
    </div>
  )
}

export default Sidebar