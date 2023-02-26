import React, { useEffect, useState } from 'react'


function Box(props) {

  const {val ,boxClicked} = props;
  const [background, setBackground] = useState('white');

  const [newval, setNewVal] = useState(val)
  useEffect(() => {
    setNewVal(val)
  })
  const [data, setData] = useState(null);
  
  


  return (
    <div  className='box' style={{ backgroundColor: background }} onClick={() => {boxClicked(val)}}>
      {/* <p>{newval}</p> */}
       <img src={val.urls.small}/> 
      {/* <p>{val}</p> */}
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