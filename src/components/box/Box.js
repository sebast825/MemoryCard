import React, { useEffect, useState } from 'react'
import VanillaTilt from "vanilla-tilt";
import './box.scss'

function Box(props) {

  const {val,boxClicked} = props;

  const [newval, setNewVal] = useState(val)
 

    useEffect(() => {
      VanillaTilt.init(document.querySelectorAll(".box"), {
        max: 15,
        speed: 1000
      });
    }, []);
  


  return (
    <div  className='box'  onClick={() => {boxClicked(val);}} >
      {/* <p>{newval}</p> */}
      
       <img src={val.urls.small} alt={val.alt_description} /> 
  
    </div>
  )
}

export default Box

