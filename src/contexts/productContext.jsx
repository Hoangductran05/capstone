/* eslint-disable no-unused-vars */
import React, {createContext, useEffect, useState} from 'react'


export const ProductContext = createContext()

// eslint-disable-next-line react/prop-types
const ProductProvider = ({ children }) => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            console.log(data)
        }
        fetchProducts()
    }, [])


  return <ProductContext.Provider>{children}</ProductContext.Provider>
}

export default ProductProvider