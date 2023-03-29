import React, { createContext } from "react";
import { data } from '../data'
import { useEffect } from "react";
import { useState } from "react";
export const UserContext = createContext();
const UserProvider = ({ children }) => {
    const [users, setusers] = useState(()=>{
      const localData=localStorage.getItem('datainlocal')
      return localData ? JSON.parse(localData): data
    })
    useEffect(() => {
      localStorage.setItem('datainlocal',JSON.stringify(users))
    }, [users])
    


    return (
      <UserContext.Provider value={{ users,setusers}}>
        {children}
      </UserContext.Provider>
    );
  };

export default UserProvider