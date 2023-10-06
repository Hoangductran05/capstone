// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <div className=' text-stone-500 h-[100vh] flex justify-center items-center'>
      <div className=' bg-stone-800 border border-stone-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-20 relative '>
        <h1 className='text-4x1 text-stone-600 font-bold text-center mb-6'>Login</h1>
        <form action="">
        <div className=' relative my-4' >
        <input type="email" className=' block w-72 py-2.3 px-0 text-sm text-primary bg-transparent border-0 border-b-2 border-x-gray-300 appearance-none dark:focus:border-stone-500 focus:outline-none focus:ring-0 focus:text-primary focus:border-stone-500 peer' placeholder='' />
        <label htmlFor="" >Your Email</label>
        </div>

        <div className=' relative my-4'>
        <input type="password" className=' block w-72 py-2.3 px-0 text-sm text-primary bg-transparent border-0 border-b-2 border-x-gray-300 appearance-none dark:focus:border-stone-500 focus:outline-none focus:ring-0 focus:text-primary focus:border-stone-500 peer' placeholder='' />
        <label htmlFor="">Your Password</label>
        </div>

     
        
        <button className='w-full mb-4 text-[18px] mt-6 rounded-full bg-neutral-400 text-neutral-600 hover:bg-neutral-200 hover:text-stone-700 py-2' type='submit'>Login</button>
        <div>
          <span>New Here? <Link className=' text-stone-500 hover:text-stone-900' to={'/register'}>Create An Account</Link></span>
        </div>
        </form>
        
      </div>
    </div>
  )
}

export default Login