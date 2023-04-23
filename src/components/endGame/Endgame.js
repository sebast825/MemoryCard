import React, { useEffect } from 'react'
import './endGame.scss';

function Endgame(props) {
   const { previousGame, setShowTab } = props
   const [win, points] = previousGame
   useEffect(() => {
      // console.log(previousGame)
      // console.log(win, points)
   }, [])
   return (
      <div className='endGame'>
         <div className='endGame__text'>
            {win ? <h1>You Win!</h1> : <h1>You Lose!</h1>}
            <h2>Points: {points}</h2>

         </div>
         <div className='buttonContainer'>
         <a className='button button--light' onClick={() => { setShowTab('game') }}>Play Again</a>
            
            <a className='button button--dark' onClick={() => { setShowTab('category') }}>Menu</a>
         </div>



      </div>
   )
}

export default Endgame
