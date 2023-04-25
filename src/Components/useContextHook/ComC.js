import React , { useContext } from 'react'
import { BioData } from './Handson12'
const ComC = () => {
  const name = useContext(BioData);
  return (
    <div>ComC {name}</div>
  )
}

export default ComC