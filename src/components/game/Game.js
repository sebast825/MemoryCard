import React from 'react';
import './game.scss';
import { useEffect, useState } from 'react';
import Box from '../box/Box';
import Header from '../header/Header';
import DotLoader from "react-spinners/DotLoader";
import {apiRequest} from '../../utils/api';
import {changeLayout} from '../../utils/changeLayout';


function Game(props) {
  const { category, setPreviousGame, setShowTab } = props
  const [numberClicked, setNumberClicked] = useState([])
  const [level, setlevel] = useState(1)
  const [points, setPoints] = useState(0)
  const [seFinish, setSeFinish] = useState(null)
  const [loading, setLoading] = useState(false)
  const [img, setImg] = useState({
    1: [],
    2: [],
    3: [],
    4: []
  })

  useEffect(() => {
    if (img[1] == "") apiRequest(category,setImg)

  }, [])

  useEffect(()=>{
    setLoading(true);
    setTimeout(() => {
      setLoading(false); 
    }, 500);
  
  },[level])

  useEffect(()=>{
    if(!loading)  changeLayout()

  },[loading])


  useEffect(() => {

    if (seFinish) {
      setPreviousGame([true, points])
      setShowTab('endGame')
    }
    else if (seFinish === false) {
      setPreviousGame([false, points])
      setShowTab('endGame')
    }
  }, [seFinish])

  const boxClicked = (e) => {
    imgSort()
    let imgClicked = wasImageClicked(e.id);
    if (imgClicked != undefined) { setSeFinish(false); return } else addImageClicked(e.id);
    let nextLevel = isNextLevel()
    if (nextLevel) setNextLevel();
   
  }

  const wasImageClicked = (number) => {
    const alreadyClicked = numberClicked.find(elem => elem == number);
    return alreadyClicked
  }

  const addImageClicked = (e) => {
    setNumberClicked([...numberClicked, e])
    incrementPoint()
  }

  const incrementPoint = () => {
    setPoints(points + 1)
  }

  const wasLastLevel = () => {
    return level == Object.keys(img).length
  }

  const goMenu = () => {
    // resetStats()
    setShowTab('category')

  }

  const isNextLevel = () => {
    const valueLength = img[level].length;
    // is +1 because the updated value reflect after, and if use useffect, will render 1 time before and will activate setNextLevel
    const numberClickedLength = numberClicked.length + 1
    return valueLength == numberClickedLength

  }

  const setNextLevel = () => {
    let lastLevel = wasLastLevel();
    if (lastLevel) return setSeFinish(true)
    setlevel(level + 1)
    setNumberClicked([])
  }

  const imgSort = () => {
    //don't need to use setImg because useState allow re order but not modify element
    img[level].sort(() => Math.random() - 0.5)
  }

  return (
    <div >
      {
        loading ?
          <div className="loading">

            <DotLoader
              color={"#fff"}
              loading={loading}
              speedMultiplier={1.5}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            <h2>Level {level}</h2>

          </div>
          :
          <div className="game">
            <Header points={points} goMenu={goMenu} />

            <div className='gamePhotos treePhotos' onUpdate={changeLayout} >

              {img[level].map((elem) => {
                return <Box val={elem} level={level} key={+new Date() + elem.id} boxClicked={boxClicked} />
              })}
            </div>
          </div>
      }
    </div>
  );
}

export default Game;