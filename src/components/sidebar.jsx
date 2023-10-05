/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {FiTrash2} from 'react-icons/fi'
import {IoMdArrowForward} from 'react-icons/io'
import Cartitems from './cartitems'
import { SidebarContext } from '../contexts/sidebarContext'


const Sidebar = () => {
  const {isOpen, handleClose} = useContext(SidebarContext)
  return (
    <div>Sidebar</div>
  )
}

export default Sidebar