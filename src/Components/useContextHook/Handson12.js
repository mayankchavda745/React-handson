import React, { createContext } from 'react'
import ComA from './ComA'

export const BioData = createContext();

const Handson12 = () => {
  return (
    <>
      <BioData.Provider value={"Mayank"}>
        <ComA />
      </BioData.Provider>
    </>
  )
}

export default Handson12