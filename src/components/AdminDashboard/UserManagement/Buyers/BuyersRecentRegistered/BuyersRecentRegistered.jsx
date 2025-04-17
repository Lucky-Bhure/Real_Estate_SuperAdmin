import React from 'react'
import RecentRegisteredBuyers from '../../RecentRegistered/RecentRegisteredBuyers'

const BuyersRecentRegistered = () => {
  return (
    <section className='w-full py-6 px-8 mt-10 bg-white rounded-xl'>
        <div className='w-full flex justify-start'>
          <p className='text-[#000000]/[70%] text-xl font-[600]'>Recent Registered</p>
        </div>

        <RecentRegisteredBuyers/>
    </section> 
  )
}

export default BuyersRecentRegistered
