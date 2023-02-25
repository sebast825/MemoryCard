import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Box from './Box';

const clientId = 'BTtUfQ1wl6hb1I3inmzidGfF0qFLvvN71JApPdcu1EQ'

function App() {
  const [value, setValue] = useState([1, 2, 3, 4])
  const [numberClicked, setNumberClicked] = useState([])
  const [lvl, setLvl] = useState(1)
  const [img, setImg] = useState([])
  const manyBoxes = {
    1: 4,
    2: 6,
    3: 8,
    4: 10,
    5: 12,
    6: 18
  }

  const apiRequest = () => {
    //  const endPoint = `https://api.unsplash.com/photos/?client_id=${clientId}&per_page=${manyBoxes[lvl]}&query=mountain&page=${img}`
     const endPoint = `https://api.unsplash.com/search/photos/?client_id=${clientId}&query=mountain`

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
    apiRequest()
  }, [])

  useEffect(() => {
    console.log(img)
  }, [img])

  const saveNumber = (e) => {
    isNumberClicked(e)
    setNumberClicked([...numberClicked, e])
    setLvl(lvl + 1)
  }

  const isNumberClicked = (number) => {
    const alreadyClicked = numberClicked.find(elem => elem == number);
    if (alreadyClicked != undefined) console.log('PERDISTE');

  }

  useEffect(() => {
    isNextLevel()

  }, [numberClicked])

  const isNextLevel = () => {
    const valueLength = value.length;
    const numberClickedLength = numberClicked.length
    console.log(valueLength, numberClickedLength, numberClicked)
    if (valueLength == numberClickedLength) {
      console.log('next level')
      setNextLevel()
    }
  }

  const setNextLevel = () => {
    const addBox = [Number(value.slice(-1)) + 1, Number(value.slice(-1)) + 2]
    setValue([...value, ...addBox])
  }

  const updateData = () => {
    const newData = img.sort(() => Math.random() - 0.5)
    setImg(img.map(elem => { return elem }))
  }

  return (
    <div className="App App-header">
     
       {img.map((elem)=>{
      return <Box val={elem} updateData={updateData} saveNumber={saveNumber} />
      })} 
    </div>
  );
}

export default App;



//si esta sin nada actualiza la 1ra vez que hay un cambio, y si hay 
//si tiene corchete vacio solo actualiza cuando renderiza
//si le pasas parametro actualiza con parametro