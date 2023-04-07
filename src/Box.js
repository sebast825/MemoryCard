import React, { useEffect, useState } from 'react'
import VanillaTilt from "vanilla-tilt";


function Box(props) {

  const {val ,level,boxClicked} = props;

  const [newval, setNewVal] = useState(val)
  useEffect(() => {
    setNewVal(val)
  })

    useEffect(() => {
      VanillaTilt.init(document.querySelectorAll(".box"), {
        max: 15,
        speed: 1000
      });
    }, []);
  


  return (
    <div  className='box'  onClick={() => {boxClicked(val);}}>
      {/* <p>{newval}</p> */}
      
       <img src={val.urls.small}/> 
  
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