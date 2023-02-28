import React, { useEffect } from 'react'

function Endgame(props) {
   const { previousGame, setShowTab } = props
   const [win, points ] = previousGame
   useEffect(()=>{
      console.log(previousGame)
      console.log(win,points)
   },[])
   return (
      <div>
         {win && <div>
            <h2>Yoy Win!</h2>
            <h4>Points: {points}</h4>

            <div className='buttonContainer'>
               <button onClick={() => { setShowTab('category') }}>Menu</button>
               <button onClick={() => { setShowTab('game') }}>Play Again</button>
            </div>


         </div>}
         {!win && <div>
            <h2>Yoy Lose!</h2>
            <h4>Points: {points}</h4>

            <div className='buttonContainer'>
               <button onClick={() => { setShowTab('category') }}>Menu</button>
               <button onClick={() => { setShowTab('game') }}>Play Again</button>
            </div>
            </div>}
      </div>
   )
}

export default Endgame
