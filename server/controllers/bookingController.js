
import Booking from "../models/Booking.js"

// Function to check Availability of car for a given Data

const checkAvailability = async (car, pickupDate, returnDate)=>{
  const bookings = await Booking.find({
    car,
    pickupData: {$lte: returnDate},
    returnData: {$gte: returnDate},
  })

  return bookings.length === 0;
}

