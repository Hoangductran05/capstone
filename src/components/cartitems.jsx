/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';


const Cartitems = ({item}) => {
  const {id, title, image, price, amount} = item;
  return <div className='flex'>
    <div className='w-full min-h-[150px] flex items-center gap-x-4'>
      {/* image */}
      <Link to={`/product/${id}`}>
        <img className='max-w-[80px]' src={image} />
      </Link>
      <div className='w-full flex flex-col'>
        {/* title and remove icon */}
        <div className='flex justify-between mb-2'>
          <Link className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline' to={`/product/${id}`}>
            {title}
          </Link>
          {/* remove icon */}
          <div className='text-xl cursor-pointer'>
            <IoMdClose className='text-gray-500 hover:text-red-500 transition' />
          </div>
        </div>
        <div className='bg-stone-400 flex gap-x-2 h-[36px] text-sm'>
          {/* qty */}
          <div>quantity</div>
          {/* price */}
          <div>item price</div>
          {/* final price */}
          <div>final price</div>
        </div>
      </div>
    </div>
  </div>
}

export default Cartitems