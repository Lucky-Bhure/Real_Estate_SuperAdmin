import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import { IoMdStar } from 'react-icons/io'
import NewBuyers from './NewBuyers/NewBuyers'
import RecentRegisteredBuyers from '../RecentRegistered/RecentRegisteredBuyers'
import { Outlet } from 'react-router-dom'


const Buyers = () => {

  const handleButton = () => {
    alert("Currently Under Developement");
}

  return (
    <section className='w-full flex flex-col justify-center'>
      <Outlet />
    </section>
  )
}

export default Buyers
