import React, { useEffect, useState } from 'react'
import Game from './Game'
import Category from './Category'
import Endgame from './Endgame'
function App() {

   const [category, setCategory] = useState()
   const [showTab, setShowTab] = useState('category')
   const [endView, setEndView] = useState(false)
   const [previousGame,setPreviousGame] = useState([false,1])
   useEffect(()=>{
      console.log(category)
   },[category])
   

  return (
    <div>
 {showTab === 'category' && <Category setCategory={setCategory} setShowTab={setShowTab}/>}
     {showTab == 'game' && <Game category={category} setShowTab={setShowTab} setPreviousGame={setPreviousGame}/> }
     {showTab == 'endGame' && <Endgame setShowTab={setShowTab} previousGame={previousGame}/>}

    </div>
  )
}

export default App
