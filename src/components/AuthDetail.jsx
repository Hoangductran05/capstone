/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react'
import { auth } from '../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import {TbLogout} from 'react-icons/tb'

const AuthDetail = () => {
    const [authUser, setAuthUser] = useState(null)

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null)
            }
        })

        return () => {
            listen()
        }
    }, [])

    const userlogout = () => {
        signOut(auth).then(() => {
            console.log('Logged out')
        }).catch((error) => {
            console.log(error)
        })
    }
  return (
    <div>
        {authUser ? <> <p>{`Signed In as ${authUser.email}`}</p>
    <button onClick={userlogout}><TbLogout className=' text-2xl cursor-pointer flex relative hover:text-stone-600'/></button>
     </> : <p>Signed Out</p>}
    </div>
  )
}

export default AuthDetail