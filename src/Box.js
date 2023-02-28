import React, { useEffect, useState } from 'react'


function Box(props) {

  const {val ,level,boxClicked} = props;
  const [background, setBackground] = useState('white');

  const [newval, setNewVal] = useState(val)
  useEffect(() => {
    setNewVal(val)
  })

  
  
  const updateBG = () => {
    setBackground('red')
  }

  return (
    <div  className='box' style={{ backgroundColor: background }} onClick={() => {boxClicked(val);}}>
      {/* <p>{newval}</p> */}
       <img src={val.urls.small}/> 
       <p>{val.id}</p> 
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