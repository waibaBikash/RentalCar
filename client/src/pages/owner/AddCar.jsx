import React, { useState } from 'react'
import Title from '../../components/owner/Title';
import { assets } from '../../assets/assets';

const AddCar = () => {

  const currency = import.meta.env.VITE_CURRENCY;

  const [image, setImage] = useState(null);
  const [car, setCar] = useState({
    brand: '',
    model: '',
    year: 0,
    pricePerDay: 0,
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
           {/* Car Year, Price, and Category */}
           <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                <div className='flex flex-col w-full'>
              <label>Year</label>
              <input className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.year} onChange={e=> setCar({...car, year: e.target.value})} type="number" placeholder='2025' required/>
           </div>
              <div className='flex flex-col w-full'>
              <label>Daily Price ({currency})</label>
              <input className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.pricePerDay} onChange={e=> setCar({...car, pricePerDay: e.target.value})} type="number" placeholder='100' required/>
              </div>
              <div className='flex flex-col w-full'>
              <label>Category</label>
                <select onChange={e=> setCar({...car, category: e.target.value})} value={car.category} className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'>
                   <option value="">Select a category</option>
                   <option value="Sedan">Sedan</option>
                   <option value="SUV">SUV</option>
                   <option value="Van">Van</option>
                </select>
              </div>
           </div>
            {/* Car Transmission, Fuel Type, Capacity */}

             <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                <div className='flex flex-col w-full'>
              <label>Transmission</label>
                <select onChange={e=> setCar({...car, transmission: e.target.value})} value={car.transmission} className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'>
                   <option value="">Select a transmission</option>
                   <option value="Automatic">Automatic</option>
                   <option value="Manual">Manual</option>
                   <option value="Semi-Automatic">Semi-Automatic</option>
                </select>
              </div>
                <div className='flex flex-col w-full'>
              <label>Fuel Type</label>
                <select onChange={e=> setCar({...car, fuel_type: e.target.value})} value={car.fuel_type} className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'>
                   <option value="">Select a fuel type</option>
                   <option value="Gas">Gas</option>
                   <option value="Diesel">Diesel</option>
                   <option value="Petrol">Petrol</option>
                   <option value="Electric">Electric</option>
                </select>
              </div>
                 <div className='flex flex-col w-full'>
              <label>Seating Capacity</label>
              <input className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.seating_capacity} onChange={e=> setCar({...car, seating_capacity: e.target.value})} type="number" placeholder='4' required/>
           </div>
             </div>

            {/* Car Location */}
            <div className='flex flex-col w-full'>
                  <div className='flex flex-col w-full'>
              <label>Location</label>
                <select onChange={e=> setCar({...car, location: e.target.value})} value={car.location} className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'>
                   <option value="">Select a location</option>
                   <option value="New York">New York</option>
                   <option value="Los Angels">Los Angels</option>
                   <option value="Houston">Houston</option>
                   <option value="Sydney">Sydney</option>
                </select>
              </div>
            </div>
            {/* Car Description */}

            <div className='flex flex-col w-full'>
              <label>Description</label>
              <textarea rows={5} className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.description} onChange={e=> setCar({...car, description: e.target.value})} placeholder='e.g. A luxirious SUV with a spacious interior and a powerful engine.' required></textarea>
              </div>

              <button className='flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-md font-medium w-max cursor-pointer' type='submit'>
                 <img src={assets.tick_icon} alt="" />
                 List Your Car
              </button>
         </form>
    </div>
  )
}

export default AddCar