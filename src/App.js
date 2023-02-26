import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Box from './Box';

const clientId = 'BTtUfQ1wl6hb1I3inmzidGfF0qFLvvN71JApPdcu1EQ'

function App() {
  const [numberClicked, setNumberClicked] = useState([])
  const [level, setlevel] = useState(1)
  const [img, setImg] = useState([])
  const manyBoxes = {
    1: 2,
    2: 4,
    3: 8,
    4: 10,
    5: 12,
    6: 18
  }

  const apiRequest = () => {
    //  const endPoint = `https://api.unsplash.com/photos/?client_id=${clientId}&per_page=${manyBoxes[level]}&query=mountain&page=${img}`
    const endPoint = `https://api.unsplash.com/search/photos/?client_id=${clientId}&query=forest&page=${level}&per_page=${manyBoxes[level]}`

    // const endPoint = 'https://api.unsplash.com/search/photos/?client_id=BTtUfQ1wl6hb1I3inmzidGfF0qFLvvN71JApPdcu1EQ&query=mountains&per_page=10&page=2'
    fetch(endPoint)
      .then((response) => response.json())
      .then((jsonData) => {
        console.log(jsonData)
        setImg([...jsonData.results])
      })
      .catch((eror) => console.log('error: ', eror))
  }

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
    updateData()
    let imgClicked = wasImageClicked(e);
    if (imgClicked != undefined) { endGame(false); return } else addImageClicked(e);

    let nextLevel = isNextLevel()
    nextLevel ? setNextLevel() : console.log('no next level');
  }

  const wasImageClicked = (number) => {
    const alreadyClicked = numberClicked.find(elem => elem == number);
    return alreadyClicked
  }

  const addImageClicked = (e) => {
    setNumberClicked([...numberClicked, e])
  }

  const wasLastLevel = () => {
    return level == Object.keys(manyBoxes).length -1
  }
  const endGame = (win) => {
    console.log('END GAME', win)
    setlevel(1)
    setNumberClicked([])
  }

  const isNextLevel = () => {
    const valueLength = img.length;
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
    // setImg([...img,...[3,4]])
    setNumberClicked([])

  }

  const updateData = () => {
    //don't need to use setImg because useState allow re order but not modify element
    const newData = img.sort(() => Math.random() - 0.5)
    // setImg(img.map(elem => { return elem }))
  }

  return (
    <div className="App App-header">

      {img.map((elem) => {
        return <Box val={elem} level={level} boxClicked={boxClicked} />
      })}
    </div>
  );
}

export default App;



//si esta sin nada actualiza la 1ra vez que hay un cambio, y si hay 
//si tiene corchete vacio solo actualiza cuando renderiza
//si le pasas parametro actualiza con parametro