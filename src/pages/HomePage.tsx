import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, MessageSquare } from 'lucide-react'

function HomePage() {
  return (
    <div className='h-screen w-full flex items-center bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 relative overflow-hidden'>
      <div className='relative bg-white rounded-2xl py-16 px-12 shadow-xl max-w-3xl z-10 ml-20'>
        <div className='flex flex-col items-start justify-center space-y-8'>
          <div className='space-y-3'>
            <h1 className='text-slate-800 text-5xl font-bold leading-tight'>
              Shop Together,
              <span className='block text-indigo-600'>Decide Better</span>
            </h1>
            <p className='text-slate-600 text-lg leading-relaxed'>
              Connect with fellow shoppers in real-time. Get authentic opinions and make confident purchase decisions together.
            </p>
          </div>

          <Link
            to='/products'
            className='inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors duration-200 shadow-md hover:shadow-lg'
          >
            Start Shopping
            <ShoppingBag className='ml-2 h-5 w-5' />
          </Link>
        </div>
      </div>

      <div className='absolute right-48 top-1/2 -translate-y-1/2 transform space-y-24'>
        <div className='group'>
          <div className='relative'>
            <div className='absolute inset-0 bg-indigo-300 rounded-3xl blur-2xl opacity-20'></div>
            <div className='relative p-8 bg-indigo-50 rounded-3xl'>
              <ShoppingBag className='h-24 w-24 text-indigo-600 opacity-80' />
            </div>
          </div>
        </div>

        <div className='group translate-x-16'>
          <div className='relative'>
            <div className='absolute inset-0 bg-purple-300 rounded-3xl blur-2xl opacity-20'></div>
            <div className='relative p-8 bg-purple-50 rounded-3xl'>
              <MessageSquare className='h-24 w-24 text-purple-600 opacity-80' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
