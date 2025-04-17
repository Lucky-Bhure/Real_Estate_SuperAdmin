import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react'


const registrations = [
    {
        id: "#527269", img: "/profile1.jpeg", userName: "Ketan", locality: "Pune", lookingFor: "Rental Properties", mobile: "+91 12345 67890", date: "12-04-2025"
    },
    {
        id: "#748526", img: "/profile2.jpeg", userName: "Siddhart", locality: "Mumbai", lookingFor: "Residential", mobile: "+91 12345 67890", date: "12-04-2025"
    },
    {
        id: "#748526", img: "/profile3.jpeg", userName: "Sarah", locality: "Nagpur", lookingFor: "Commercial", mobile: "+91 12345 67890", date: "12-04-2025"
    },
    {
        id: "#527269", img: "/profile1.jpeg", userName: "Ketan", locality: "Pune", lookingFor: "Rental Properties", mobile: "+91 12345 67890", date: "12-04-2025"
    },
    {
        id: "#748526", img: "/profile2.jpeg", userName: "Siddhart", locality: "Mumbai", lookingFor: "Residential", mobile: "+91 12345 67890", date: "12-04-2025"
    },
    {
        id: "#748526", img: "/profile3.jpeg", userName: "Sarah", locality: "Nagpur", lookingFor: "Commercial", mobile: "+91 12345 67890", date: "12-04-2025"
    },
    {
        id: "#527269", img: "/profile1.jpeg", userName: "Ketan", locality: "Pune", lookingFor: "Rental Properties", mobile: "+91 12345 67890", date: "12-04-2025"
    },
    {
        id: "#748526", img: "/profile2.jpeg", userName: "Siddhart", locality: "Mumbai", lookingFor: "Residential", mobile: "+91 12345 67890", date: "12-04-2025"
    },
    {
        id: "#748526", img: "/profile3.jpeg", userName: "Sarah", locality: "Nagpur", lookingFor: "Commercial", mobile: "+91 12345 67890", date: "12-04-2025"
    },
]

const RecentRegisteredBuyers = ({ value = registrations.length }) => {

    const handleButton = () => {
        alert("Currently Under Developement");
    }

    return (
        <table className='w-full flex flex-col mt-4'>
            <thead>
                <tr className='w-full flex justify-between border-b-2 border-[#E9E7FD]'>
                    <th className='w-1/12'>
                        <p className='text-start px-[0.7rem] font-[600]'>ID</p></th>
                    <th className='w-2/12'>
                        <p className='text-start px-[0.7rem] font-[600]'>Name</p></th>
                    <th className='w-2/12'>
                        <p className='text-start px-[0.7rem] font-[600]'>Locality</p></th>
                    <th className='w-2/12'>
                        <p className='text-start px-[0.7rem] font-[600]'>Looking For</p></th>
                    <th className='w-2/12'>
                        <p className='text-start px-[0.7rem] font-[600]'>Mobile</p></th>
                    <th className='w-2/12'>
                        <p className='font-[600]'>Date</p></th>
                </tr>
            </thead>
            <tbody>
                {registrations.slice(0, value).map((registration, index) => (
                    <tr
                        key={index}
                        className="w-full flex justify-between border-b-2 border-[#E9E7FD] text-[#666666] items-center"
                    >
                        <td className="w-1/12">
                            <p className="text-start">{registration.id}</p>
                        </td>
                        <td className="w-2/12 flex gap-4 items-center">
                            <img src={registration.img} alt="User" className="w-10 h-10 rounded-full" />
                            <p className="text-black">{registration.userName}</p>
                        </td>
                        <td className="w-2/12">
                            <p className="text-start">{registration.locality}</p>
                        </td>
                        <td className="w-2/12">
                            <p className="text-start">{registration.lookingFor}</p>
                        </td>
                        <td className="w-2/12">
                            <p className="text-start">{registration.mobile}</p>
                        </td>
                        <td className="w-2/12 flex items-center justify-center">
                            <p className="text-start">{registration.date}</p>
                        </td>
                    </tr>
                ))}
            </tbody>

        </table>
    )
}

export default RecentRegisteredBuyers
