import React, { createContext, useState, useContext } from 'react';

const countContext=createContext();
export default function CountContextProvider({children}) {
    const [count,setCount]=useState(0);
    return(
        <countContext.Provider value={{count,setCount}}>
            {children}
        </countContext.Provider>
    );
}

export function useCountContext() {
    return useContext(countContext);
}