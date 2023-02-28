import React from 'react'

function Header(props) {

   const {points} = props;
  return (
   <div className='header'>
   <a href='https://presentacionsm.netlify.app/' target="_blank">Portfolio</a>

   <div className='showPoints'>
   <p>Points: {points}</p>

   </div>
   </div>
  )
}

export default Header
