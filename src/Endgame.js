import React, { useEffect } from 'react'

function Endgame(props) {
   const { previousGame, setShowTab } = props
   const [win, points] = previousGame
   useEffect(() => {
      console.log(previousGame)
      console.log(win, points)
   }, [])
   return (
      <div className='endGame'>
         <div className='endGame__text'>
            {win ? <h2>You Win!</h2> : <h2>You Lose!</h2>}
            <h4>Points: {points}</h4>

         </div>
         <div className='buttonContainer'>
            <button onClick={() => { setShowTab('category') }}>Menu</button>
            <button onClick={() => { setShowTab('game') }}>Play Again</button>
         </div>



      </div>
   )
}

export default Endgame
