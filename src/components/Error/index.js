import React from 'react'

export default function Error() {
  
  return (
    <div className='bg-white h-screen w-screen '>
    <div className='w-full h-full flex justify-center items-center flex-col bg-cover brightness-75'
    style={{ backgroundImage: `url("/images/page-not-found.png")` }}>
      </div>
      <span className='text-6xl absolute inset-20 mt-40 text-center font-bold text-white'>
      Product not found</span>
      </div>
  )
}
