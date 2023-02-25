import React, { useEffect, useState } from 'react'

const clientId = 'BTtUfQ1wl6hb1I3inmzidGfF0qFLvvN71JApPdcu1EQ'
const endPoint = `https://api.unsplash.com/photos/?client_id=${clientId}`
function Box(props) {

  const {val, updateData ,saveNumber} = props;

  const [newval, setNewVal] = useState(val)
  useEffect(() => {
    setNewVal(val)
  })
  const [data, setData] = useState(null);
  
  
    fetch(endPoint)
      .then((response)=> response.json())
      .then((jsonData)=>{
        setNewVal(jsonData[0].urls.small)
      })
      .catch((eror)=>console.log('error: ',eror))

 
  return (
    <div className='box' onClick={() => {updateData();saveNumber(val)}}>
      {/* <p>{newval}</p> */}
      <img src={newval}/>
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