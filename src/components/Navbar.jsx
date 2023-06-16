import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {

  const { currentUser } = useContext(AuthContext);

  return (
    <div className='navbar'>
    <span className='logo'>ChatApp</span>
    <span className='user'>
        <img src={currentUser.photoURL} alt=''></img>
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>logout</button>
    </span>
    </div>
  )
}

export default Navbar