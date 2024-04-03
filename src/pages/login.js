import React from 'react'
import Link from 'next/link'

const Login = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-yellow-400 bg-gradient-to-r from-blue-900'>
      <h1 className='font-bold text-4xl mb-4'>Login</h1>
      <form>
        <div>
          <input 
          type="text" 
          name="email" 
          placeholder='Email' 
          className="border border-gray-400 p-2 w-full rounded-md mb-2"/>
        </div>

        <div>
          <input 
          type="password" 
          name="password" 
          placeholder='Password' 
          className="border border-gray-400 p-2 w-full rounded-md mb-2"/>
        </div>

        <button 
        type="submit"
        className="w-full bg-blue-500 py-3 text-center text-white font-semibold rounded-md text-sm hover:bg-white hover:text-black">
          Login
        </button>
        
        <h1>Already have an account? <Link href="/" className='hover:text-white'>Sign Up</Link></h1>
      </form>
    </div>
  )
}

export default Login