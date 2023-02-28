import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Box from './Box';

const clientId = 'BTtUfQ1wl6hb1I3inmzidGfF0qFLvvN71JApPdcu1EQ'

function Game() {
  const [numberClicked, setNumberClicked] = useState([])
  const [level, setlevel] = useState(1)
  const [points,setPoints] = useState(0)
  const [maxPoints,setMaxPoints] = useState(0)
  const [img, setImg] = useState({
    1: [],
    2: [],
    3: [],
    4: []
  })


  useEffect(()=>{
    console.log(img)
  },[img])

  const apiRequest = () => {
    //  const endPoint = `https://api.unsplash.com/photos/?client_id=${clientId}&per_page=${manyBoxes[level]}&query=mountain&page=${img}`
    const endPoint = `https://api.unsplash.com/search/photos/?client_id=${clientId}&query=forest&page=${level}&per_page=30`

    // const endPoint = 'https://api.unsplash.com/search/photos/?client_id=BTtUfQ1wl6hb1I3inmzidGfF0qFLvvN71JApPdcu1EQ&query=mountains&per_page=10&page=2'
    fetch(endPoint)
      .then((response) => response.json())
      .then((jsonData) => {
        console.log(jsonData)
        setImg({
          1: jsonData.results.slice(0,4),
          2: jsonData.results.slice(4,10),
          3: jsonData.results.slice(10,18),
          4: jsonData.results.slice(18)
        })
      })
      .catch((eror) => console.log('error: ', eror))
  }
  useEffect(()=>{
    isMaxPoint()
  },[points])
  useEffect(() => {
    console.log(level,numberClicked)

  }, [level,numberClicked])

  useEffect(() => {
    console.log(img)
  }, [img])

  useEffect(()=>{
    apiRequest()
    console.log(img)
  },[level])

  const boxClicked = (e) => {
    imgSort()
    let imgClicked = wasImageClicked(e.id);
    if (imgClicked != undefined) { endGame(false); return } else addImageClicked(e.id);

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

  const incrementPoint= () => {
    setPoints(points + 1)
   
  }
  const isMaxPoint = () => {
    if (points > maxPoints){
      setMaxPoints(points)
    }
  }
  const wasLastLevel = () => {
    return level == Object.keys(img).length
  }
  const endGame = (win) => {
    console.log('END GAME', win)
    setlevel(1)
    setNumberClicked([])
    setPoints(0)
  }

  const isNextLevel = () => {
    const valueLength = img[level].length;
    // is +1 because the updated value reflect after, and if use useffect, will render 1 time before and will activate setNextLevel
    const numberClickedLength = numberClicked.length + 1
    //  console.log(valueLength, numberClickedLength, numberClicked, 'level:', level)
    console.log(numberClicked)
    return valueLength == numberClickedLength

  }

  const setNextLevel = () => {
    let lastLevel = wasLastLevel();
    console.log(lastLevel)
    if (lastLevel) return endGame(true)
    setlevel(level + 1)
    console.log('sige aun')
    // setImg([...img,...[3,4]])
    setNumberClicked([])

  }

  const imgSort = () => {
    //don't need to use setImg because useState allow re order but not modify element
    const newData = img[level].sort(() => Math.random() - 0.5)
    // setImg(img.map(elem => { return elem }))
  }

  return (
    <div className="App ">
      <div className='showPoints'>
      <p>points: {points}</p>
      <p>max points: {maxPoints}</p>
      </div>
  

<div className='App-header'>
{img[level].map((elem) => {
        return <Box val={elem} level={level} boxClicked={boxClicked} />
      })} 
</div>
      
    </div>
  );
}

export default Game;



//si esta sin nada actualiza la 1ra vez que hay un cambio, y si hay 
//si tiene corchete vacio solo actualiza cuando renderiza
//si le pasas parametro actualiza con parametro