import React from 'react'

function Header(props) {

   const {points,maxPoints} = props;
  return (
   <div className='header'>
   <a href='https://presentacionsm.netlify.app/' target="_blank">Portfolio</a>

   <div className='showPoints'>
   <p>Points: {points}</p>
   <p>Max Points: {maxPoints}</p>
   </div>
   </div>
  )
}

export default Header
