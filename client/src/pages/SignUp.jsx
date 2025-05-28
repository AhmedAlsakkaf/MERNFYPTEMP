import React from 'react'
import { Link } from "react-router-dom";


export default function SignUp() {
  return (
    <div className='p-4 max-w-md mx-auto mt-10 border rounded-lg shadow-lg'>
      <h1 className='text-center text-xl mb-10'>Sign UP</h1>

      <form action="" className='flex flex-col gap-5'>
        <input type="text" placeholder='Enter name' className='border p-3 rounded-lg' id='username' />
        <input type="email" placeholder='Enter email' className='border p-3 rounded-lg' id='email' />
        <input type="password" placeholder='Enter password' className='border p-3 rounded-lg' id='password' />

        <button className='bg-blue-700 text-white p-3 rounded-lg'>Sign up</button>
      </form>

      <div className='flex gap-2 mt-5'>
        <p>don't u have an account?</p>
        <Link to={"/sign-in"} className='text-blue-700 font-bold'>
          Login
        </Link>
      </div>


    </div>
  )
}
