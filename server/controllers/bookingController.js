
import { Promise } from "mongoose";
import Booking from "../models/Booking.js"
import Car from "../models/Car.js";

// Function to check Availability of car for a given Data

const checkAvailability = async (car, pickupDate, returnDate)=>{
  const bookings = await Booking.find({
    car,
    pickupData: {$lte: pickupDate},
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

// API to Create Booking
export const createBooking = async (req, res)=>{
  try {
    const {_id} = req.user;
    const {car, pickupData, returnData} = req.body;

    const isAvailable = await checkAvailability(car, pickupData, returnData)
    if(!isAvailable){
      return res.json({success: false, message: "Car is not available"})
    }

    const carData = await Car.findById(car)

    // Calculate price based on pickupDate and returnDate
    const picked = new Date(pickupData);
    const returned = new Date(returnData);
    const noOfDays = Math.ceil((returned - picked) / (1000 * 60 * 60 * 24))
    const price = carData.pricePerDay * noOfDays;

    await Booking.create({car, owner: carData.owner, user: _id, pickupData, returnData, price})
    res.json({success: true, message: "Booking Created"})
  } catch (error) {
    console.log(error.message);
    res.json({success: false, message: error.message})
  }
}


// API to List Use4 Bookings

export const getUserBookings = async (req, res)=>{
  try {
    const {_id} = req.user;
    const bookings = await Booking.find({user: _id}).populate("car").sort({createdAt: -1})
    res.json({success: true, bookings})
  } catch (error) {
    console.log(error.message);
    res.json({success: false, message: error.message})
  }
}

// API to get Owner Bookings

export const getOwnerBookings = async (req, res)=>{
  try {
    if(req.user.role !== 'owner'){
      return res.json({success: false, message: "Unauthorized"})
    }
    const bookings = await Booking.find({owner: req.user._id}).populate('car user').select("-user.password").sort({createdAt: -1})
    res.json({success: true, bookings})
  } catch (error) {
    console.log(error.message);
    res.json({success: false, message: error.message})
  }
}