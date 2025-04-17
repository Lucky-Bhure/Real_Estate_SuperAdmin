import { Outlet } from "react-router-dom"



const Buyers = () => {

  return (
    <section className='w-full flex flex-col justify-center'>
      <Outlet />
    </section>
  )
}

export default Buyers
