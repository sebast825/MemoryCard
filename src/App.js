import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Box from './Box';


function App() {
  const [value, setValue] = useState(['https://source.unsplash.com/random/400x400/?creepy'])
  const [numberClicked, setNumberClicked] = useState([])

  const saveNumber = (e) => {
    isNumberClicked(e)
    setNumberClicked([...numberClicked, e])
  }

  const isNumberClicked = (number) => {
    const alreadyClicked = numberClicked.find(elem => elem == number);
    if (alreadyClicked != undefined) console.log('PERDISTE');

  }

  useEffect(()=>{
    isNextLevel()

  },[numberClicked])
 
  const isNextLevel = () =>{
    const valueLength = value.length;
    const numberClickedLength = numberClicked.length
    console.log(valueLength, numberClickedLength, numberClicked)
    if (valueLength == numberClickedLength) {
      console.log('next level')
      setNextLevel()
    }
  }

  const setNextLevel = () => {
    const addBox = [Number(value.slice(-1)) + 1,Number(value.slice(-1)) +2]
    setValue([...value,...addBox])
  }

  const updateData = () => {
    const newData = value.sort(() => Math.random() - 0.5)
    setValue(newData.map(elem => { return elem }))
  }

  return (
    <div className="App App-header">
      {value.map((elem)=>{
      return <Box val={elem} updateData={updateData} saveNumber={saveNumber} />
      })}
    </div>
  );
}

export default App;



//si esta sin nada actualiza la 1ra vez que hay un cambio, y si hay 
//si tiene corchete vacio solo actualiza cuando renderiza
//si le pasas parametro actualiza con parametro