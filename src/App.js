import React, { useEffect, useState } from 'react'
import './App.scss';

import Game from './components/game/Game'
import Category from './components/category/Category'
import Endgame from './components/endGame/Endgame'
function App() {

   const [category, setCategory] = useState()
   const [showTab, setShowTab] = useState('category')
   const [previousGame, setPreviousGame] = useState([false, 1])


   return (
      <div>
         {showTab === 'category' && <Category setCategory={setCategory} setShowTab={setShowTab} />}
         {showTab == 'game' && <Game category={category} setShowTab={setShowTab} setPreviousGame={setPreviousGame} />}
         {showTab == 'endGame' && <Endgame setShowTab={setShowTab} previousGame={previousGame} />}

      </div>
   )
}

export default App
