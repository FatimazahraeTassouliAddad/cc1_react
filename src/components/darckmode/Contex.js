import React, { createContext, useState } from 'react'

export default function Contex({children}) {
    const [dark,setdark]=useState(false)
    const [Long,setLang]=useState("fr")
    if(dark){
      document.body.classList.add('dark-body');
  } else {
      document.body.classList.remove('dark-body');
  }
  return (
    <Modepage.Provider value={{dark,setdark,Long,setLang}}>
        {children}
    </Modepage.Provider>
  )
}
export const Modepage=createContext();
