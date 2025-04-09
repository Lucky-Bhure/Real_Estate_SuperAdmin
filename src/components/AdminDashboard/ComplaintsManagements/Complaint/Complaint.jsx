import React from 'react'
import { FiSearch } from 'react-icons/fi'


const users = [
  {
    image: "/profile1.jpeg",
    name: "Manisha Sharma",
    type: "Customer"
  },
  {
    image: "/profile2.jpeg",
    name: "Mahir Sharma",
    type: "Agent"
  },
  {
    image: "/profile3.jpeg",
    name: "Mahir Sharma",
    type: "Builder"
  },
]

const Complaint = () => {
  return (
    <div className='w-full flex h-150 mb-10 bg-white rounded-xl'>
      {/* Left Division */}
      <div className='w-[26%] flex flex-col border-r-2 border-b-2 px-4 py-6 border-[#00A58E]'>
        <div className="flex items-center bg-white text-gray-700 border-1 border-[#E8EDF1] rounded-sm px-2 py-2 w-full">
          <FiSearch color='#00A58E' size={24} />
          <input className="outline-none w-full pl-1.5 text-l font-bold-" type="text" placeholder='Search Here' />
        </div>

        <ul className='w-full flex flex-col gap-6 mt-6'>
          {
            users.map((user, index) => <li key={index} className='w-full flex items-center gap-4 px-2'>
              <img src={user.image} alt="profile-image" className='w-10 h-10 rounded-full' />
              <div className='flex flex-col'>
                <p className='text-lg font-[500]'>{user.name}</p>
                <p className='text-sm font-[400] text-[#697D95]'>{user.type}</p>
              </div>
            </li>)
          }
        </ul>
      </div>

      {/* Right Division */}
      <div className='w-[74%]'>
        <div className='w-full flex items-center gap-4 px-4 py-4 border-b-2 border-[#00A58E]'>
          <img src="/profile1.jpeg" alt="profile-image" className='w-10 h-10 rounded-full' />
          <div className='flex flex-col'>
            <p className='text-lg font-[500]'>Mahi Sharma</p>
            <p className='text-sm font-[400] text-[#697D95]'>Customer</p>
          </div>
        </div>

        <div className='w-full flex items-center gap-4 px-4 py-4'>
            <div className='flex gap-8 mt-14'>
              <img src="/profile1.jpeg" alt="profile-image" className='w-10 h-10 rounded-full' />
              <p className='w-80 bg-[#CCEDE8] p-6 rounded-sm text-[#5E6670] text-sm border-1 border-[#7F8786]'>Lorem ipsum dolor sit amet consectetur. Sit hendrerit felis a id magna elit faucibus sit egestas. Elementum turpis felis tristique vestibulum sed integer commodo pellentesque</p>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Complaint
