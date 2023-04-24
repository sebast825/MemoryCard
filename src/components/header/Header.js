import React from 'react';
import './header.scss';

function Header(props) {

   const {points,goMenu} = props;
  return (
   <div className='header'>
   <a href='https://presentacionsm.netlify.app/' target="_blank">Portfolio</a>

   <div className='showPoints'>
   <p>Points: {points}</p>

   </div>
   <h2 onClick={()=>{goMenu()}}>Menu</h2>
   </div>
  )
}

export default Header
