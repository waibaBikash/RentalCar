import express from 'express'
import { changeBookingStatus, checkAvailabilityOfCar, createBooking, getOwnerBookings, getUserBookings } from '../controllers/bookingController.js';
import { protect } from '../middleware/auth.js';

const bookingsRouter = express.Router();

bookingsRouter.post('/check-availability', checkAvailabilityOfCar)
bookingsRouter.post('/create', protect, createBooking)
bookingsRouter.get('/user', protect, getUserBookings)
bookingsRouter.get('/owner', protect, getOwnerBookings)
bookingsRouter.post('/change-status', protect, changeBookingStatus)


export default bookingsRouter;