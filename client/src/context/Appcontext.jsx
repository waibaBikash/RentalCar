import { createContext, useContext } from "react";


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