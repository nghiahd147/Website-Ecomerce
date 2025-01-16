import React from 'react';
import {Link} from 'react-router-dom';
import { IoSearchSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='flex justify-around items-center h-16 shadow-md'>

      <div>
        <Link to='/'>e-Shop</Link>
      </div>

      <form className='border font-bold flex items-center rounded-md overflow-hidden w-400'>
        <input type="text" placeholder='Search...' className='outline-none flex-1 py-1 px-4'/>
        <IoSearchSharp color='red' className='w-6 cursor-pointer'/>
      </form>

      <div className='flex items-center'>
        <Link className='px-6' to="/">
          <FaShoppingCart size={15}  />
        </Link>
        <div>
          <Link>Login</Link>
          <span className='px-2'>|</span>
          <Link>Register</Link>
        </div>
      </div>

    </div>
  )
}

export default Navbar