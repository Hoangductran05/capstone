/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

const Register2 = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential)
        }).catch((error) => {
            console.log(error.message)
            setError(error.message)
        })
    }

  return (
    <div className=' text-stone-500 h-[100vh] flex justify-center items-center'>
      <div className=' bg-stone-800 border border-stone-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-20 relative '>
        <h1 className='text-4x1 text-stone-600 font-bold text-center mb-6'>Register</h1>
        <form  onSubmit={handleSubmit}>
        
        {/* username */}
        <div className=' relative my-4' >
        <input 
        type='email'
        className=' block w-72 py-2.3 px-0 text-sm text-primary bg-transparent border-0 border-b-2 border-x-gray-300 appearance-none dark:focus:border-stone-500 focus:outline-none focus:ring-0 focus:text-primary focus:border-stone-500 peer' 
        placeholder='youremail@gmail.com' 
        id='email'
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
        placeholder='6 or more character' 
        id='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        />
        <label htmlFor="password">Your Password</label>
        </div>
        
     
        {/* button */}
        <button 
        className='w-full mb-4 text-[18px] mt-6 rounded-full bg-neutral-400 text-neutral-600 hover:bg-neutral-200 hover:text-stone-700 py-2' 
        type='submit'>Register
        </button>

        {/* error message */}
        {error && (<div className="alert alert-danger text-red-700">{error}</div>)}

        <div>
          <span>Already have an account? <Link className=' text-stone-500 hover:text-stone-900' to={'/login'}>Login</Link></span>
        </div>
        </form>
        
      </div>
    
    </div>
  )
}

export default Register2