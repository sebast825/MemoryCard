import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { useEffect, useState } from 'react';
import Box from './Box';
import Header from './Header';

const clientId = 'BTtUfQ1wl6hb1I3inmzidGfF0qFLvvN71JApPdcu1EQ'

function Game(props) {
  const { category, setPreviousGame, setShowTab } = props
  const [numberClicked, setNumberClicked] = useState([])
  const [level, setlevel] = useState(1)
  const [points, setPoints] = useState(0)
  const [seFinish, setSeFinish] = useState(null)
  // const [maxPoints,setMaxPoints] = useState(0)
  const [img, setImg] = useState({
    1: [],
    2: [],
    3: [],
    4: []
  })


  const apiRequest = () => {
    //  const endPoint = `https://api.unsplash.com/photos/?client_id=${clientId}&per_page=${manyBoxes[level]}&query=mountain&page=${img}`
    const endPoint = `https://api.unsplash.com/search/photos/?client_id=${clientId}&query=${category}&per_page=30`

    // const endPoint = 'https://api.unsplash.com/search/photos/?client_id=BTtUfQ1wl6hb1I3inmzidGfF0qFLvvN71JApPdcu1EQ&query=mountains&per_page=10&page=2'
    fetch(endPoint)
      .then((response) => response.json())
      .then((jsonData) => {
        console.log(jsonData)
        setImg({
          1: jsonData.results.slice(0, 3),
          2: jsonData.results.slice(4, 10),
          3: jsonData.results.slice(10, 19),
          4: jsonData.results.slice(18)
        })
      })
      .catch((eror) => console.log('error: ', eror))
  }


  useEffect(() => {
    //if select play again doesn't call api again
    if (img[1] == '') apiRequest()

  }, [])

  useEffect(() => {
    
    if (seFinish) {
      console.log('sefinish')
      setPreviousGame([true, points])
      setShowTab('endGame')
      resetStats()

    }
    else if (seFinish === false) {
      console.log('sigue', seFinish)
      setPreviousGame([false, points])
      resetStats()
      setShowTab('endGame')


    }
  }, [seFinish])

  const boxClicked = (e) => {
    imgSort()
    let imgClicked = wasImageClicked(e.id);
    if (imgClicked != undefined) { setSeFinish(false); return } else addImageClicked(e.id);

    let nextLevel = isNextLevel()
    nextLevel ? setNextLevel() : console.log('no next level');
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

  /*
  const isMaxPoint = () => {
    if (points > maxPoints){
      setMaxPoints(points)
    }
  }*/
  const wasLastLevel = () => {
    return level == Object.keys(img).length
  }


  const resetStats = () => {
    setlevel(1)
    setNumberClicked([])
    setPoints(0)
  }
  const goMenu = () => {
    resetStats()
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
    console.log(lastLevel)
    if (lastLevel) return setSeFinish(true)
    setlevel(level + 1)
    setNumberClicked([])

  }

  const imgSort = () => {
    //don't need to use setImg because useState allow re order but not modify element
    const newData = img[level].sort(() => Math.random() - 0.5)
  }

  return (
    <div className="App ">
      <Header points={points} goMenu={goMenu} />

      <div className='App-header'>

        {img[level].map((elem) => {
          return <Box val={elem} level={level} key={elem.id} boxClicked={boxClicked} />
        })}
      </div>

    </div>
  );
}

export default Game;



//si esta sin nada actualiza la 1ra vez que hay un cambio, y si hay
//si tiene corchete vacio solo actualiza cuando renderiza
//si le pasas parametro actualiza con parametro