import { createContext, useContext } from "react";
import axios from 'axios';
import {toast} from 'react-hot-toast'


axios.defaults.baseURL = import.meta.env.VITE_BASE_URL


export const Appcontext = createContext();


export const AppProvider =({ Children })=>{

  const value = {

  }

  return <AppContextProvider>
     { Children }
  </AppContextProvider>
}

export const useAppContext = ()=>{

  return useContext(Appcontext)
}