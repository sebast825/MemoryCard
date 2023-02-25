import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Box from './Box';


function App() {
  const [value, setValue] = useState([1, 2, 3, 4, 5])
  const [numberClicked, setNumberClicked] = useState([])

  const saveNumber = (e) => {
    isNumberClicked(e)
    setNumberClicked([...numberClicked, e])
  }

  const isNumberClicked = (number) => {
    const alreadyClicked = numberClicked.find(elem => elem == number);
    if (alreadyClicked != undefined) console.log('PERDISTE');
  }

  const updateData = () => {
    const newData = value.sort(() => Math.random() - 0.5)
    setValue(newData.map(elem => { return elem }))
  }

  return (
    <div className="App App-header">
      <Box val={value[0]} updateData={updateData} saveNumber={saveNumber} />
      <Box val={value[1]} updateData={updateData} saveNumber={saveNumber} />
      <Box val={value[2]} updateData={updateData} saveNumber={saveNumber} />
      <Box val={value[3]} updateData={updateData} saveNumber={saveNumber} />
      <Box val={value[4]} updateData={updateData} saveNumber={saveNumber} />
    </div>
  );
}

export default App;



//si esta sin nada actualiza la 1ra vez que hay un cambio, y si hay 
//si tiene corchete vacio solo actualiza cuando renderiza
//si le pasas parametro actualiza con parametro