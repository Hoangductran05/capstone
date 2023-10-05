/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { SidebarContext } from '../contexts/sidebarContext'
import {BsBag} from 'react-icons/bs'

const Header = () => {
  const {isOpen, setIsOpen} = useContext(SidebarContext)
  return (
    <header className='bg-stone-500'>
      <div>Header</div>
      <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
        <BsBag className='text-2xl'/>
      </div>
    </header>
  )
}

export default Header