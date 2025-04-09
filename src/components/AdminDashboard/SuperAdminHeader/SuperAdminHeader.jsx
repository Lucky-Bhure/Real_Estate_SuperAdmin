import React, { useEffect, useState } from 'react';
import { FiSearch } from "react-icons/fi";
import { BsBell } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { MdArrowBackIos } from "react-icons/md";
import { useLocation, useNavigate } from 'react-router-dom';


const SuperAdminHeader = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const [heading, setHeading] = useState({
    title: "",
    back: false
  });

  useEffect(() => {
    switch(location.pathname) {
      case "/superadmin": setHeading({title: "Hello, Super Admin", back: false});
      break;
      case "/superadmin/customers": setHeading({title: "Buyer’s Statistics", back: true});
      break;
      case "/superadmin/agents": setHeading({title: "Agent’s Statistics", back: true});
      break;
      case "/superadmin/builders": setHeading({title: "Builder’s Statistics", back: true});
      break;
      case "/superadmin/usermanagement": setHeading({title: "User Management - Buyers", back: false});
      break;
      case "/superadmin/usermanagement/seller": setHeading({title: "User Management - Seller", back: true});
      break;
      case "/superadmin/usermanagement/seller/recentregistrations": setHeading({title: "User Management - Seller", back: true});
      case "/superadmin/usermanagement/seller/sellersdetails": setHeading({title: "User Management - Seller", back: true});
      break;
      case "/superadmin/propertylisting": setHeading({title: "Property Listing", back: false});
      break;
      case "/superadmin/propertylisting/propertyrequestlist": setHeading({title: "Property Listing", back: true});
      break;
      case "/superadmin/propertydetails": setHeading({title: "Property Details", back: true});
      break;
      case "/superadmin/advertisements": setHeading({title: "Advertisements", back: false});
      break;
      case "/superadmin/advertisements/approvedlist": setHeading({title: "Advertisements Details", back: true});
      break;
      case "/superadmin/subscriptionmanagement": setHeading({title: "Subscription Managements", back: false});
      break;
      case "/superadmin/subscriptionmanagement/edit": setHeading({title: "Edit Subscription Managements", back: true});
      break;
      case "/superadmin/revenuemodel": setHeading({title: "Revenue Model", back: false});
      break;
      case "/superadmin/revenuemodel/transactions": setHeading({title: "Transaction History", back: true});
      break;
      case "/superadmin/revenuemodel/transactiondetails": setHeading({title: "Transaction Details", back: true});
      break;
      case "/superadmin/complaintsmanagement": setHeading({title: "Complaints Management", back: false});
      break;
      case "/superadmin/complaintsmanagement/complaint": setHeading({title: "View Complaints ", back: true});
      break;
    }
  },[location.pathname]);

  const handleBack = () => {
    navigate(-1);
  }

  return (
    <div className='bg-[#00a58e] text-white ml-30p w-full px-8 py-10 h-60 flex flex-col'>
      {/* Search bar */}
      <div className="flex justify-between items-center">
        <div className="flex items-center bg-white text-gray-700 rounded-sm px-2 py-2 w-110">
          <FiSearch color='#00A58E' size={24} />
          <input className="outline-none w-full pl-1.5 text-l font-bold-" type="text" placeholder='Search Here' />
        </div>

        {/* User details */}
        <div className="flex items-center space-x-4">
          {/* <div className='bg-[#C9ECE7] p-1.5 rounded-full'>
            <RxChatBubble color='black' size={22}/>
          </div> */}
          <div className='bg-[#C9ECE7] p-1.5 rounded-full'>
            <BsBell color='black' size={22} />
          </div>
          <div className='bg-[#C9ECE7] p-1.5 rounded-full'>
            <VscAccount color='black' size={24} />
          </div>
          <div>
            <span className="block text-sm font-semibold">Mahi Sharma</span>
            <span className="text-sm">mahisharma1@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Hello, Super Admin */}
      <div className="mt-5 mb-5 flex items-center gap-2 h-min">
        {heading.back ? <MdArrowBackIos size={24} onClick={handleBack}/>:<></>}
        <h2 className="text-2xl font-[500]">{heading.title}</h2>
      </div>
    </div>
  );
}

export default SuperAdminHeader;
