import React, { useEffect, useState } from 'react'


function Box(props) {

  const {val, updateData ,boxClicked} = props;
  
  const [newval, setNewVal] = useState(val)
  useEffect(() => {
    setNewVal(val)
  })
  const [data, setData] = useState(null);
  
  


  return (
    <div  className='box' onClick={() => {updateData();boxClicked(val)}}>
      {/* <p>{newval}</p> */}
      {/* <img src={val.urls.small}/> */}
      <p>{val}</p>
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