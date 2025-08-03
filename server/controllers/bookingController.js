
import { Promise } from "mongoose";
import Booking from "../models/Booking.js"
import Car from "../models/Car.js";

// Function to check Availability of car for a given Data

const checkAvailability = async (car, pickupDate, returnDate)=>{
  const bookings = await Booking.find({
    car,
    pickupData: {$lte: returnDate},
    returnData: {$gte: returnDate},
  })

  return bookings.length === 0;
}

// API to Check Availabilituy of Cars for the given Date and Location

export const checkAvailabilityOfCar = async ()=>{
   try {
     const {location, pickupData, returnData}= req.body;

     // fetch all availability cars for the given location
     const cars = await Car.find({location, isAvailable: true})

     // check car availability for the given date range using promise
     const checkAvailableCarPromises = cars.map(async(car)=>{
       const isAvailable = await checkAvailability(car._id, pickupData, returnData)
       return {...car._doc, isAvailable: isAvailable}
     })

     let availableCars = await Promise.all(checkAvailableCarPromises);
     availableCars = availableCars.filter(car => car.isAvailable === true)

     res.json({success: true, availableCars})

   } catch (error) {
    console.log(error.message);
    res.json({success: false, message: error.message})
   }
}
