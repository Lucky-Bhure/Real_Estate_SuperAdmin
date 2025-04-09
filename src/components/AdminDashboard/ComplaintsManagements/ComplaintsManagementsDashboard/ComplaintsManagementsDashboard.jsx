import React from 'react'
import { MdEmail } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const ComplaintsManagementsDashboard = () => {

    const navigate = useNavigate();

    const handleButton = () => {
        alert("Currently Under Developement");
    }

    const handleClick = () => {
        navigate("/superadmin/complaintsmanagement/complaint");
    }

    return (
        <>
            <div className='w-full bg-white px-14 py-12 pb-40  mb-10 rounded-lg shadow-md '>
                <div className='w-full'>
                    <div className='w-full' >
                        <div className='w-full flex mb-2' >
                            <div className='w-3/8'>
                                <p className='text-start text-lg font-[600]' >Name</p>
                            </div>
                            <div className='w-1/8'>
                                <p className='text-start text-lg font-[600]'>Date</p>
                            </div>
                            <div className='w-3/8'>
                            </div>
                        </div>
                    </div>
                    <div className='w-full'>
                        {
                            [1, 2, 3, 4, 5, 6].map((item) => <div key={item} className='w-full border-b-2 border-[#E9E7FD] py-4 flex items-center'>
                                <div className=' w-3/8 flex  gap-6'>
                                    <img src="/propertyImage.jpeg" alt="propertyImage" className='w-14 h-14 rounded-xl' />
                                    <div className='w-fit flex flex-col gap-2'>
                                        <p className='text-l font-[600] cursor-default'>Name</p>
                                        <div className='flex gap-2'>
                                            <MdEmail size={24} className='text-[#00A58E] ' />
                                            <p className='text-sm text-[#5E6670]'>Email@123</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-2/8'>
                                    <p className='text-md text-[#5E6670]'>Feb 25, 2025 19:28</p>
                                </div>
                                <div className=' w-3/8 flex py-1 justify-end gap-4'>
                                    <button className='bg-[#00A58E] text-white px-8 py-3 text-sm rounded-sm' onClick={handleButton}>Mark As Resolved</button>
                                    <button className='bg-[#DD2025] text-white px-8 py-3 text-sm rounded-sm' onClick={handleClick}>View</button>
                                </div>
                            </div>)
                        }
                    </div>
                </div>

            </div>
        </>
    )
}

export default ComplaintsManagementsDashboard
