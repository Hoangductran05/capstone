/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'


const Login = ({token, setToken}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://fakestoreapi.com/auth/login', {
        username,
        password,
      })
      console.log(response.data)
      setToken(response.data.token)

      // save user info
      localStorage.setItem('userToken', response.data.token)
      // update login state
      setIsLoggedIn(true)
      // redirect to the homepage
      // navigate('/');

    } catch (error) {
      console.error(error)
      setError(error.response.data)
    }
    // setUsername('')
    // setPassword('')
   
    }

    const handleLogout = () => {
      localStorage.removeItem('userToken')
      // update login state
      setIsLoggedIn(false)
      // redirect to login page
      navigate('/login')
    }
  
  return (
    <div className=' text-stone-500 h-[100vh] flex justify-center items-center'>
      { isLoggedIn ? (
        <div>
          <button 
          className='w-full mb-4 text-[18px] mt-6 rounded-full bg-neutral-400 text-neutral-600 hover:bg-neutral-200 hover:text-stone-700 py-2'
          onClick={handleLogout}>Logout</button>
        </div>
      ) : (
      <div className=' bg-stone-800 border border-stone-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-20 relative '>
        <h1 className='text-4x1 text-stone-600 font-bold text-center mb-6'>Login</h1>
        <form  onSubmit={handleSubmit}>
        
        {/* username */}
        <div className=' relative my-4' >
        <input 
        type='text'
        className=' block w-72 py-2.3 px-0 text-sm text-primary bg-transparent border-0 border-b-2 border-x-gray-300 appearance-none dark:focus:border-stone-500 focus:outline-none focus:ring-0 focus:text-primary focus:border-stone-500 peer' 
        placeholder='' 
        id='username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        />
        <label htmlFor="username" >Your Username</label>
        </div>

        {/* password */}
        <div className=' relative my-4'>
        <input 
        type="password" 
        className=' block w-72 py-2.3 px-0 text-sm text-primary bg-transparent border-0 border-b-2 border-x-gray-300 appearance-none dark:focus:border-stone-500 focus:outline-none focus:ring-0 focus:text-primary focus:border-stone-500 peer' 
        placeholder='' 
        id='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        />
        <label htmlFor="password">Your Password</label>
        </div>
        {error && (
                     <div className="alert alert-danger">{error}</div>
                  )}
     
        {/* button */}
        <button 
        className='w-full mb-4 text-[18px] mt-6 rounded-full bg-neutral-400 text-neutral-600 hover:bg-neutral-200 hover:text-stone-700 py-2' 
        type='submit'>Login
        </button>

        <div>
          <span>New Here? <Link className=' text-stone-500 hover:text-stone-900' to={'/register'}>Create An Account</Link></span>
        </div>
        </form>
        
      </div>
      )}
    </div>
  )
}

export default Login