import React, { useEffect, useState } from 'react'

function Box(props) {

  const {val, updateData ,saveNumber} = props;

  const [newval, setNewVal] = useState(val)
  useEffect(() => {
    setNewVal(val)
  })

  const verify = () => {
    console.log(val, newval)
  }
  return (
    <div className='box' onClick={() => {updateData();saveNumber(val)}}>
      <p>{newval}</p>
    </div>
  )
}

export default Box



/*
const agregarDato = () => {
  // console.log(value.target.id)
  setNewVal(val + 1)
  console.log(val, newval)

  // setValue([...val,value.target.id])
}*/