import React from 'react'
import RecentRegistrationSeller from '../../RecentRegistered/RecentRegistrationSeller/RecentRegistrationSeller'
import { FiSearch } from 'react-icons/fi'

const SellersRecentRegistered = () => {
  return (
    <section className='w-full py-6 px-8 bg-white rounded-xl mt-10'>
      <div className='w-full flex justify-between items-center'>
                      <p className='text-[#000000]/[70%] text-xl font-[600]'>Recent Registered</p>
                      <div className="flex w-[50%] items-center bg-white text-gray-700 rounded-sm px-4 py-2 border-1 border-[#e8edf1]">
                          <FiSearch color='#00A58E' size={24} />
                          <input className="outline-none w-full pl-2 text-l font-bold-" type="text" placeholder='Search Here' />
                      </div>
                  </div>

      <RecentRegistrationSeller />
    </section>
  )
}

export default SellersRecentRegistered
