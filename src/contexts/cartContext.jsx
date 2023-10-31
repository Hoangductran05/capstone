/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useContext, useState, useEffect, createContext} from 'react'
import { useFetcher } from 'react-router-dom'
import { auth } from '../firebase'
import { db } from '../firebase'
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';



export const Cartcontext = createContext()

const CartProvider = ({children}) => {
  const [cart, setCart] = useState([])
  const [itemAmount, setItemAmount] = useState(0)
  const [total, setTotal] = useState(0)

  //read the cart when user signin
  useEffect(() => {
    const initializeUserCart = async () => {
      const user = auth.currentUser;
      console.log(user)
  
      if (user) {
        const userCartRef = doc(db, 'carts', user.uid);
        console.log(userCartRef)
  
        try {
          const cartSnapshot = await getDoc(userCartRef);
  
          if (cartSnapshot.exists()) {
            setCart(cartSnapshot.data().cart);
          } else {
            // User has no cart data, set an empty cart
            setCart([]);
          }
        } catch (error) {
          console.error('Error fetching user cart:', error);
        }
      } else {
        // User is not signed in, set an empty cart
        setCart([]);
      }
    };
    
     // Listen for user authentication state changes
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (!user) {
      // User has logged out, clear the cart
      setCart([]);
    }
  });

  // Unsubscribe the listener when the component unmounts
  return () => {
    unsubscribe();
  };

    // eslint-disable-next-line no-unreachable
    initializeUserCart();
  }, []);
  

  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount
    }, 0)
    setTotal(total)
  }, [cart])

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
    const newItem = { ...product, amount: 1 };
    const cartItemIndex = cart.findIndex((item) => item.id === id);
  
    if (cartItemIndex !== -1) {
      // Item already exists in the cart, increase its amount
      const updatedCart = [...cart];
      updatedCart[cartItemIndex].amount += 1;
      setCart(updatedCart);
    } else {
      // Item does not exist in the cart, add it
      setCart([...cart, newItem]);
    }
  
    // Update the cart data in Firestore
    const user = auth.currentUser;
    if (user) {
      const userCartRef = doc(db, 'carts', user.uid);
      setDoc(userCartRef, { cart: [...cart, newItem] }, { merge: true });
    }
  };
  

  //remove cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id
    })
    setCart(newCart)
        // Update the cart data in Firestore
        const user = auth.currentUser;
        if (user) {
          const userCartRef = doc(db, 'carts', user.uid);
          setDoc(userCartRef, { cart: newCart }, { merge: true });
        }
  }
  
  //clear cart
  const clearCart = () => {
    setCart([])
  // Update the cart data in Firestore
  const user = auth.currentUser;
  if (user) {
    const userCartRef = doc(db, 'carts', user.uid);
    setDoc(userCartRef, { cart: [] }, { merge: true });
  }
  }
  //increase cart
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      // Increase the item's amount
      cartItem.amount += 1;
      setCart([...cart]); // Update the local cart state
  
      // Update the cart data in Firestore
      const user = auth.currentUser;
      if (user) {
        const userCartRef = doc(db, 'carts', user.uid);
        setDoc(userCartRef, { cart: [...cart] }, { merge: true });
      }
    }
  };
  

  //decrease cart
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      let updatedCart = [...cart];
  
      if (cartItem.amount > 1) {
        // Decrease the item's amount
        updatedCart = updatedCart.map((item) => {
          if (item.id === id) {
            return { ...item, amount: cartItem.amount - 1 };
          } else {
            return item;
          }
        });
      } else {
        // If the item's amount is 1 or less, remove it from the cart
        removeFromCart(id);
        return;
      }
  
      // Update the local cart state
      setCart(updatedCart);
  
      // Update the cart data in Firestore
      const user = auth.currentUser;
      if (user) {
        const userCartRef = doc(db, 'carts', user.uid);
        setDoc(userCartRef, { cart: updatedCart }, { merge: true });
      }
    }
  };
  

  return <Cartcontext.Provider value={{cart, addToCart, removeFromCart, clearCart,  increaseAmount, decreaseAmount, itemAmount,total, }}>
    {children}</Cartcontext.Provider>
}

export default CartProvider