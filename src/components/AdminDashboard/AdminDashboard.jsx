import React, { useState } from 'react'
import Sidebar from './Sidebar/Sidebar'
import { Outlet } from 'react-router-dom';
import SuperAdminHeader from './SuperAdminHeader/SuperAdminHeader';

const menuItems = [
  { title: "Dashboard", name: "Hello, Super Admin" , src: "mage:dashboard", link: "/superadmin", page: 0, sidebar: true },
  { title: "User Management", name: "User Management-Buyers", src: "solar:users-group-rounded-linear", link: "usermanagement", page: 1, sidebar: true},
  { title: "Property Listing", name: "Property Listing", src: "solar:clipboard-text-outline", link: "propertylisting", page: 2, sidebar: true },
  { title: "Revenue Model", name: "Revenue Model", src: "streamline:subscription-cashflow", link: "revenuemodel", page: 3, sidebar: true },
  { title: "Subscription Management", name: "Subscription Managements", src: "streamline:subscription-cashflow", link: "subscriptionmanagement", page: 4, sidebar: true },
  { title: "Advertisements", name: "Advertisements", src: "iconoir:megaphone", link: "advertisements", page: 5, sidebar: true },
  { title: "Complaints Managements", name: "Complaints Management", src: "fa:handshake-o", link: "complaintsmanagement", page: 6, sidebar: true },
];

const AdminDashboard = () => {

  return (
    <div className='flex w-full'>
      <Sidebar menuItems={menuItems}/>

      <div className='flex flex-col w-[80%] items-center relative'>

            <SuperAdminHeader />
 
            <div className='w-[94%] flex flex-col justify-center absolute top-45'>
                <Outlet />
            </div>
        </div>

      
    </div>
  )
}

export default AdminDashboard
