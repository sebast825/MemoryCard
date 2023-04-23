import React from 'react';
import './endGame.scss';
import Button from '../button/Button';

function Endgame(props) {
   const { previousGame, setShowTab } = props;
   const [win, points] = previousGame;

   return (
      <div className='endGame'>
         <div className='endGame__text'>
            {win ? <h1>You Win!</h1> : <h1>You Lose!</h1>}
            <h2>Points: {points}</h2>

         </div>
         <div className='buttonContainer'>
            <Button clas='button button--light' setShowTab={setShowTab} view='game' text="Play Again"/>
            <Button clas='button button--dark' setShowTab={setShowTab} view='category' text="Menu"/>

         </div>



      </div>
   )
}

export default Endgame
