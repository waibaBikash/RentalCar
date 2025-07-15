import React, { useState } from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const Cars = () => {

  const [input , setInput] = useState('');
  return (
    <div>

      <div className='flex flex-col items-center py-20 bg-light max-md:px-4'>
        <Title title='Available Cars' subTitle='Browse our selection of premium vehicles available for your next advnenture' />

        <div className='flex items-center bg-white px-4 mt-6 max-w-140 w-full h-12 rounded-full shadow'>
          <img src={assets.search_icon} alt="" className='w-4.5 h4.5 mr-2' />
          <input onClick={(e)=> setInput(e.target.value)} value={input} type="text" placeholder='Search by make, mopdel, or features' className='w-full h-full outline-none text-gray-500' />
          <img src={assets.filter_icon} alt="" className='w-4.5 h4.5 ml-2' />
           
        </div>

      </div>

      <div></div>

    </div>
  )
}

export default Cars