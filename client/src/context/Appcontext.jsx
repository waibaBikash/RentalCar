import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';
import {toast} from 'react-hot-toast'
import { useNavigate } from "react-router-dom";


axios.defaults.baseURL = import.meta.env.VITE_BASE_URL


export const Appcontext = createContext();


export const AppProvider =({ Children })=>{

  const navigate = useNavigate()
  const currency = import.meta.VITE_CURRENCY

  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [isOwner, setIsOwner] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const [cars, setCars] = useState([])

  // Function to check if user is logged in

  const  fetchUser = async ()=>{
   try {
     const {data} = await axios.get('/api/user/data')
     if(data.success){
      setUser(data.user)
      setIsOwner(data.user.role == 'owner')
     } else{
      navigate('/')
     }
   } catch (error) {
     toast.error(error.message)
   }
  }
   // Useeffect to retrieve the token from localStorage

   useEffect(()=>{
    const token = localStorage.getItem('token')
    setToken(token)
   },[])
  const value = {
     navigate, currency,
  }

  return <AppContextProvider value={value}>
     { Children }
  </AppContextProvider>
}

export const useAppContext = ()=>{

  return useContext(Appcontext)
}