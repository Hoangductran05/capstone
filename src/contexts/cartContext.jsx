/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useContext, useState, useEffect, createContext} from 'react'

export const Cartcontext = createContext()

const CartProvider = ({children}) => {
  const [cart, setCart] = useState([])

  return <Cartcontext.Provider value={'this is the cart context'}>
    {children}</Cartcontext.Provider>
}

export default CartProvider