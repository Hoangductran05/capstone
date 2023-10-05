/* eslint-disable no-unused-vars */
import React, {useContext} from 'react'
import { ProductContext } from '../contexts/productContext'

const Home = () => {
  const { products } = useContext(ProductContext)

  return (
    <div>
      <section className='py-16'>
        <div className="container mx-auto">
          <div>
            {products.map((product) => {
              return <div key={product.id}>{product.title}</div>
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home