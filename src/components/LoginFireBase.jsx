/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'

const Login2 = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential);

      // After successful login, fetch the user's cart data from Firestore
      const user = userCredential.user;
      const userCartRef = doc(db, 'carts', user.uid);
      const cartSnapshot = await getDoc(userCartRef);

      if (cartSnapshot.exists()) {
        const userCart = cartSnapshot.data().cart;
        console.log('User Cart:', userCart);

        
      } else {
        // User has no cart data in Firestore
        console.log('empty cart')
      }
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  return (
    <div className=' text-stone-500 h-[100vh] flex justify-center items-center'>
      <div className=' bg-stone-800 border border-stone-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-20 relative '>
        <h1 className='text-4x1 text-stone-600 font-bold text-center mb-6'>Login</h1>
        <form  onSubmit={handleLogin}>
        
        {/* username */}
        <div className=' relative my-4' >
        <input 
        type='email'
        className=' block w-72 py-2.3 px-0 text-sm text-primary bg-transparent border-0 border-b-2 border-x-gray-300 appearance-none dark:focus:border-stone-500 focus:outline-none focus:ring-0 focus:text-primary focus:border-stone-500 peer' 
        placeholder='' 
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
        placeholder='' 
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
        type='submit'>Login
        </button>

        {/* error message */}
        {error && (<div className="alert alert-danger text-red-700">{error}</div>)}

        <div>
          <span>New Here? <Link className=' text-stone-500 hover:text-stone-900' to={'/register'}>Create An Account</Link></span>
        </div>
        </form>
        
      </div>
    
    </div>
  )
}

export default Login2