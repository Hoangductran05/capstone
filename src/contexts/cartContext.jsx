/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useContext, useState, useEffect, createContext} from 'react'

export const Cartcontext = createContext()

const CartProvider = ({children}) => {
  const [cart, setCart] = useState([])
  const [itemAmount, setItemAmount] = useState(0)

  //update item amount
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount
      }, 0)
      setItemAmount(amount)
    }
  }, [cart])

  const addToCart = (product, id) => {
    const newItem = {...product, amount: 1}
    // check if the item is already in the cart
    const cartItem = cart.find((item) => {
      return item.id === id
    })
    
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return  {...item, amount: cartItem.amount + 1}
        } else {
          return item;
        }
      })
      setCart(newCart)
    } else {
      setCart([...cart, newItem])
    }
  }

  //remove cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id
    })
    setCart(newCart)
  }
  
  //clear cart
  const clearCart = () => {
    setCart([])
  }

  //increase cart
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id  === id)
    addToCart(cartItem, id)
  }

  //decrease cart
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id
    })
    if(cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return {...item, amount: cartItem.amount -1}
        } else {
          return item
        }
      })
      setCart(newCart)
    } 
      if (cartItem.amount < 2) {
        removeFromCart(id)
      }
    
  }

  return <Cartcontext.Provider value={{cart, addToCart, removeFromCart, clearCart,  increaseAmount, decreaseAmount, itemAmount,}}>
    {children}</Cartcontext.Provider>
}

export default CartProvider