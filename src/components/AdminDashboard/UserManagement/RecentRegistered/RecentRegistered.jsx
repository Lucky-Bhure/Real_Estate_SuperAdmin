import React from 'react'
import { FiSearch } from 'react-icons/fi'
import RecentRegistrationSeller from './RecentRegistrationSeller/RecentRegistrationSeller'

const RecentRegistered = () => {
    return (
        <section className='w-full py-6 px-8 mt-10 bg-white rounded-xl'>
            <div className='w-full flex justify-between'>
                <p className='text-[#000000]/[70%] text-xl font-[500]'>Recent Registered</p>
                <div className="flex w-[50%] items-center bg-white text-gray-700 rounded-sm px-4 py-2 border-1 border-[#e8edf1]">
                    <FiSearch color='#00A58E' size={24} />
                    <input className="outline-none w-full pl-2 text-l font-bold-" type="text" placeholder='Search Here' />
                </div>
                <p className='text-[#000000]/[70%] text-sm font-[400] mr-4'>View More</p>
            </div>

            <RecentRegistrationSeller />
        </section>
    )
}

export default RecentRegistered
