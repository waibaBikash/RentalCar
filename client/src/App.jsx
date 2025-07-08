import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import CarDetails from './pages/CarDetails';
import Cars from './pages/Cars';
import Mybookings from './pages/Mybookings';

const App = () => {

  const [showLogin, setShowLogin] = useState(false);
  const isOwnerPath = useLocation().pathname.startsWith('/owner');
  return (
    <>
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin} />}

       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/car-details/:id" element={<CarDetails />} />
        <Route path="/my-bookings" element={<Mybookings />} />
        <Route path="/owner/cars" element={<OwnerCars />} />
        <Route path="/owner/addcar" element={<AddCar />} />
        <Route path="/owner/bookings" element={<OwnerBookings />} />
        <Route path="/login" element={<Login setShowLogin={setShowLogin} />} />
        <Route path="/register" element={<Register setShowLogin={setShowLogin} />} />
       </Routes>
    </>
  )
}

export default App