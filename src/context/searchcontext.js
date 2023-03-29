import React, { createContext } from "react";
import { useState } from "react";
export const SContext = createContext();
const SProvider = ({ children }) => {
  const [filter,setfilter]=useState('')
    return (
      <SContext.Provider value={{ filter,setfilter}}>
        {children}
      </SContext.Provider>
    );
  };

export default SProvider