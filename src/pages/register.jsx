/* eslint-disable no-unused-vars */
import React, {useRef, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'


const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmpassword) {
      setError('Password do not match!');
    } else {
      // TODO: Send signup request to server
      setError('Register successful');
      setName('')
      setEmail('');
      setPassword('');
      setConfirmPassword('')
    }
  };
  return (
    <div className=' text-stone-500 h-[100vh] flex justify-center items-center'>
      <div className=' bg-stone-800 border border-stone-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-20 relative '>
        <h1 className='text-4x1 text-stone-600 font-bold text-center mb-6'>Register</h1>
        <form action="" onSubmit={handleSubmit}>
        
        {/* name */}
        <div className=' relative my-4' >
        <input 
        type="text" 
        className=' block w-72 py-2.3 px-0 text-sm text-primary bg-transparent border-0 border-b-2 border-x-gray-300 appearance-none dark:focus:border-stone-500 focus:outline-none focus:ring-0 focus:text-primary focus:border-stone-500 peer' 
        placeholder='' 
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        />
        <label htmlFor="name" >Your Name</label>
        </div>

        {/* email */}
        <div className=' relative my-4' >
        <input 
        type="email" 
        className=' block w-72 py-2.3 px-0 text-sm text-primary bg-transparent border-0 border-b-2 border-x-gray-300 appearance-none dark:focus:border-stone-500 focus:outline-none focus:ring-0 focus:text-primary focus:border-stone-500 peer' 
        placeholder='' 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        />
        <label htmlFor="email" >Your Email</label>
        </div>

        {/* password */}
        <div className=' relative my-4'>
        <input 
        type="password" 
        className=' block w-72 py-2.3 px-0 text-sm text-primary bg-transparent border-0 border-b-2 border-x-gray-300 appearance-none dark:focus:border-stone-500 focus:outline-none focus:ring-0 focus:text-primary focus:border-stone-500 peer' 
        placeholder='' 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        />
        <label htmlFor="password">Your Password</label>
        </div>

        {/*confirm password */}
        <div className=' relative my-4'>
        <input 
        type="password" 
        className=' block w-72 py-2.3 px-0 text-sm text-primary bg-transparent border-0 border-b-2 border-x-gray-300 appearance-none dark:focus:border-stone-500 focus:outline-none focus:ring-0 focus:text-primary focus:border-stone-500 peer' 
        placeholder='' 
        value={confirmpassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
        />
        <label htmlFor="confirmpassword">Confirm Your Password</label>
        </div>

        {error && (
                     <div className="alert alert-danger">{error}</div>
                  )}
     
        {/* button */}
        <button 
        className='w-full mb-4 text-[18px] mt-6 rounded-full bg-neutral-400 text-neutral-600 hover:bg-neutral-200 hover:text-stone-700 py-2' 
        type='submit'>Register
        </button>

        <div>
          <span>Already have an account? <Link className=' text-stone-500 hover:text-stone-900' to={'/login'}>Login</Link></span>
        </div>
        </form>
        
      </div>
    </div>
  )
}

export default Register