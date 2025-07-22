import React, { useState } from 'react'
import Title from '../../components/owner/Title';
import { assets } from '../../assets/assets';

const AddCar = () => {

  const [image, setImage] = useState(null);
  const [car, setCar] = useState({
    brand: '',
    model: '',
    year: 0,
    pricePerDar: 0,
    transmission: '',
    fuel_type: '',
    seating_capacity: 0,
    description: '',
    location: '',
  });

  const onsubmitHandler = async (e) => {
    e.preventDefault();
  }
  return (
    <div className='px-4 py-10 md:px-10 flex-1'>
       <Title title='Add New Car' subTitle='Fill in details to list a new car for booking, including pricing, availability, and car specifications.' />

       <form onSubmit={onsubmitHandler} className='flex flex-col gap-5 text-gray-500 text-sm mt-6 max-w-xl'>
          
           {/* Car Image */}

           <div className='flex items-center gap-2 w-full'>
             <label htmlFor="car-image">
               <img src={image ? URL.createObjectURL(image) : assets.upload_icon} alt="" className='h-14 rounded cursor-pointer' />
                <input type="file" id='car' accept='image/*' hidden onChange={e=> setImage(e.target.files[0])} />
             </label>
             <p className='text-sm text-gray-500'>Upload a picture of your car</p>
           </div>
       </form>

       {/* Car Brands & Models */}
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
           <div className='flex flex-col w-full'>
              <label>Brand</label>
              <input className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.brand} onChange={e=> setCar({...car, brand: e.target.value})} type="text" placeholder='e.g. BMW, Mercedes, Audi...' required/>
           </div>
           <div className='flex flex-col w-full'>
              <label>Modle</label>
              <input className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.model} onChange={e=> setCar({...car, model: e.target.value})} type="text" placeholder='e.g. X5, E-class, M4...' required/>
           </div>
           
        </div>
    </div>
  )
}

export default AddCar