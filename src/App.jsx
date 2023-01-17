import { useState, useEffect } from 'react'
import Profile from './components/Profile'


export default function App() {
  return (
    <div className='mx-auto px-4'>
      <div className='grid grid-cols-3'>
      <Profile />
      <div className='col-span-2'></div>
      </div>
    </div>
  )
}
